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
import workSkill from './workSkill.js'

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
          ${Education(resume.education)}
          ${Languages(resume.languages, resume.labels.languages)}
          ${Skills2(resume.skills)} 
          ${Skills2(resume.env)} 
          ${Interests(resume.interests)}
        </aside>
        <div class="right-column">
          
          ${workSkill(resume.work, resume.labels)} 
          ${WorkSimplify(resume.work, resume.labels)} 
        </div>
        </div>
      </body>
    </html>`
}