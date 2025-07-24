import { html } from '@rbardini/html'

/**
 * @param {import('../schema.d.ts').ResumeSchema['interests']} interests
 * @returns {string | false}
 */
export default function Interests(interests = [], label = "") {
  return (
    interests.length > 0 &&
    html`
        <div class="container interests-container">
          <h3>${label}</h3>
          ${interests.map(
            ({ keywords = [], name })  => `
            <section class="item">
                <div class="main-skill skill left">${name}</div>
            </section>
        `).join('')}
    </div>
    `
  )
}