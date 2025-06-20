"use strict";var j=Object.freeze,M=Object.defineProperty;var S=(t,i)=>j(M(t,"raw",{value:j(i||t.slice())}));Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@rbardini/html"),O=require("micromark"),R=require("striptags"),C=require("feather-icons"),A=`const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
    if (!segments.length) return

    const duration = document.createElement('time')
    duration.classList.add('duration')
    duration.textContent = '· '.concat(segments.join(' '))

    this.append(' ', duration)
  }
}

customElements.define('time-duration', TimeDuration)
`,P=':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:200px;margin-left:10px;word-wrap:break-word;height:1000px}.headers{width:auto;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;display:grid;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;grid-template-rows:auto [content] 0;display:flex;margin-left:10px}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:25px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';function U(t={}){const i=t.themeOptions?.colors;return i&&Object.entries(i).map(([o,[n,s=n]])=>`--color-${o}-light:${n}; --color-${o}-dark:${s};`).join(" ")}function u(t,i=!1){const o=O(t);return i?R(o):o}const B=t=>new Date(t).toLocaleDateString("en",{month:"short",year:"numeric",timeZone:"UTC"});function F(t){return e.html`<time datetime="${t}">${B(t)}</time>`}function H(t,i){return i===t?w(i):e.html`<time-duration>${w(t)} – ${i?w(i):"Present"}</time-duration>`}function w(t){return t.length===4?t:F(t)}const N=t=>t.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function b(t,i){return i?t?e.html`<a href="${t}">${i}</a>`:i:t&&e.html`<a href="${t}">${N(t)}</a>`}function Y(t=[],i="Diplome"){return t.length>0&&e.html`
      <div class="container education-container">
        <h3 class="bold">Diploma</h3>
      <section id="education">
        <div>
          ${t.map(({area:o,courses:n=[],institution:s,startDate:h,endDate:f,studyType:d,url:l})=>e.html`
              <article>
                <header>
                  <h5>${b(l,s)}</h5>
                  <div>
                    ${o&&e.html`<strong>${o}</strong>`}
                    ${f}
                  </div>
                </header>
                ${d&&u(d)}
                ${n.length>0&&e.html`
                  <h5>Courses</h5>
                  <ul>
                    ${n.map(m=>e.html`<li>${u(m)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
      </div>
    `}function $(t,i){return(C.icons[t.toLowerCase()]||i&&C.icons[i.toLowerCase()])?.toSvg({width:16,height:16})}const J=t=>Intl.DisplayNames?new Intl.DisplayNames(["en"],{type:"region"}).of(t):t;function Z(t={}){const{email:i,image:o,birth:n,label:s,location:h,name:f,phone:d,profiles:l=[],summary:m,url:g}=t;function v(r){var c=Date.now()-r,p=new Date(c);return Math.abs(p.getUTCFullYear()-1970)}return e.html`
    <header class="masthead">
      ${o&&e.html`<img src="${o}" alt="" />`}
      <div>${f&&e.html`<h1>${f}</h1>`} ${s&&e.html`<h2>${s}</h2>`}</div>
      <div>${n&&e.html`<h6>Age: ${v(new Date(n))}</h6>`}</div>
      ${m&&e.html`<article>${u(m)}</article>`}
      <ul class="icon-list">
        ${h?.city&&e.html`
          <li>
            ${$("map-pin")} ${h.city}${h.countryCode&&e.html`, ${J(h.countryCode)}`}
          </li>
        `}
        ${i&&e.html`
          <li>
            ${$("mail")}
            <a href="mailto:${i}">${i}</a>
          </li>
        `}
        ${d&&e.html`
          <li>
            ${$("phone")}
            <a href="tel:${d.replace(/\s/g,"")}">${d}</a>
          </li>
        `}
        ${g&&e.html`<li>${$("link")} ${b(g)}</li>`}
        ${l.map(({network:r,url:c,username:p})=>e.html`
            <li>
              ${r&&$(r,"user")} ${b(c,p)}
              ${r&&e.html`<span class="network">(${r})</span>`}
            </li>
          `)}
      </ul>
    </header>
  `}function G(t=[],i="Passion"){return t.length>0&&e.html`
        <div class="container interests-container">
          <h3>${i}</h3>
          ${t.map(({keywords:o=[],name:n})=>`
            <section class="item">
                <div class="main-skill skill left">${n}</div>
            </section>
        `).join("")}
    </div>
    `}function K(t=[],i="Langue"){return t.length>0&&e.html`
        <div class="container languages-container">
        <h3 class="bold">${i}</h3>

        <ul class="minimal">
         ${t.map(({fluency:o,language:n})=>e.html` <li>
                    <div class="subWorkInfo"><h6>${n}:  </h6>${o?`<em> ${o}</em>`:""}</div>
                </li>`)}
        </ul>
    </div>
    `}function Q(t={}){const{name:i,summary:o}=t;return e.html`
    ${i&&e.html`<title>${i}</title>`}
    ${o&&e.html`<meta name="description" content="${u(o,!0)}" />`}
  `}function T(t=[]){return t.length>0&&e.html`

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
    `}function V(t=[],i="Emplois",o="Equipe",n="Langage",s="Outils",h="Environnement",f="Méthodes"){const d=t.reduce((l,{description:m,name:g,url:v,...r})=>{const c=l[l.length-1];return c&&c.name===g?c.items.push(r):l.push({description:m,name:g,url:v,items:[r]}),l},[]);return t.length>0&&e.html`
      <section id="work">
        <h3>${i}</h3>
        <div class="stack">
          ${d.map(({description:l,name:m,url:g,items:v=[]})=>e.html`
              <article>
                <header>
                  <h4>${b(g,m)}</h4>
                  <div class="meta">${l&&e.html`<div>${l}</div>`}</div>
                </header>
                <div class="timeline">
                  ${v.map(({highlights:r=[],languages:c=[],tools:p=[],env:y=[],method:k=[],team:a,location:D,position:q,startDate:L,endDate:E,summary:z})=>e.html`
                      <div>
                        <div>
                          <h5>${q}</h5>
                          ${a&&e.html`<div class="workmeta">
                            ${e.html`<div>${o} ${a.description}: ${a.back>0&&e.html`${a.back} back`}${a.front>0&&a.back>0&&e.html`, `}${a.front>0&&e.html`${a.front} front`}${a.front+a.back>0&&a.fullStack>0&&e.html`, `}${a.fullStack>0&&e.html`${a.fullStack} fullStack`}</div>`}
                          </div>`}
                           
                          <div class="workmeta">
                            ${L&&e.html`<div>${H(L,E)}</div>`}
                            ${D&&e.html`<div>${D}</div>`}
                          </div>
                        </div>
                        ${z&&u(z)}
                        <div class="workInfo">
                          <div class="highlights">
                            ${r.length>0&&e.html`
                              <ul>
                                ${r.map(x=>e.html`
                                <li>${u(x.subject)}</li>
                                ${x.detail&&e.html`<ul>${x.detail.map(I=>e.html`<li>${u(I)}</li>`)}</ul>`}
                                `)}
                              </ul>
                            `}
                          </div>
                          ${c.length+p.length+y.length+k.length>0&&e.html`<div class="detail">
                              ${c.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${n}</b>: ${c?.join(", ")}
                              </div>`}
                              ${p.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${s}</b>: ${p?.join(", ")}
                              </div>`}
                              ${y.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${h}</b>: ${y?.join(", ")}
                              </div>`}
                              ${k.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${f}</b>: ${k?.join(", ")}
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
    `}var W;function X(t,{css:i,js:o}={}){return e.html`<!doctype html>
    <html lang="en" style="${U(t.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Q(t.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${i&&e.html`<style>
          ${i}
        </style>`}
        ${o&&e.html(W||(W=S([`<script type="module">
          `,`
        <\/script>`])),o)}
      </head>

        <div class="headers">
           ${Z(t.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
        ${Y(t.education)}
        ${K(t.languages,"Languages")}
        ${T(t.skills)} 
        ${T(t.env)} 
        ${G(t.interests)}
        </aside>
        <div class="right-column">
        ${V(t.work,"Jobs","Team","Language","Tools","Environment","Methods")} 
        </div>
        </div>
      </body>
    </html>`}const _={mediaType:"print",printBackground:!0},tt=t=>X(t,{css:P,js:A});exports.pdfRenderOptions=_;exports.render=tt;
