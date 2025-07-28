import { html } from '@rbardini/html'
import colors from '../utils/colors.js'
import Education from './education.js'
import Header from './header.js'
import Interests from './interests.js'
import Languages from './languages.js'
import Meta from './meta.js'
import Skills2 from './skills2.js'
import Work from './work.js'
import WorkSimplify from './WorkSimplify.js'
import WorkSkill from './WorkSkill.js'

/**
 * @param {import('../schema.d.ts').ResumeSchema} resume
 * @param {object} [options]
 * @param {string} [options.css]
 * @param {string} [options.js]
 * @returns
 */
export default function Resume(resume, { css, js } = {}) {
  return html`<!doctype html>
    <html lang="en" style="${colors(resume.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Meta(resume.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${css &&
        html`<style>
          ${css}
        </style>`}
        ${js &&
        html`<script type="module">
          ${js}
        </script>`}
      </head>
        <div class="headers">
           ${Header(resume.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${Education(resume.education, resume.labels.diploma)}
          ${Languages(resume.languages, resume.labels.language)}
          ${Skills2(resume.skills)} 
          ${Skills2(resume.env)} 
          ${Interests(resume.interests, resume.labels.interests)}
        </aside>
        <div class="vl"></div>
        <div class="right-column">
                  
          ${WorkSkill(resume.work, resume.labels)} 
          ${WorkSimplify(resume.work, resume.labels)} 
        </div>
        </div>
      </body>
    </html>`
}