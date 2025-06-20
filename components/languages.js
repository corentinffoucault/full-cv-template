import { html } from '@rbardini/html'

/**
 * @param {import('../schema.d.ts').ResumeSchema['languages']} languages
 * @returns {string | false}
 */
export default function Languages(languages = [], label="Langue") {
  return (
    languages.length > 0 &&
    html`
        <div class="container languages-container">
        <h3 class="bold">${label}</h3>

        <ul class="minimal">
         ${languages.map(
            ({ fluency, language }) => html` <li>
                    <div class="subWorkInfo"><h6>${language}:  </h6>${fluency ? `<em> ${fluency}</em>` : ''}</div>
                </li>`,
          )}
        </ul>
    </div>
    `
  )
}