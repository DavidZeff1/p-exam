import { navStructure } from './topics.js';

export const sections = navStructure.flatMap(category => category.sections.map(section => ({
  id: `${category.id}-${section.title[0].toLowerCase()}`,
  title: section.title, letter: section.title[0], categoryId: category.id,
  categoryTitle: category.title, items: section.items,
  coreItems: section.items.filter(item => !item.enrichment),
})));
const byId = Object.fromEntries(sections.map(section => [section.id, section]));
export const getSection = id => Object.hasOwn(byId, id) ? byId[id] : undefined;
export const sectionQuestionsPath = id => `sections/${id}/questions`;
export const getSectionForRoute = path => {
  const match = /^sections\/([^/]+)\/questions$/.exec(path);
  return match ? getSection(match[1]) : undefined;
};
export const getTopicSection = topicId => sections.find(section => section.items.some(item => item.id === topicId));
export function getSectionPager(section) {
  const index = sections.findIndex(item => item.id === section.id);
  const next = sections[index + 1];
  return {
    prev: { path: `${section.items.at(-1).id}/questions`, label: `Questions · ${section.items.at(-1).label}` },
    next: next && { path: next.items[0].id, label: next.items[0].label },
  };
}
