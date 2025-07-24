import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema['education']} education
 * @param {import('../schema.d.ts').ResumeSchema['labels']['diploma']} diploma
 * @returns {string | false}
 */
export default function Education(education = [], diploma) {
  return (
    education.length > 0 &&
    html`
      <div class="container education-container">
        <h3 class="bold">${diploma}</h3>
      <section id="education">
        <div>
          ${education.map(
            ({ area, courses = [], institution, startDate, endDate, studyType, url }) => html`
              <article>
                <header>
                  <h5>${Link(url, institution)}</h5>
                  <div>
                    ${area && html`<strong>${area}</strong>`}
                    ${endDate}
                  </div>
                </header>
                ${studyType && markdown(studyType)}
                ${courses.length > 0 &&
                html`
                  <h5>Courses</h5>
                  <ul>
                    ${courses.map(course => html`<li>${markdown(course)}</li>`)}
                  </ul>
                `}
              </article>
            `,
          )}
        </div>
      </section>
      </div>
    `
  )
}
