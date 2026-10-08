"""Generate 40 new original section questions for each of the 20 lettered sections.
Existing chapter and timed banks are read, never rewritten. No SOA text is copied.
"""
import json, sys, subprocess
from pathlib import Path
sys.dont_write_bytecode = True
import importlib.util
spec = importlib.util.spec_from_file_location('write_advanced', Path(__file__).with_name('write-advanced.py'))
source = importlib.util.module_from_spec(spec)
spec.loader.exec_module(source)
FAMILIES, MAPPING, EXTRA_MAPPING, Q, W, f, phi = (getattr(source, name) for name in ['FAMILIES', 'MAPPING', 'EXTRA_MAPPING', 'Q', 'W', 'f', 'phi'])
from section_families import register

sections = json.loads(subprocess.check_output(['node', '--input-type=module', '-e',
    "import {sections} from './scripts/sections.js';console.log(JSON.stringify(sections))"], text=True))
scores = json.loads(subprocess.check_output(['node', '--input-type=module', '-e',
    "import {familyDifficulty} from './scripts/difficulty.js';console.log(JSON.stringify(familyDifficulty))"], text=True))
integrated = register(FAMILIES, Q, W, f, phi)
old = json.loads(subprocess.check_output(['node', '--input-type=module', '-e',
    "import c from './scripts/content/challenges.js';import e from './scripts/content/exam-bank.js';console.log(JSON.stringify([...Object.values(c).flat(),...Object.values(e).flat()]))"], text=True))
seen = {q['question'] for q in old}
out = Path('scripts/content/section-questions')
out.mkdir(exist_ok=True)
total = 0
for section_index, section in enumerate(sections):
    key = section['id']
    items = section['coreItems']
    group = key.rsplit('-', 1)[0]
    new_name = 'cumulative-' + group + '-' + section['letter'].lower()
    assert new_name in integrated, new_name
    questions = []
    # Eight cumulative questions, balanced among the family's requested quantities.
    for slot in range(8):
        question = integrated[new_name](section_index * 97 + slot)
        assert question['question'] not in seen
        question.update(id=f'section:{key}:{slot}', topicId=items[0]['id'],
            family=new_name, difficulty=question.pop('estimatedDifficulty'),
            relatedTopicIds=[item['id'] for item in items], cumulative=True)
        questions.append(question); seen.add(question['question'])
    # Rotate all constituent lessons and their authored reasoning families.
    for slot in range(8, 40):
        item = items[(slot - 8) % len(items)]
        candidates = MAPPING[item['id']] + EXTRA_MAPPING[item['id']]
        owners = {name: other for other in items for name in MAPPING[other['id']] + EXTRA_MAPPING[other['id']]}
        fallback = [name for name in owners if name not in candidates]
        candidates = candidates + fallback
        found = None
        for offset in range(len(candidates)):
            name = candidates[(offset + (slot - 8) // len(items)) % 5] if offset < 5 else candidates[offset]
            for attempt in range(400):
                seed = 300000 + section_index * 100003 + slot * 173 + attempt * 31
                try: question = FAMILIES[name](seed)
                except (ValueError, AssertionError, ZeroDivisionError): continue
                if question['question'] in seen: continue
                if len(set(question['choices'])) != 5: continue
                found = question; break
            if found: break
        if not found: raise RuntimeError(f'No distinct question for {key}, {item["id"]}, slot {slot}')
        found.update(id=f'section:{key}:{slot}', topicId=item['id'], family=name,
            difficulty=scores[name], relatedTopicIds=[owners[name]['id']], cumulative=False)
        found['topicId'] = owners[name]['id']
        questions.append(found); seen.add(found['question'])
    # Interleave cumulative and focused questions so every set mixes methods.
    questions = [q for block in range(4) for q in
        questions[block*2:block*2+2] + questions[8+block*8:8+(block+1)*8]]
    (out / f'{key}.js').write_text('export default ' + json.dumps(questions, ensure_ascii=False, indent=2) + ';\n')
    total += len(questions)
    print(f'{key}: {len(questions)} questions, {len(set(q["family"] for q in questions))} families')
print(f'{total} new questions across {len(sections)} sections')
