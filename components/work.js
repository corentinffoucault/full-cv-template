import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

/** @typedef {NonNullable<import('../schema.d.ts').ResumeSchema['work']>[number]} Work */
/** @typedef {Pick<Work, 'languages' | 'env' | 'tools' | 'method' | 'team' | 'highlights' | 'location' | 'position' | 'startDate' | 'endDate' | 'summary'>} NestedWorkItem */
/** @typedef {Pick<Work, 'description' | 'name' | 'url'> & { items: NestedWorkItem[] }} NestedWork */

/**
 * @param {import('../schema.d.ts').ResumeSchema['work']} work
 * @returns {string | false}
 */
export default function Work(work = [], label="Emplois", teamLabel="Equipe", language="Langage", toolsLabel="Outils", environment="Environnement", Methods="Méthodes") {
  const nestedWork = work.reduce((acc, { description, name, url, ...rest }) => {
    const prev = acc[acc.length - 1]
    if (prev && prev.name === name) prev.items.push(rest)
    else acc.push({ description, name, url, items: [rest] })
    return acc
  }, /** @type {NestedWork[]} */ ([]))
/*
 "team": {
        "back": 4,
        "front": 3,
        "fullStack": 0,
        "type": "Agile scrum"
      },
 */
  return (
    work.length > 0 &&
    html`
      <section id="work">
        <h3>${label}</h3>
        <div class="stack">
          ${nestedWork.map(
            ({ description, name, url, items = [] }) => html`
              <article>
                <header>
                  <h4>${Link(url, name)}</h4>
                  <div class="meta">${description && html`<div>${description}</div>`}</div>
                </header>
                <div class="timeline">
                  ${items.map(
                    ({ highlights = [], languages = [], tools = [], env = [], method = [], team, location, position, startDate, endDate, summary }) => html`
                      <div>
                        <div>
                          <h5>${position}</h5>
                          ${team && html`<div class="workmeta">
                            ${html`<div>${teamLabel} ${team.description}: ${team.back > 0 && html`${team.back} back`}${ team.front > 0 && team.back > 0  && html`, `}${team.front > 0 && html`${team.front} front`}${team.front + team.back > 0 && team.fullStack > 0 && html`, `}${ team.fullStack > 0 && html`${team.fullStack} fullStack`}</div>`}
                          </div>`}
                           
                          <div class="workmeta">
                            ${startDate && html`<div>${Duration(startDate, endDate)}</div>`}
                            ${location && html`<div>${location}</div>`}
                          </div>
                        </div>
                        ${summary && markdown(summary)}
                        <div class="workInfo">
                          <div class="highlights">
                            ${highlights.length > 0 &&
                            html`
                              <ul>
                                ${highlights.map(highlight => html`
                                <li>${markdown(highlight.subject)}</li>
                                ${highlight.detail && html`<ul>${highlight.detail.map(detail => html`<li>${markdown(detail)}</li>`)}</ul>`}
                                `)}
                              </ul>
                            `}
                          </div>
                          ${languages.length+tools.length+env.length+method.length > 0 && html`<div class="detail">
                              ${languages.length > 0 && html`<div class="keyWord minimal flex-container">
                                <b>${language}</b>: ${languages?.join(', ')}
                              </div>`}
                              ${tools.length > 0 && html`<div class="keyWord minimal flex-container">
                                <b>${toolsLabel}</b>: ${tools?.join(', ')}
                              </div>`}
                              ${env.length > 0 && html`<div class="keyWord minimal flex-container">
                                <b>${environment}</b>: ${env?.join(', ')}
                              </div>`}
                              ${method.length > 0 && html`<div class="keyWord minimal flex-container">
                                <b>${Methods}</b>: ${method?.join(', ')}
                              </div>`}
                          
                          </div>`}
                        </div>
                      </div>
                    `,
                  )}
                </div>
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
