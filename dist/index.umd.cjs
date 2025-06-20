(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("@rbardini/html"),require("micromark"),require("striptags"),require("feather-icons")):typeof define=="function"&&define.amd?define(["exports","@rbardini/html","micromark","striptags","feather-icons"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.jsonresumeThemeEven={},n.html,n.micromark,n.striptags,n.feather))})(this,function(n,e,q,I,L){"use strict";var C=Object.freeze,te=Object.defineProperty;var E=(n,e)=>C(te(n,"raw",{value:C(e||n.slice())}));var W;const M=`const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
`,O=':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:200px;margin-left:10px;word-wrap:break-word;height:1000px}.headers{width:auto;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;display:grid;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;grid-template-rows:auto [content] 0;display:flex;margin-left:10px}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:25px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';function R(t={}){const i=t.themeOptions?.colors;return i&&Object.entries(i).map(([o,[a,d=a]])=>`--color-${o}-light:${a}; --color-${o}-dark:${d};`).join(" ")}function p(t,i=!1){const o=q(t);return i?I(o):o}const A=t=>new Date(t).toLocaleDateString("en",{month:"short",year:"numeric",timeZone:"UTC"});function P(t){return e.html`<time datetime="${t}">${A(t)}</time>`}function U(t,i){return i===t?k(i):e.html`<time-duration>${k(t)} – ${i?k(i):"Present"}</time-duration>`}function k(t){return t.length===4?t:P(t)}const B=t=>t.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function y(t,i){return i?t?e.html`<a href="${t}">${i}</a>`:i:t&&e.html`<a href="${t}">${B(t)}</a>`}function F(t=[],i="Diplome"){return t.length>0&&e.html`
      <div class="container education-container">
        <h3 class="bold">Diploma</h3>
      <section id="education">
        <div>
          ${t.map(({area:o,courses:a=[],institution:d,startDate:u,endDate:v,studyType:m,url:c})=>e.html`
              <article>
                <header>
                  <h5>${y(c,d)}</h5>
                  <div>
                    ${o&&e.html`<strong>${o}</strong>`}
                    ${v}
                  </div>
                </header>
                ${m&&p(m)}
                ${a.length>0&&e.html`
                  <h5>Courses</h5>
                  <ul>
                    ${a.map(h=>e.html`<li>${p(h)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
      </div>
    `}function $(t,i){return(L.icons[t.toLowerCase()]||i&&L.icons[i.toLowerCase()])?.toSvg({width:16,height:16})}const H=t=>Intl.DisplayNames?new Intl.DisplayNames(["en"],{type:"region"}).of(t):t;function N(t={}){const{email:i,image:o,birth:a,label:d,location:u,name:v,phone:m,profiles:c=[],summary:h,url:f}=t;function b(l){var s=Date.now()-l,g=new Date(s);return Math.abs(g.getUTCFullYear()-1970)}return e.html`
    <header class="masthead">
      ${o&&e.html`<img src="${o}" alt="" />`}
      <div>${v&&e.html`<h1>${v}</h1>`} ${d&&e.html`<h2>${d}</h2>`}</div>
      <div>${a&&e.html`<h6>Age: ${b(new Date(a))}</h6>`}</div>
      ${h&&e.html`<article>${p(h)}</article>`}
      <ul class="icon-list">
        ${u?.city&&e.html`
          <li>
            ${$("map-pin")} ${u.city}${u.countryCode&&e.html`, ${H(u.countryCode)}`}
          </li>
        `}
        ${i&&e.html`
          <li>
            ${$("mail")}
            <a href="mailto:${i}">${i}</a>
          </li>
        `}
        ${m&&e.html`
          <li>
            ${$("phone")}
            <a href="tel:${m.replace(/\s/g,"")}">${m}</a>
          </li>
        `}
        ${f&&e.html`<li>${$("link")} ${y(f)}</li>`}
        ${c.map(({network:l,url:s,username:g})=>e.html`
            <li>
              ${l&&$(l,"user")} ${y(s,g)}
              ${l&&e.html`<span class="network">(${l})</span>`}
            </li>
          `)}
      </ul>
    </header>
  `}function Y(t=[],i="Passion"){return t.length>0&&e.html`
        <div class="container interests-container">
          <h3>${i}</h3>
          ${t.map(({keywords:o=[],name:a})=>`
            <section class="item">
                <div class="main-skill skill left">${a}</div>
            </section>
        `).join("")}
    </div>
    `}function J(t=[],i="Langue"){return t.length>0&&e.html`
        <div class="container languages-container">
        <h3 class="bold">${i}</h3>

        <ul class="minimal">
         ${t.map(({fluency:o,language:a})=>e.html` <li>
                    <div class="subWorkInfo"><h6>${a}:  </h6>${o?`<em> ${o}</em>`:""}</div>
                </li>`)}
        </ul>
    </div>
    `}function Z(t={}){const{name:i,summary:o}=t;return e.html`
    ${i&&e.html`<title>${i}</title>`}
    ${o&&e.html`<meta name="description" content="${p(o,!0)}" />`}
  `}function j(t=[]){return t.length>0&&e.html`

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
    `}function G(t=[],i="Emplois",o="Equipe",a="Langage",d="Outils",u="Environnement",v="Méthodes"){const m=t.reduce((c,{description:h,name:f,url:b,...l})=>{const s=c[c.length-1];return s&&s.name===f?s.items.push(l):c.push({description:h,name:f,url:b,items:[l]}),c},[]);return t.length>0&&e.html`
      <section id="work">
        <h3>${i}</h3>
        <div class="stack">
          ${m.map(({description:c,name:h,url:f,items:b=[]})=>e.html`
              <article>
                <header>
                  <h4>${y(f,h)}</h4>
                  <div class="meta">${c&&e.html`<div>${c}</div>`}</div>
                </header>
                <div class="timeline">
                  ${b.map(({highlights:l=[],languages:s=[],tools:g=[],env:x=[],method:w=[],team:r,location:z,position:X,startDate:T,endDate:_,summary:S})=>e.html`
                      <div>
                        <div>
                          <h5>${X}</h5>
                          ${r&&e.html`<div class="workmeta">
                            ${e.html`<div>${o} ${r.description}: ${r.back>0&&e.html`${r.back} back`}${r.front>0&&r.back>0&&e.html`, `}${r.front>0&&e.html`${r.front} front`}${r.front+r.back>0&&r.fullStack>0&&e.html`, `}${r.fullStack>0&&e.html`${r.fullStack} fullStack`}</div>`}
                          </div>`}
                           
                          <div class="workmeta">
                            ${T&&e.html`<div>${U(T,_)}</div>`}
                            ${z&&e.html`<div>${z}</div>`}
                          </div>
                        </div>
                        ${S&&p(S)}
                        <div class="workInfo">
                          <div class="highlights">
                            ${l.length>0&&e.html`
                              <ul>
                                ${l.map(D=>e.html`
                                <li>${p(D.subject)}</li>
                                ${D.detail&&e.html`<ul>${D.detail.map(ee=>e.html`<li>${p(ee)}</li>`)}</ul>`}
                                `)}
                              </ul>
                            `}
                          </div>
                          ${s.length+g.length+x.length+w.length>0&&e.html`<div class="detail">
                              ${s.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${a}</b>: ${s?.join(", ")}
                              </div>`}
                              ${g.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${d}</b>: ${g?.join(", ")}
                              </div>`}
                              ${x.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${u}</b>: ${x?.join(", ")}
                              </div>`}
                              ${w.length>0&&e.html`<div class="keyWord minimal flex-container">
                                <b>${v}</b>: ${w?.join(", ")}
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
    `}function K(t,{css:i,js:o}={}){return e.html`<!doctype html>
    <html lang="en" style="${R(t.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Z(t.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${i&&e.html`<style>
          ${i}
        </style>`}
        ${o&&e.html(W||(W=E([`<script type="module">
          `,`
        <\/script>`])),o)}
      </head>

        <div class="headers">
           ${N(t.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
        ${F(t.education)}
        ${J(t.languages,"Languages")}
        ${j(t.skills)} 
        ${j(t.env)} 
        ${Y(t.interests)}
        </aside>
        <div class="right-column">
        ${G(t.work,"Jobs","Team","Language","Tools","Environment","Methods")} 
        </div>
        </div>
      </body>
    </html>`}const Q={mediaType:"print",printBackground:!0},V=t=>K(t,{css:O,js:M});n.pdfRenderOptions=Q,n.render=V,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
