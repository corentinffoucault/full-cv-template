"use strict";var w=Object.freeze,C=Object.defineProperty;var D=(t,i)=>w(C(t,"raw",{value:w(i||t.slice())}));Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@rbardini/html"),I=require("micromark"),q=require("striptags"),z=require("feather-icons"),T=`const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
`,M=':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:205px;margin-left:10px;word-wrap:break-word}.vl{border-right:1px dashed gray}.headers{width:auto;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;display:grid;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;display:flex;margin-left:20px;flex-direction:column}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}#workSkill{padding-bottom:2em}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5,.simplifyWorkPosition{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:5px}.stackSimple{display:grid;gap:1em;padding-top:10px;padding-bottom:20px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';function O(t={}){const i=t.themeOptions?.colors;return i&&Object.entries(i).map(([o,[a,c=a]])=>`--color-${o}-light:${a}; --color-${o}-dark:${c};`).join(" ")}function h(t,i=!1){const o=I(t);return i?q(o):o}const R=t=>new Date(t).toLocaleDateString("en",{month:"short",year:"numeric",timeZone:"UTC"});function A(t){return e.html`<time datetime="${t}">${R(t)}</time>`}function E(t,i){return i===t?y(i):e.html`<time-duration>${y(t)} – ${i?y(i):"Present"}</time-duration>`}function y(t){return t.length===4?t:A(t)}const P=t=>t.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function $(t,i){return i?t?e.html`<a href="${t}">${i}</a>`:i:t&&e.html`<a href="${t}">${P(t)}</a>`}function U(t=[],i){return t.length>0&&e.html`
      <div class="container education-container">
        <h3 class="bold">${i}</h3>
      <section id="education">
        <div>
          ${t.map(({area:o,courses:a=[],institution:c,startDate:d,endDate:s,studyType:r,url:n})=>e.html`
              <article>
                <header>
                  <h5>${$(n,c)}</h5>
                  <div>
                    ${o&&e.html`<strong>${o}</strong>`}
                    ${s}
                  </div>
                </header>
                ${r&&h(r)}
                ${a.length>0&&e.html`
                  <h5>Courses</h5>
                  <ul>
                    ${a.map(m=>e.html`<li>${h(m)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
      </div>
    `}function v(t,i){return(z.icons[t.toLowerCase()]||i&&z.icons[i.toLowerCase()])?.toSvg({width:16,height:16})}const B=t=>Intl.DisplayNames?new Intl.DisplayNames(["en"],{type:"region"}).of(t):t;function F(t={}){const{email:i,image:o,birth:a,label:c,location:d,name:s,phone:r,profiles:n=[],summary:m,url:p}=t;function f(l){var g=Date.now()-l,u=new Date(g);return Math.abs(u.getUTCFullYear()-1970)}return e.html`
    <header class="masthead">
      ${o&&e.html`<img src="${o}" alt="" />`}
      <div>${s&&e.html`<h1>${s}</h1>`} ${c&&e.html`<h2>${c}</h2>`}</div>
      <div>${a&&e.html`<h6>Age: ${f(new Date(a))}</h6>`}</div>
      ${m&&e.html`<article>${h(m)}</article>`}
      <ul class="icon-list">
        ${d?.city&&e.html`
          <li>
            ${v("map-pin")} ${d.city}${d.countryCode&&e.html`, ${B(d.countryCode)}`}
          </li>
        `}
        ${i&&e.html`
          <li>
            ${v("mail")}
            <a href="mailto:${i}">${i}</a>
          </li>
        `}
        ${r&&e.html`
          <li>
            ${v("phone")}
            <a href="tel:${r.replace(/\s/g,"")}">${r}</a>
          </li>
        `}
        ${p&&e.html`<li>${v("link")} ${$(p)}</li>`}
        ${n.map(({network:l,url:g,username:u})=>e.html`
            <li>
              ${l&&v(l,"user")} ${$(g,u)}
              ${l&&e.html`<span class="network">(${l})</span>`}
            </li>
          `)}
      </ul>
    </header>
  `}function H(t=[],i=""){return t.length>0&&e.html`
        <div class="container interests-container">
          <h3>${i}</h3>
          ${t.map(({keywords:o=[],name:a})=>`
            <section class="item">
                <div class="main-skill skill left">${a}</div>
            </section>
        `).join("")}
    </div>
    `}function N(t=[],i){return t.length>0&&e.html`
        <div class="container languages-container">
        <h3 class="bold">${i}</h3>

        <ul class="minimal">
         ${t.map(({fluency:o,language:a})=>e.html` <li>
                    <div class="subWorkInfo"><h6>${a}:  </h6>${o?`<em> ${o}</em>`:""}</div>
                </li>`)}
        </ul>
    </div>
    `}function Y(t={}){const{name:i,summary:o}=t;return e.html`
    ${i&&e.html`<title>${i}</title>`}
    ${o&&e.html`<meta name="description" content="${h(o,!0)}" />`}
  `}function S(t=[]){return t.length>0&&e.html`

      <div class="container skill-container">
      <section id="skills">
      ${t.map(i=>`
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
    `}function Z(t=[],i){const o=t.reduce((a,{description:c,name:d,url:s,...r})=>{const n=a[a.length-1];return n&&n.name===d?n.items.push(r):a.push({description:c,name:d,url:s,items:[r]}),a},[]);return t.length>0&&e.html`
      <section id="work">
        <h3>${i.works}</h3>
        <div class="stack">
          ${o.map(({description:a,name:c,url:d,items:s=[]})=>e.html`
              <article>
                <header>
                  <h4>${$(d,c)}</h4>
                  <div class="meta">${a&&e.html`<div>${a}</div>`}</div>
                </header>
                <div class="timeline">
                  ${s.map(({highlights:r=[],planguages:n=[],tools:m=[],env:p=[],method:f=[],team:l,location:g,position:u,startDate:k,endDate:L,summary:x})=>e.html`
                      <div>
                        <div>
                          <h5>${u}</h5>
                          ${l&&e.html`<div class="workmeta">
                            ${e.html`<div>${i.team} ${l.description}: ${l.back>0&&e.html`${l.back} back`}${l.front>0&&l.back>0&&e.html`, `}${l.front>0&&e.html`${l.front} front`}${l.front+l.back>0&&l.fullStack>0&&e.html`, `}${l.fullStack>0&&e.html`${l.fullStack} fullStack`}</div>`}
                          </div>`}
                           
                          <div class="workmeta">
                            ${k&&e.html`<div>${E(k,L)}</div>`}
                            ${g&&e.html`<div>${g}</div>`}
                          </div>
                        </div>
                        ${x&&h(x)}
                        <div class="workInfo">
                          <div class="highlights">
                            ${r.length>0&&e.html`
                              <ul>
                                ${r.map(b=>e.html`
                                <li>${h(b.subject)}</li>
                                ${b.detail&&e.html`<ul>${b.detail.map(W=>e.html`<li>${h(W)}</li>`)}</ul>`}
                                `)}
                              </ul>
                            `}
                          </div>
                          ${n.length+m.length+p.length+f.length>0&&e.html`<div class="detail">
                              ${n.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${i.planguages}</b>: ${n?.join(", ")}
                              </div>`}
                              ${m.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${i.tools}</b>: ${m?.join(", ")}
                              </div>`}
                              ${p.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${i.environment}</b>: ${p?.join(", ")}
                              </div>`}
                              ${f.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${i.methods}</b>: ${f?.join(", ")}
                              </div>`}
                          
                          </div>`}
                        </div>
                      </div>
                    `)}
                </div>
              </article>
            `)}
        </div>
      </section>
    `}var j;function G(t,{css:i,js:o}={}){return e.html`<!doctype html>
    <html lang="en" style="${O(t.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Y(t.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${i&&e.html`<style>
          ${i}
        </style>`}
        ${o&&e.html(j||(j=D([`<script type="module">
          `,`
        <\/script>`])),o)}
      </head>
        <div class="headers">
           ${F(t.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${U(t.education,t.labels.diploma)}
          ${N(t.languages,t.labels.language)}
          ${S(t.skills)} 
          ${S(t.env)} 
          ${H(t.interests,t.labels.interests)}
        </aside>
        <div class="right-column">
          ${Z(t.work,t.labels)} 
        </div>
        </div>
      </body>
    </html>`}const J={mediaType:"print",printBackground:!0},K=t=>G(t,{css:M,js:T});exports.pdfRenderOptions=J;exports.render=K;
