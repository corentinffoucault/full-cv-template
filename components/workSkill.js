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
  const highlightsByCat = work.reduce((acc, { highlights }) => {   
    if(highlights) {
      for (let item of highlights) {
        if (item.cat) {
          if (!acc.has(item.cat)) {
            acc.set(item.cat, new Set());
          }
          acc.get(item.cat).add(item.alternative || item.subject)
        }
      }
    }
    return acc;
  }, new Map())
  
  return (
    work.length > 0 &&
    html`
      <div id="workSkill">
          <div class="highlights">
          ${Array.from(highlightsByCat).map((cat)=> 
            html`<h3>${cat[0]}</h3>
            <ul>
              ${cat[1]?
                Array.from(cat[1]).sort().map(highlight => html`<li>${markdown(highlight)}</li>`):'aa'
              }
            </ul>`
            )
          }
          </div>
      </div>
    `
  )
}
