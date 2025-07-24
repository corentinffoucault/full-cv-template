var w = Object.freeze, C = Object.defineProperty;
var D = (e, t) => w(C(e, "raw", { value: w(t || e.slice()) }));
import { html as i } from "@rbardini/html";
import I from "micromark";
import T from "striptags";
import z from "feather-icons";
const M = `const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
`, q = ':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:205px;margin-left:10px;word-wrap:break-word}.vl{border-right:1px dashed gray}.headers{width:auto;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;display:grid;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;display:flex;margin-left:20px;flex-direction:column}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}#workSkill{padding-bottom:2em}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5,.simplifyWorkPosition{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:5px}.stackSimple{display:grid;gap:1em;padding-top:10px;padding-bottom:20px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';
function A(e = {}) {
  const t = e.themeOptions?.colors;
  return t && Object.entries(t).map(([o, [a, c = a]]) => `--color-${o}-light:${a}; --color-${o}-dark:${c};`).join(" ");
}
function h(e, t = !1) {
  const o = (
    /** @type {string} */
    I(e)
  );
  return t ? T(o) : o;
}
const E = (e) => new Date(e).toLocaleDateString("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC"
});
function O(e) {
  return i`<time datetime="${e}">${E(e)}</time>`;
}
function R(e, t) {
  return t === e ? y(t) : i`<time-duration>${y(e)} – ${t ? y(t) : "Present"}</time-duration>`;
}
function y(e) {
  return e.length === 4 ? e : O(e);
}
const U = (e) => e.replace(/^(https?:|)\/\//, "").replace(/\/$/, "");
function u(e, t) {
  return t ? e ? i`<a href="${e}">${t}</a>` : t : e && i`<a href="${e}">${U(e)}</a>`;
}
function B(e = [], t) {
  return e.length > 0 && i`
      <div class="container education-container">
        <h3 class="bold">${t}</h3>
      <section id="education">
        <div>
          ${e.map(
    ({ area: o, courses: a = [], institution: c, startDate: d, endDate: s, studyType: n, url: l }) => i`
              <article>
                <header>
                  <h5>${u(l, c)}</h5>
                  <div>
                    ${o && i`<strong>${o}</strong>`}
                    ${s}
                  </div>
                </header>
                ${n && h(n)}
                ${a.length > 0 && i`
                  <h5>Courses</h5>
                  <ul>
                    ${a.map((m) => i`<li>${h(m)}</li>`)}
                  </ul>
                `}
              </article>
            `
  )}
        </div>
      </section>
      </div>
    `;
}
function $(e, t) {
  return (z.icons[
    /** @type {FeatherIconNames} */
    e.toLowerCase()
  ] || t && z.icons[
    /** @type {FeatherIconNames} */
    t.toLowerCase()
  ])?.toSvg({ width: 16, height: 16 });
}
const F = (e) => Intl.DisplayNames ? new Intl.DisplayNames(["en"], { type: "region" }).of(e) : e;
function H(e = {}) {
  const { email: t, image: o, birth: a, label: c, location: d, name: s, phone: n, profiles: l = [], summary: m, url: p } = e;
  function f(r) {
    var g = Date.now() - r, v = new Date(g);
    return Math.abs(v.getUTCFullYear() - 1970);
  }
  return i`
    <header class="masthead">
      ${o && i`<img src="${o}" alt="" />`}
      <div>${s && i`<h1>${s}</h1>`} ${c && i`<h2>${c}</h2>`}</div>
      <div>${a && i`<h6>Age: ${f(new Date(a))}</h6>`}</div>
      ${m && i`<article>${h(m)}</article>`}
      <ul class="icon-list">
        ${d?.city && i`
          <li>
            ${$("map-pin")} ${d.city}${d.countryCode && i`, ${F(d.countryCode)}`}
          </li>
        `}
        ${t && i`
          <li>
            ${$("mail")}
            <a href="mailto:${t}">${t}</a>
          </li>
        `}
        ${n && i`
          <li>
            ${$("phone")}
            <a href="tel:${n.replace(/\s/g, "")}">${n}</a>
          </li>
        `}
        ${p && i`<li>${$("link")} ${u(p)}</li>`}
        ${l.map(
    ({ network: r, url: g, username: v }) => i`
            <li>
              ${r && $(r, "user")} ${u(g, v)}
              ${r && i`<span class="network">(${r})</span>`}
            </li>
          `
  )}
      </ul>
    </header>
  `;
}
function N(e = [], t = "") {
  return e.length > 0 && i`
        <div class="container interests-container">
          <h3>${t}</h3>
          ${e.map(
    ({ keywords: o = [], name: a }) => `
            <section class="item">
                <div class="main-skill skill left">${a}</div>
            </section>
        `
  ).join("")}
    </div>
    `;
}
function P(e = [], t) {
  return e.length > 0 && i`
        <div class="container languages-container">
        <h3 class="bold">${t}</h3>

        <ul class="minimal">
         ${e.map(
    ({ fluency: o, language: a }) => i` <li>
                    <div class="subWorkInfo"><h6>${a}:  </h6>${o ? `<em> ${o}</em>` : ""}</div>
                </li>`
  )}
        </ul>
    </div>
    `;
}
function Y(e = {}) {
  const { name: t, summary: o } = e;
  return i`
    ${t && i`<title>${t}</title>`}
    ${o && i`<meta name="description" content="${h(o, !0)}" />`}
  `;
}
function L(e = []) {
  return e.length > 0 && i`

      <div class="container skill-container">
      <section id="skills">
      ${e.map(
    (t) => `
           <section class="container">
           <div class="title">
            <h3 class="bold">${t.name}</h3>
            <div class="keyline"></div>
          </div>
                <div class="minimal flex-container">
                ${t.keywords?.map(
      (o) => `<div class="main-skill skill left">${o}</div>`
    ).join("")}
                </div>
            </section>
        `
  )}
      </section>
      </div>
    `;
}
function Z(e = [], t) {
  const o = e.reduce(
    (a, { description: c, name: d, url: s, ...n }) => {
      const l = a[a.length - 1];
      return l && l.name === d ? l.items.push(n) : a.push({ description: c, name: d, url: s, items: [n] }), a;
    },
    /** @type {NestedWork[]} */
    []
  );
  return e.length > 0 && i`
      <section id="work">
        <h3>${t.works}</h3>
        <div class="stack">
          ${o.map(
    ({ description: a, name: c, url: d, items: s = [] }) => i`
              <article>
                <header>
                  <h4>${u(d, c)}</h4>
                  <div class="meta">${a && i`<div>${a}</div>`}</div>
                </header>
                <div class="timeline">
                  ${s.map(
      ({ highlights: n = [], planguages: l = [], tools: m = [], env: p = [], method: f = [], team: r, location: g, position: v, startDate: k, endDate: S, summary: x }) => i`
                      <div>
                        <div>
                          <h5>${v}</h5>
                          ${r && i`<div class="workmeta">
                            ${i`<div>${t.team} ${r.description}: ${r.back > 0 && i`${r.back} back`}${r.front > 0 && r.back > 0 && i`, `}${r.front > 0 && i`${r.front} front`}${r.front + r.back > 0 && r.fullStack > 0 && i`, `}${r.fullStack > 0 && i`${r.fullStack} fullStack`}</div>`}
                          </div>`}
                           
                          <div class="workmeta">
                            ${k && i`<div>${R(k, S)}</div>`}
                            ${g && i`<div>${g}</div>`}
                          </div>
                        </div>
                        ${x && h(x)}
                        <div class="workInfo">
                          <div class="highlights">
                            ${n.length > 0 && i`
                              <ul>
                                ${n.map((b) => i`
                                <li>${h(b.subject)}</li>
                                ${b.detail && i`<ul>${b.detail.map((W) => i`<li>${h(W)}</li>`)}</ul>`}
                                `)}
                              </ul>
                            `}
                          </div>
                          ${l.length + m.length + p.length + f.length > 0 && i`<div class="detail">
                              ${l.length > 0 && i`<div class="keyWord minimal flex-container">
                                <b>${t.planguages}</b>: ${l?.join(", ")}
                              </div>`}
                              ${m.length > 0 && i`<div class="keyWord minimal flex-container">
                                <b>${t.tools}</b>: ${m?.join(", ")}
                              </div>`}
                              ${p.length > 0 && i`<div class="keyWord minimal flex-container">
                                <b>${t.environment}</b>: ${p?.join(", ")}
                              </div>`}
                              ${f.length > 0 && i`<div class="keyWord minimal flex-container">
                                <b>${t.methods}</b>: ${f?.join(", ")}
                              </div>`}
                          
                          </div>`}
                        </div>
                      </div>
                    `
    )}
                </div>
              </article>
            `
  )}
        </div>
      </section>
    `;
}
var j;
function G(e, { css: t, js: o } = {}) {
  return i`<!doctype html>
    <html lang="en" style="${A(e.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Y(e.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${t && i`<style>
          ${t}
        </style>`}
        ${o && i(j || (j = D([`<script type="module">
          `, `
        <\/script>`])), o)}
      </head>
        <div class="headers">
           ${H(e.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${B(e.education, e.labels.diploma)}
          ${P(e.languages, e.labels.language)}
          ${L(e.skills)} 
          ${L(e.env)} 
          ${N(e.interests, e.labels.interests)}
        </aside>
        <div class="right-column">
          ${Z(e.work, e.labels)} 
        </div>
        </div>
      </body>
    </html>`;
}
const _ = {
  mediaType: "print",
  printBackground: !0
}, ee = (e) => G(e, { css: q, js: M });
export {
  _ as pdfRenderOptions,
  ee as render
};
