import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

/** @typedef {NonNullable<import('../schema.d.ts').ResumeSchema['work']>[number]} Work */
/** @typedef {Pick<Work, 'languages' | 'env' | 'tools' | 'method' | 'team' | 'highlights' | 'location' | 'position' | 'startDate' | 'endDate' | 'summary' | 'labels' >} NestedWorkItem */
/** @typedef {Pick<Work, 'description' | 'name' | 'url'> & { items: NestedWorkItem[] }} NestedWork */

/**
 * @param {import('../schema.d.ts').ResumeSchema['work']} work
 * @param {import('../schema.d.ts').ResumeSchema['labels']} labels
 * @returns {string | false}
 */
export default function Work(work = [], labels) {
  const nestedWork = work.reduce((acc, { description, name, url, ...rest }) => {
    const prev = acc[acc.length - 1]
    if (prev && prev.name === name) prev.items.push(rest)
    else acc.push({ description, name, url, items: [rest] })
    return acc
  }, /** @type {NestedWork[]} */ ([]))
  return (
    work.length > 0 &&
    html`
      <div id="work">
        <h3>${labels.works}</h3>
        <div class="stackSimple">
          ${nestedWork.map(
            ({ description, name, url, items = [] }) => html`
              <article>
                <header>
                  <h4>${Link(url, name)}</h4>
                  <div class="meta">${description && html`<div>${description}</div>`}</div>
                </header>
                <div class="timeline">
                  ${items.reduce(
                    (acc, { position, startDate, endDate }) => {
                      let hasMelt = false;
                      for (let element of acc) {
                        if (position===element.position) {
                          if (endDate === element.startDate) {
                            element.startDate = startDate;
                            hasMelt = true;
                          } else if (startDate === element.endDate) {
                            element.endDate = endDate;
                            hasMelt = true;
                          }
                          break;
                        }
                      } 
                      if(!hasMelt) {
                        acc.push({ position, startDate, endDate })
                      }
                      return acc;
                    }, []).map(
                    ({ position, startDate, endDate }) => html`
                      <div>
                        <span>
                          <div><span class="simplifyWorkPosition"><b>${position}</b></span>${startDate && html`: ${Duration(startDate, endDate)}`}</div>
                        </span>
                      </div>
                    `,
                  )}
                </div>
              </article>
            `,
          )}
        </div>
      </div>
    `
  )
}
