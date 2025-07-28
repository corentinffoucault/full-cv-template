(function(s,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("@rbardini/html"),require("micromark"),require("striptags"),require("feather-icons")):typeof define=="function"&&define.amd?define(["exports","@rbardini/html","micromark","striptags","feather-icons"],t):(s=typeof globalThis<"u"?globalThis:s||self,t(s.jsonresumeThemeEven={},s.html,s.micromark,s.striptags,s.feather))})(this,function(s,t,S,L,k){"use strict";var w=Object.freeze,Z=Object.defineProperty;var D=(s,t)=>w(Z(s,"raw",{value:w(t||s.slice())}));var z;const T=`const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
`,j=':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:214px;margin-left:10px;word-wrap:break-word}.vl{border-right:1px dashed gray}.headers{width:auto;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;display:flex;margin-left:20px;flex-direction:column}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}#workSkill{padding-bottom:2em}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5,.simplifyWorkPosition{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:grid;gap:inherit;grid-template-areas:"menu content";grid-template-columns:1fr 3fr;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>div.menu{grid-area:menu;margin-left:10px}.masthead>div.content{text-align:center;grid-area:content}.masthead>div.content>h1{line-height:100px}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:5px}.stackSimple{display:grid;gap:1em;padding-top:10px;padding-bottom:20px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';function C(e={}){const i=e.themeOptions?.colors;return i&&Object.entries(i).map(([a,[o,n=o]])=>`--color-${a}-light:${o}; --color-${a}-dark:${n};`).join(" ")}function f(e,i=!1){const a=S(e);return i?L(a):a}const M=e=>new Date(e).toLocaleDateString("en",{month:"short",year:"numeric",timeZone:"UTC"});function W(e){return t.html`<time datetime="${e}">${M(e)}</time>`}function q(e,i){return i===e?$(i):t.html`<time-duration>${$(e)} – ${i?$(i):"Present"}</time-duration>`}function $(e){return e.length===4?e:W(e)}const I=e=>e.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function v(e,i){return i?e?t.html`<a href="${e}">${i}</a>`:i:e&&t.html`<a href="${e}">${I(e)}</a>`}function A(e=[],i){return e.length>0&&t.html`
      <div class="container education-container">
        <h3 class="bold">${i}</h3>
      <section id="education">
        <div>
          ${e.map(({area:a,courses:o=[],institution:n,startDate:r,endDate:h,studyType:l,url:d})=>t.html`
              <article>
                <header>
                  <h5>${v(d,n)}</h5>
                  <div>
                    ${a&&t.html`<strong>${a}</strong>`}
                    ${h}
                  </div>
                </header>
                ${l&&f(l)}
                ${o.length>0&&t.html`
                  <h5>Courses</h5>
                  <ul>
                    ${o.map(m=>t.html`<li>${f(m)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
      </div>
    `}function g(e,i){return(k.icons[e.toLowerCase()]||i&&k.icons[i.toLowerCase()])?.toSvg({width:16,height:16})}const O=e=>Intl.DisplayNames?new Intl.DisplayNames(["en"],{type:"region"}).of(e):e;function E(e={}){const{email:i,image:a,birth:o,label:n,location:r,name:h,phone:l,profiles:d=[],summary:m,url:p}=e;function u(c){var y=Date.now()-c,b=new Date(y);return Math.abs(b.getUTCFullYear()-1970)}return t.html`
    <header class="masthead">

      <div class="menu">
        <div>${h&&t.html`<h6>${h}</h6>`}</div>
        <div>${o&&t.html`Age: ${u(new Date(o))}`}</div>
        ${m&&t.html`<article>${f(m)}</article>`}
        <ul class="icon-list">
          ${r?.city&&t.html`
            <li style="font-size: 10px;">
              ${g("map-pin")} ${r.city}${r.countryCode&&t.html`, ${O(r.countryCode)}`}
            </li>
          `}
          ${i&&t.html`
            <li>
              ${g("mail")}
              <a href="mailto:${i}">${i}</a>
            </li>
          `}
          ${l&&t.html`
            <li>
              ${g("phone")}
              <a href="tel:${l.replace(/\s/g,"")}">${l}</a>
            </li>
          `}
          ${p&&t.html`<li>${g("link")} ${v(p)}</li>`}
          ${d.map(({network:c,url:y,username:b})=>t.html`
              <li>
                ${c&&g(c,"user")} ${v(y,b)}
                ${c&&t.html`<span class="network">(${c})</span>`}
              </li>
            `)}
        </ul>
      </div>

      <div class="content">
        ${n&&t.html`<h1>${n}</h1>`}
      </div>
    </header>
  `}function P(e=[],i=""){return e.length>0&&t.html`
        <div class="container interests-container">
          <h3 class="bold">${i}</h3>
          ${e.map(({keywords:a=[],name:o})=>`
            <section class="item">
                <div class="main-skill skill left">${o}</div>
            </section>
        `).join("")}
    </div>
    `}function R(e=[],i){return e.length>0&&t.html`
        <div class="container languages-container">
        <h3 class="bold">${i}</h3>

        <ul class="minimal">
         ${e.map(({fluency:a,language:o})=>t.html` <li>
                    <div class="subWorkInfo"><h6>${o}:  </h6>${a?`<em> ${a}</em>`:""}</div>
                </li>`)}
        </ul>
    </div>
    `}function B(e={}){const{name:i,summary:a}=e;return t.html`
    ${i&&t.html`<title>${i}</title>`}
    ${a&&t.html`<meta name="description" content="${f(a,!0)}" />`}
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
                ${i.keywords?.map(a=>`<div class="main-skill skill left">${a}</div>`).join("")}
                </div>
            </section>
        `)}
      </section>
      </div>
    `}function U(e=[],i){const a=e.reduce((o,{description:n,name:r,url:h,...l})=>{const d=o[o.length-1];return d&&d.name===r?d.items.push(l):o.push({description:n,name:r,url:h,items:[l]}),o},[]);return e.length>0&&t.html`
      <div id="work">
        <h3>${i.works}</h3>
        <div class="stackSimple">
          ${a.map(({description:o,name:n,url:r,items:h=[]})=>t.html`
              <article>
                <header>
                  <h4>${v(r,n)}</h4>
                  <div class="meta">${o&&t.html`<div>${o}</div>`}</div>
                </header>
                <div class="timeline">
                  ${h.reduce((l,{position:d,startDate:m,endDate:p})=>{let u=!1;for(let c of l)if(d===c.position){p===c.startDate?(c.startDate=m,u=!0):m===c.endDate&&(c.endDate=p,u=!0);break}return u||l.push({position:d,startDate:m,endDate:p}),l},[]).map(({position:l,startDate:d,endDate:m})=>t.html`
                      <div>
                        <span>
                          <div><span class="simplifyWorkPosition"><b>${l}</b></span>${d&&t.html`: ${q(d,m)}`}</div>
                        </span>
                      </div>
                    `)}
                </div>
              </article>
            `)}
        </div>
      </div>
    `}function F(e=[],i){const a=e.reduce((o,{highlights:n})=>{if(n)for(let r of n)r.cat&&(o.has(r.cat)||o.set(r.cat,new Set),o.get(r.cat).add(r.alternative||r.subject));return o},new Map);return e.length>0&&t.html`
      <div id="workSkill">
          <div class="highlights">
          ${Array.from(a).map(o=>t.html`<h3>${o[0]}</h3>
            <ul>
              ${o[1]?Array.from(o[1]).sort().map(n=>t.html`<li>${f(n)}</li>`):"aa"}
            </ul>`)}
          </div>
      </div>
    `}function H(e,{css:i,js:a}={}){return t.html`<!doctype html>
    <html lang="en" style="${C(e.meta)}">
      <head>
        <meta charset="utf-8" />
        ${B(e.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${i&&t.html`<style>
          ${i}
        </style>`}
        ${a&&t.html(z||(z=D([`<script type="module">
          `,`
        <\/script>`])),a)}
      </head>
        <div class="headers">
           ${E(e.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${A(e.education,e.labels.diploma)}
          ${R(e.languages,e.labels.language)}
          ${x(e.skills)} 
          ${x(e.env)} 
          ${P(e.interests,e.labels.interests)}
        </aside>
        <div class="vl"></div>
        <div class="right-column">
                  
          ${F(e.work,e.labels)} 
          ${U(e.work,e.labels)} 
        </div>
        </div>
      </body>
    </html>`}const N={mediaType:"print",printBackground:!0},Y=e=>H(e,{css:j,js:T});s.pdfRenderOptions=N,s.render=Y,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
