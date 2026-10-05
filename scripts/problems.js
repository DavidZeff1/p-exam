const modules = import.meta.glob('../problems/*.js');
export async function loadProblems(topicId) {
  const load = modules[`../problems/${topicId}.js`];
  if (!load) throw new Error(`No practice set for ${topicId}`);
  return (await load()).default;
}
