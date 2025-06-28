import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'

/** @typedef {NonNullable<import('../schema.d.ts').ResumeSchema['work']>[number]} Work */
/** @typedef {Pick<Work, 'highlights'>} NestedWorkItem */
/** @typedef {Pick<Work, 'description' | 'name' | 'url'> & { items: NestedWorkItem[] }} NestedWork */

/**
 * @param {import('../schema.d.ts').ResumeSchema['work']} work
 * @param {import('../schema.d.ts').ResumeSchema['labels']} labels
 * @returns {string | false}
 */
export default function Work(work = [], labels) {
  const highlights = work.reduce((acc, { highlights }) => {   
    if(highlights) {
      for (let item of highlights) {
        acc.add(item.subject)
      }
    }
    return acc;
  }, new Set())
  return (
    work.length > 0 &&
    html`
      <div id="workSkill">
        <h3>${labels.worksSkill}</h3>
          <div class="highlights">
            <ul>
              ${Array.from(highlights).map(highlight => html`<li>${markdown(highlight)}</li>`)}
            </ul>
          </div>
      </div>
    `
  )
}
