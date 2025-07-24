(function(r,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("@rbardini/html"),require("micromark"),require("striptags"),require("feather-icons")):typeof define=="function"&&define.amd?define(["exports","@rbardini/html","micromark","striptags","feather-icons"],i):(r=typeof globalThis<"u"?globalThis:r||self,i(r.jsonresumeThemeEven={},r.html,r.micromark,r.striptags,r.feather))})(this,function(r,i,T,W,x){"use strict";var j=Object.freeze,Q=Object.defineProperty;var S=(r,i)=>j(Q(r,"raw",{value:j(i||r.slice())}));var L;const C=`const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
`,I=':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:205px;margin-left:10px;word-wrap:break-word}.vl{border-right:1px dashed gray}.headers{width:auto;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;display:grid;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;display:flex;margin-left:20px;flex-direction:column}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}#workSkill{padding-bottom:2em}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5,.simplifyWorkPosition{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:5px}.stackSimple{display:grid;gap:1em;padding-top:10px;padding-bottom:20px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';function q(e={}){const t=e.themeOptions?.colors;return t&&Object.entries(t).map(([o,[a,d=a]])=>`--color-${o}-light:${a}; --color-${o}-dark:${d};`).join(" ")}function p(e,t=!1){const o=T(e);return t?W(o):o}const M=e=>new Date(e).toLocaleDateString("en",{month:"short",year:"numeric",timeZone:"UTC"});function O(e){return i.html`<time datetime="${e}">${M(e)}</time>`}function E(e,t){return t===e?b(t):i.html`<time-duration>${b(e)} – ${t?b(t):"Present"}</time-duration>`}function b(e){return e.length===4?e:O(e)}const R=e=>e.replace(/^(https?:|)\/\//,"").replace(/\/$/,"");function y(e,t){return t?e?i.html`<a href="${e}">${t}</a>`:t:e&&i.html`<a href="${e}">${R(e)}</a>`}function A(e=[],t){return e.length>0&&i.html`
      <div class="container education-container">
        <h3 class="bold">${t}</h3>
      <section id="education">
        <div>
          ${e.map(({area:o,courses:a=[],institution:d,startDate:s,endDate:m,studyType:l,url:c})=>i.html`
              <article>
                <header>
                  <h5>${y(c,d)}</h5>
                  <div>
                    ${o&&i.html`<strong>${o}</strong>`}
                    ${m}
                  </div>
                </header>
                ${l&&p(l)}
                ${a.length>0&&i.html`
                  <h5>Courses</h5>
                  <ul>
                    ${a.map(h=>i.html`<li>${p(h)}</li>`)}
                  </ul>
                `}
              </article>
            `)}
        </div>
      </section>
      </div>
    `}function u(e,t){return(x.icons[e.toLowerCase()]||t&&x.icons[t.toLowerCase()])?.toSvg({width:16,height:16})}const P=e=>Intl.DisplayNames?new Intl.DisplayNames(["en"],{type:"region"}).of(e):e;function U(e={}){const{email:t,image:o,birth:a,label:d,location:s,name:m,phone:l,profiles:c=[],summary:h,url:f}=e;function v(n){var g=Date.now()-n,$=new Date(g);return Math.abs($.getUTCFullYear()-1970)}return i.html`
    <header class="masthead">
      ${o&&i.html`<img src="${o}" alt="" />`}
      <div>${m&&i.html`<h1>${m}</h1>`} ${d&&i.html`<h2>${d}</h2>`}</div>
      <div>${a&&i.html`<h6>Age: ${v(new Date(a))}</h6>`}</div>
      ${h&&i.html`<article>${p(h)}</article>`}
      <ul class="icon-list">
        ${s?.city&&i.html`
          <li>
            ${u("map-pin")} ${s.city}${s.countryCode&&i.html`, ${P(s.countryCode)}`}
          </li>
        `}
        ${t&&i.html`
          <li>
            ${u("mail")}
            <a href="mailto:${t}">${t}</a>
          </li>
        `}
        ${l&&i.html`
          <li>
            ${u("phone")}
            <a href="tel:${l.replace(/\s/g,"")}">${l}</a>
          </li>
        `}
        ${f&&i.html`<li>${u("link")} ${y(f)}</li>`}
        ${c.map(({network:n,url:g,username:$})=>i.html`
            <li>
              ${n&&u(n,"user")} ${y(g,$)}
              ${n&&i.html`<span class="network">(${n})</span>`}
            </li>
          `)}
      </ul>
    </header>
  `}function B(e=[],t=""){return e.length>0&&i.html`
        <div class="container interests-container">
          <h3>${t}</h3>
          ${e.map(({keywords:o=[],name:a})=>`
            <section class="item">
                <div class="main-skill skill left">${a}</div>
            </section>
        `).join("")}
    </div>
    `}function F(e=[],t){return e.length>0&&i.html`
        <div class="container languages-container">
        <h3 class="bold">${t}</h3>

        <ul class="minimal">
         ${e.map(({fluency:o,language:a})=>i.html` <li>
                    <div class="subWorkInfo"><h6>${a}:  </h6>${o?`<em> ${o}</em>`:""}</div>
                </li>`)}
        </ul>
    </div>
    `}function H(e={}){const{name:t,summary:o}=e;return i.html`
    ${t&&i.html`<title>${t}</title>`}
    ${o&&i.html`<meta name="description" content="${p(o,!0)}" />`}
  `}function w(e=[]){return e.length>0&&i.html`

      <div class="container skill-container">
      <section id="skills">
      ${e.map(t=>`
           <section class="container">
           <div class="title">
            <h3 class="bold">${t.name}</h3>
            <div class="keyline"></div>
          </div>
                <div class="minimal flex-container">
                ${t.keywords?.map(o=>`<div class="main-skill skill left">${o}</div>`).join("")}
                </div>
            </section>
        `)}
      </section>
      </div>
    `}function N(e=[],t){const o=e.reduce((a,{description:d,name:s,url:m,...l})=>{const c=a[a.length-1];return c&&c.name===s?c.items.push(l):a.push({description:d,name:s,url:m,items:[l]}),a},[]);return e.length>0&&i.html`
      <section id="work">
        <h3>${t.works}</h3>
        <div class="stack">
          ${o.map(({description:a,name:d,url:s,items:m=[]})=>i.html`
              <article>
                <header>
                  <h4>${y(s,d)}</h4>
                  <div class="meta">${a&&i.html`<div>${a}</div>`}</div>
                </header>
                <div class="timeline">
                  ${m.map(({highlights:l=[],planguages:c=[],tools:h=[],env:f=[],method:v=[],team:n,location:g,position:$,startDate:D,endDate:J,summary:z})=>i.html`
                      <div>
                        <div>
                          <h5>${$}</h5>
                          ${n&&i.html`<div class="workmeta">
                            ${i.html`<div>${t.team} ${n.description}: ${n.back>0&&i.html`${n.back} back`}${n.front>0&&n.back>0&&i.html`, `}${n.front>0&&i.html`${n.front} front`}${n.front+n.back>0&&n.fullStack>0&&i.html`, `}${n.fullStack>0&&i.html`${n.fullStack} fullStack`}</div>`}
                          </div>`}
                           
                          <div class="workmeta">
                            ${D&&i.html`<div>${E(D,J)}</div>`}
                            ${g&&i.html`<div>${g}</div>`}
                          </div>
                        </div>
                        ${z&&p(z)}
                        <div class="workInfo">
                          <div class="highlights">
                            ${l.length>0&&i.html`
                              <ul>
                                ${l.map(k=>i.html`
                                <li>${p(k.subject)}</li>
                                ${k.detail&&i.html`<ul>${k.detail.map(K=>i.html`<li>${p(K)}</li>`)}</ul>`}
                                `)}
                              </ul>
                            `}
                          </div>
                          ${c.length+h.length+f.length+v.length>0&&i.html`<div class="detail">
                              ${c.length>0&&i.html`<div class="keyWord minimal flex-container">
                                <b>${t.planguages}</b>: ${c?.join(", ")}
                              </div>`}
                              ${h.length>0&&i.html`<div class="keyWord minimal flex-container">
                                <b>${t.tools}</b>: ${h?.join(", ")}
                              </div>`}
                              ${f.length>0&&i.html`<div class="keyWord minimal flex-container">
                                <b>${t.environment}</b>: ${f?.join(", ")}
                              </div>`}
                              ${v.length>0&&i.html`<div class="keyWord minimal flex-container">
                                <b>${t.methods}</b>: ${v?.join(", ")}
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
    `}function Y(e,{css:t,js:o}={}){return i.html`<!doctype html>
    <html lang="en" style="${q(e.meta)}">
      <head>
        <meta charset="utf-8" />
        ${H(e.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${t&&i.html`<style>
          ${t}
        </style>`}
        ${o&&i.html(L||(L=S([`<script type="module">
          `,`
        <\/script>`])),o)}
      </head>
        <div class="headers">
           ${U(e.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${A(e.education,e.labels.diploma)}
          ${F(e.languages,e.labels.language)}
          ${w(e.skills)} 
          ${w(e.env)} 
          ${B(e.interests,e.labels.interests)}
        </aside>
        <div class="right-column">
          ${N(e.work,e.labels)} 
        </div>
        </div>
      </body>
    </html>`}const Z={mediaType:"print",printBackground:!0},G=e=>Y(e,{css:I,js:C});r.pdfRenderOptions=Z,r.render=G,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
