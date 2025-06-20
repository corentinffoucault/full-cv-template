import { html } from '@rbardini/html'

/**
 * @param {import('../schema').ResumeSchema['skills']} skills
 * @returns {string | false}
 */
export default function Skills2(skills = []) {
  return (
    skills.length > 0 &&
    html`

      <div class="container skill-container">
      <section id="skills">
      ${skills.map(
        skill => `
           <section class="container">
           <div class="title">
            <h3 class="bold">${skill.name}</h3>
            <div class="keyline"></div>
          </div>
                <div class="minimal flex-container">
                ${skill.keywords?.map(
                   keyword => `<div class="main-skill skill left">${keyword}</div>`).join('')}
                </div>
            </section>
        `,
      )}
      </section>
      </div>
    `
  )
}