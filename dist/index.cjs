"use strict";var b=Object.freeze,z=Object.defineProperty;var k=(t,e)=>b(z(t,"raw",{value:b(e||t.slice())}));Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("@rbardini/html"),S=require("micromark"),L=require("striptags"),x=require("feather-icons"),C=`const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
`,M=':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:214px;margin-left:10px;word-wrap:break-word}.vl{border-right:1px dashed gray}.headers{width:auto;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;display:flex;margin-left:20px;flex-direction:column}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}#workSkill{padding-bottom:2em}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5,.simplifyWorkPosition{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:grid;gap:inherit;grid-template-areas:"menu content";grid-template-columns:1fr 3fr;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>div.menu{grid-area:menu;margin-left:10px}.masthead>div.content{text-align:center;grid-area:content}.masthead>div.content>h1{line-height:100px}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:5px}.stackSimple{display:grid;gap:1em;padding-top:10px;padding-bottom:20px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';function W(t={}){const e=t.themeOptions?.colors;return e&&Object.entries(e).map(([a,[o,l=o]])=>`--color-${a}-light:${o}; --color-${a}-dark:${l};`).join(" ")}function f(t,e=!1){const a=S(t);return e?L(a):a}const j=t=>new Date(t).toLocaleDateString("en",{month:"short",year:"numeric",timeZone:"UTC"});function q(t){return i.html`<time datetime="${t}">${j(t)}</time>`}function I(t,e){return e===t?y(e):i.html`<time-duration>${y(t)} – ${e?y(e):"Present"}</time-duration>`}function y(t){return t.length===4?t:q(t)}const T=t=>t.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function u(t,e){return e?t?i.html`<a href="${t}">${e}</a>`:e:t&&i.html`<a href="${t}">${T(t)}</a>`}function A(t=[],e){return t.length>0&&i.html`
      <div class="container education-container">
        <h3 class="bold">${e}</h3>
      <section id="education">
        <div>
          ${t.map(({area:a,courses:o=[],institution:l,startDate:r,endDate:m,studyType:n,url:s})=>i.html`
              <article>
                <header>
                  <h5>${u(s,l)}</h5>
                  <div>
                    ${a&&i.html`<strong>${a}</strong>`}
                    ${m}
                  </div>
                </header>
                ${n&&f(n)}
                ${o.length>0&&i.html`
                  <h5>Courses</h5>
                  <ul>
                    ${o.map(d=>i.html`<li>${f(d)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
      </div>
    `}function g(t,e){return(x.icons[t.toLowerCase()]||e&&x.icons[e.toLowerCase()])?.toSvg({width:16,height:16})}const O=t=>Intl.DisplayNames?new Intl.DisplayNames(["en"],{type:"region"}).of(t):t;function P(t={}){const{email:e,image:a,birth:o,label:l,location:r,name:m,phone:n,profiles:s=[],summary:d,url:h}=t;function p(c){var v=Date.now()-c,$=new Date(v);return Math.abs($.getUTCFullYear()-1970)}return i.html`
    <header class="masthead">

      <div class="menu">
        <div>${m&&i.html`<h6>${m}</h6>`}</div>
        <div>${o&&i.html`Age: ${p(new Date(o))}`}</div>
        ${d&&i.html`<article>${f(d)}</article>`}
        <ul class="icon-list">
          ${r?.city&&i.html`
            <li style="font-size: 10px;">
              ${g("map-pin")} ${r.city}${r.countryCode&&i.html`, ${O(r.countryCode)}`}
            </li>
          `}
          ${e&&i.html`
            <li>
              ${g("mail")}
              <a href="mailto:${e}">${e}</a>
            </li>
          `}
          ${n&&i.html`
            <li>
              ${g("phone")}
              <a href="tel:${n.replace(/\s/g,"")}">${n}</a>
            </li>
          `}
          ${h&&i.html`<li>${g("link")} ${u(h)}</li>`}
          ${s.map(({network:c,url:v,username:$})=>i.html`
              <li>
                ${c&&g(c,"user")} ${u(v,$)}
                ${c&&i.html`<span class="network">(${c})</span>`}
              </li>
            `)}
        </ul>
      </div>

      <div class="content">
        ${l&&i.html`<h1>${l}</h1>`}
      </div>
    </header>
  `}function R(t=[],e=""){return t.length>0&&i.html`
        <div class="container interests-container">
          <h3 class="bold">${e}</h3>
          ${t.map(({keywords:a=[],name:o})=>`
            <section class="item">
                <div class="main-skill skill left">${o}</div>
            </section>
        `).join("")}
    </div>
    `}function B(t=[],e){return t.length>0&&i.html`
        <div class="container languages-container">
        <h3 class="bold">${e}</h3>

        <ul class="minimal">
         ${t.map(({fluency:a,language:o})=>i.html` <li>
                    <div class="subWorkInfo"><h6>${o}:  </h6>${a?`<em> ${a}</em>`:""}</div>
                </li>`)}
        </ul>
    </div>
    `}function E(t={}){const{name:e,summary:a}=t;return i.html`
    ${e&&i.html`<title>${e}</title>`}
    ${a&&i.html`<meta name="description" content="${f(a,!0)}" />`}
  `}function w(t=[]){return t.length>0&&i.html`

      <div class="container skill-container">
      <section id="skills">
      ${t.map(e=>`
           <section class="container">
           <div class="title">
            <h3 class="bold">${e.name}</h3>
            <div class="keyline"></div>
          </div>
                <div class="minimal flex-container">
                ${e.keywords?.map(a=>`<div class="main-skill skill left">${a}</div>`).join("")}
                </div>
            </section>
        `)}
      </section>
      </div>
    `}function U(t=[],e){const a=t.reduce((o,{description:l,name:r,url:m,...n})=>{const s=o[o.length-1];return s&&s.name===r?s.items.push(n):o.push({description:l,name:r,url:m,items:[n]}),o},[]);return t.length>0&&i.html`
      <div id="work">
        <h3>${e.works}</h3>
        <div class="stackSimple">
          ${a.map(({description:o,name:l,url:r,items:m=[]})=>i.html`
              <article>
                <header>
                  <h4>${u(r,l)}</h4>
                  <div class="meta">${o&&i.html`<div>${o}</div>`}</div>
                </header>
                <div class="timeline">
                  ${m.reduce((n,{position:s,startDate:d,endDate:h})=>{let p=!1;for(let c of n)if(s===c.position){h===c.startDate?(c.startDate=d,p=!0):d===c.endDate&&(c.endDate=h,p=!0);break}return p||n.push({position:s,startDate:d,endDate:h}),n},[]).map(({position:n,startDate:s,endDate:d})=>i.html`
                      <div>
                        <span>
                          <div><span class="simplifyWorkPosition"><b>${n}</b></span>${s&&i.html`: ${I(s,d)}`}</div>
                        </span>
                      </div>
                    `)}
                </div>
              </article>
            `)}
        </div>
      </div>
    `}function F(t=[],e){const a=t.reduce((o,{highlights:l})=>{if(l)for(let r of l)r.cat&&(o.has(r.cat)||o.set(r.cat,new Set),o.get(r.cat).add(r.alternative||r.subject));return o},new Map);return t.length>0&&i.html`
      <div id="workSkill">
          <div class="highlights">
          ${Array.from(a).map(o=>i.html`<h3>${o[0]}</h3>
            <ul>
              ${o[1]?Array.from(o[1]).sort().map(l=>i.html`<li>${f(l)}</li>`):"aa"}
            </ul>`)}
          </div>
      </div>
    `}var D;function H(t,{css:e,js:a}={}){return i.html`<!doctype html>
    <html lang="en" style="${W(t.meta)}">
      <head>
        <meta charset="utf-8" />
        ${E(t.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${e&&i.html`<style>
          ${e}
        </style>`}
        ${a&&i.html(D||(D=k([`<script type="module">
          `,`
        <\/script>`])),a)}
      </head>
        <div class="headers">
           ${P(t.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${A(t.education,t.labels.diploma)}
          ${B(t.languages,t.labels.language)}
          ${w(t.skills)} 
          ${w(t.env)} 
          ${R(t.interests,t.labels.interests)}
        </aside>
        <div class="vl"></div>
        <div class="right-column">
                  
          ${F(t.work,t.labels)} 
          ${U(t.work,t.labels)} 
        </div>
        </div>
      </body>
    </html>`}const N={mediaType:"print",printBackground:!0},Y=t=>H(t,{css:M,js:C});exports.pdfRenderOptions=N;exports.render=Y;
