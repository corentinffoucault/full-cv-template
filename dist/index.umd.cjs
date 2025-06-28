(function(n,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("@rbardini/html"),require("micromark"),require("striptags"),require("feather-icons")):typeof define=="function"&&define.amd?define(["exports","@rbardini/html","micromark","striptags","feather-icons"],t):(n=typeof globalThis<"u"?globalThis:n||self,t(n.jsonresumeThemeEven={},n.html,n.micromark,n.striptags,n.feather))})(this,function(n,t,L,S,k){"use strict";var w=Object.freeze,Z=Object.defineProperty;var D=(n,t)=>w(Z(n,"raw",{value:w(t||n.slice())}));var z;const T=`const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

class TimeDuration extends HTMLElement {
  connectedCallback() {
    const [from, to] = this.querySelectorAll('time')
    if (!from) return

    const startDate = new Date(from.dateTime || from.textContent)
    const endDate = new Date(to ? to.dateTime || to.textContent : Date.now())
    const diffDate = new Date(endDate - startDate)

    const years = diffDate.getFullYear() - 1970
    const months = diffDate.getMonth()
    const days = diffDate.getDate() - 1

    const segments = [
      years && pluralize(years, 'yr'),
      months && pluralize(months, 'mo'),
      days && !years && !months && pluralize(days, 'day'),
    ].filter(Boolean)
  }
}

customElements.define('time-duration', TimeDuration)
`,j=':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:200px;margin-left:10px;word-wrap:break-word}.headers{width:auto;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;display:grid;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;display:flex;margin-left:10px;flex-direction:column}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}#workSkill{padding-bottom:2em}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5,.simplifyWorkPosition{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:25px}.stackSimple{display:grid;gap:1em;padding-top:10px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';function C(e={}){const i=e.themeOptions?.colors;return i&&Object.entries(i).map(([o,[a,l=a]])=>`--color-${o}-light:${a}; --color-${o}-dark:${l};`).join(" ")}function f(e,i=!1){const o=L(e);return i?S(o):o}const W=e=>new Date(e).toLocaleDateString("en",{month:"short",year:"numeric",timeZone:"UTC"});function q(e){return t.html`<time datetime="${e}">${W(e)}</time>`}function I(e,i){return i===e?$(i):t.html`<time-duration>${$(e)} – ${i?$(i):"Present"}</time-duration>`}function $(e){return e.length===4?e:q(e)}const M=e=>e.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function v(e,i){return i?e?t.html`<a href="${e}">${i}</a>`:i:e&&t.html`<a href="${e}">${M(e)}</a>`}function O(e=[],i="Diplome"){return e.length>0&&t.html`
      <div class="container education-container">
        <h3 class="bold">Diploma</h3>
      <section id="education">
        <div>
          ${e.map(({area:o,courses:a=[],institution:l,startDate:c,endDate:h,studyType:r,url:s})=>t.html`
              <article>
                <header>
                  <h5>${v(s,l)}</h5>
                  <div>
                    ${o&&t.html`<strong>${o}</strong>`}
                    ${h}
                  </div>
                </header>
                ${r&&f(r)}
                ${a.length>0&&t.html`
                  <h5>Courses</h5>
                  <ul>
                    ${a.map(m=>t.html`<li>${f(m)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
      </div>
    `}function g(e,i){return(k.icons[e.toLowerCase()]||i&&k.icons[i.toLowerCase()])?.toSvg({width:16,height:16})}const P=e=>Intl.DisplayNames?new Intl.DisplayNames(["en"],{type:"region"}).of(e):e;function A(e={}){const{email:i,image:o,birth:a,label:l,location:c,name:h,phone:r,profiles:s=[],summary:m,url:p}=e;function u(d){var y=Date.now()-d,b=new Date(y);return Math.abs(b.getUTCFullYear()-1970)}return t.html`
    <header class="masthead">
      ${o&&t.html`<img src="${o}" alt="" />`}
      <div>${h&&t.html`<h1>${h}</h1>`} ${l&&t.html`<h2>${l}</h2>`}</div>
      <div>${a&&t.html`<h6>Age: ${u(new Date(a))}</h6>`}</div>
      ${m&&t.html`<article>${f(m)}</article>`}
      <ul class="icon-list">
        ${c?.city&&t.html`
          <li>
            ${g("map-pin")} ${c.city}${c.countryCode&&t.html`, ${P(c.countryCode)}`}
          </li>
        `}
        ${i&&t.html`
          <li>
            ${g("mail")}
            <a href="mailto:${i}">${i}</a>
          </li>
        `}
        ${r&&t.html`
          <li>
            ${g("phone")}
            <a href="tel:${r.replace(/\s/g,"")}">${r}</a>
          </li>
        `}
        ${p&&t.html`<li>${g("link")} ${v(p)}</li>`}
        ${s.map(({network:d,url:y,username:b})=>t.html`
            <li>
              ${d&&g(d,"user")} ${v(y,b)}
              ${d&&t.html`<span class="network">(${d})</span>`}
            </li>
          `)}
      </ul>
    </header>
  `}function E(e=[],i="Passion"){return e.length>0&&t.html`
        <div class="container interests-container">
          <h3>${i}</h3>
          ${e.map(({keywords:o=[],name:a})=>`
            <section class="item">
                <div class="main-skill skill left">${a}</div>
            </section>
        `).join("")}
    </div>
    `}function R(e=[],i="Langue"){return e.length>0&&t.html`
        <div class="container languages-container">
        <h3 class="bold">${i}</h3>

        <ul class="minimal">
         ${e.map(({fluency:o,language:a})=>t.html` <li>
                    <div class="subWorkInfo"><h6>${a}:  </h6>${o?`<em> ${o}</em>`:""}</div>
                </li>`)}
        </ul>
    </div>
    `}function U(e={}){const{name:i,summary:o}=e;return t.html`
    ${i&&t.html`<title>${i}</title>`}
    ${o&&t.html`<meta name="description" content="${f(o,!0)}" />`}
  `}function x(e=[]){return e.length>0&&t.html`

      <div class="container skill-container">
      <section id="skills">
      ${e.map(i=>`
           <section class="container">
           <div class="title">
            <h3 class="bold">${i.name}</h3>
            <div class="keyline"></div>
          </div>
                <div class="minimal flex-container">
                ${i.keywords?.map(o=>`<div class="main-skill skill left">${o}</div>`).join("")}
                </div>
            </section>
        `)}
      </section>
      </div>
    `}function B(e=[],i){const o=e.reduce((a,{description:l,name:c,url:h,...r})=>{const s=a[a.length-1];return s&&s.name===c?s.items.push(r):a.push({description:l,name:c,url:h,items:[r]}),a},[]);return e.length>0&&t.html`
      <div id="work">
        <h3>${i.works}</h3>
        <div class="stackSimple">
          ${o.map(({description:a,name:l,url:c,items:h=[]})=>t.html`
              <article>
                <header>
                  <h4>${v(c,l)}</h4>
                  <div class="meta">${a&&t.html`<div>${a}</div>`}</div>
                </header>
                <div class="timeline">
                  ${h.reduce((r,{position:s,startDate:m,endDate:p})=>{let u=!1;for(let d of r)if(s===d.position){p===d.startDate?(d.startDate=m,u=!0):m===d.endDate&&(d.endDate=p,u=!0);break}return u||r.push({position:s,startDate:m,endDate:p}),r},[]).map(({position:r,startDate:s,endDate:m})=>t.html`
                      <div>
                        <span>
                          <div><span class="simplifyWorkPosition"><b>${r}</b></span>${s&&t.html`: ${I(s,m)}`}</div>
                        </span>
                      </div>
                    `)}
                </div>
              </article>
            `)}
        </div>
      </div>
    `}function F(e=[],i){const o=e.reduce((a,{highlights:l})=>{if(l)for(let c of l)a.add(c.subject);return a},new Set);return e.length>0&&t.html`
      <div id="workSkill">
        <h3>${i.worksSkill}</h3>
          <div class="highlights">
            <ul>
              ${Array.from(o).map(a=>t.html`<li>${f(a)}</li>`)}
            </ul>
          </div>
      </div>
    `}function H(e,{css:i,js:o}={}){return t.html`<!doctype html>
    <html lang="en" style="${C(e.meta)}">
      <head>
        <meta charset="utf-8" />
        ${U(e.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${i&&t.html`<style>
          ${i}
        </style>`}
        ${o&&t.html(z||(z=D([`<script type="module">
          `,`
        <\/script>`])),o)}
      </head>
        <div class="headers">
           ${A(e.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${O(e.education)}
          ${R(e.languages,e.labels.languages)}
          ${x(e.skills)} 
          ${x(e.env)} 
          ${E(e.interests)}
        </aside>
        <div class="right-column">
          
          ${F(e.work,e.labels)} 
          ${B(e.work,e.labels)} 
        </div>
        </div>
      </body>
    </html>`}const N={mediaType:"print",printBackground:!0},Y=e=>H(e,{css:j,js:T});n.pdfRenderOptions=N,n.render=Y,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
