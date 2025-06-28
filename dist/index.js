var b = Object.freeze, z = Object.defineProperty;
var k = (e, t) => b(z(e, "raw", { value: b(t || e.slice()) }));
import { html as o } from "@rbardini/html";
import L from "micromark";
import S from "striptags";
import x from "feather-icons";
const C = `const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
`, W = ':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:200px;margin-left:10px;word-wrap:break-word}.headers{width:auto;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;display:grid;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;display:flex;margin-left:10px;flex-direction:column}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}#workSkill{padding-bottom:2em}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5,.simplifyWorkPosition{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:25px}.stackSimple{display:grid;gap:1em;padding-top:10px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';
function I(e = {}) {
  const t = e.themeOptions?.colors;
  return t && Object.entries(t).map(([i, [a, n = a]]) => `--color-${i}-light:${a}; --color-${i}-dark:${n};`).join(" ");
}
function f(e, t = !1) {
  const i = (
    /** @type {string} */
    L(e)
  );
  return t ? S(i) : i;
}
const j = (e) => new Date(e).toLocaleDateString("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC"
});
function M(e) {
  return o`<time datetime="${e}">${j(e)}</time>`;
}
function T(e, t) {
  return t === e ? y(t) : o`<time-duration>${y(e)} – ${t ? y(t) : "Present"}</time-duration>`;
}
function y(e) {
  return e.length === 4 ? e : M(e);
}
const A = (e) => e.replace(/^(https?:|)\/\//, "").replace(/\/$/, "");
function u(e, t) {
  return t ? e ? o`<a href="${e}">${t}</a>` : t : e && o`<a href="${e}">${A(e)}</a>`;
}
function P(e = [], t = "Diplome") {
  return e.length > 0 && o`
      <div class="container education-container">
        <h3 class="bold">Diploma</h3>
      <section id="education">
        <div>
          ${e.map(
    ({ area: i, courses: a = [], institution: n, startDate: c, endDate: m, studyType: r, url: l }) => o`
              <article>
                <header>
                  <h5>${u(l, n)}</h5>
                  <div>
                    ${i && o`<strong>${i}</strong>`}
                    ${m}
                  </div>
                </header>
                ${r && f(r)}
                ${a.length > 0 && o`
                  <h5>Courses</h5>
                  <ul>
                    ${a.map((d) => o`<li>${f(d)}</li>`)}
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
function g(e, t) {
  return (x.icons[
    /** @type {FeatherIconNames} */
    e.toLowerCase()
  ] || t && x.icons[
    /** @type {FeatherIconNames} */
    t.toLowerCase()
  ])?.toSvg({ width: 16, height: 16 });
}
const q = (e) => Intl.DisplayNames ? new Intl.DisplayNames(["en"], { type: "region" }).of(e) : e;
function E(e = {}) {
  const { email: t, image: i, birth: a, label: n, location: c, name: m, phone: r, profiles: l = [], summary: d, url: h } = e;
  function p(s) {
    var v = Date.now() - s, $ = new Date(v);
    return Math.abs($.getUTCFullYear() - 1970);
  }
  return o`
    <header class="masthead">
      ${i && o`<img src="${i}" alt="" />`}
      <div>${m && o`<h1>${m}</h1>`} ${n && o`<h2>${n}</h2>`}</div>
      <div>${a && o`<h6>Age: ${p(new Date(a))}</h6>`}</div>
      ${d && o`<article>${f(d)}</article>`}
      <ul class="icon-list">
        ${c?.city && o`
          <li>
            ${g("map-pin")} ${c.city}${c.countryCode && o`, ${q(c.countryCode)}`}
          </li>
        `}
        ${t && o`
          <li>
            ${g("mail")}
            <a href="mailto:${t}">${t}</a>
          </li>
        `}
        ${r && o`
          <li>
            ${g("phone")}
            <a href="tel:${r.replace(/\s/g, "")}">${r}</a>
          </li>
        `}
        ${h && o`<li>${g("link")} ${u(h)}</li>`}
        ${l.map(
    ({ network: s, url: v, username: $ }) => o`
            <li>
              ${s && g(s, "user")} ${u(v, $)}
              ${s && o`<span class="network">(${s})</span>`}
            </li>
          `
  )}
      </ul>
    </header>
  `;
}
function O(e = [], t = "Passion") {
  return e.length > 0 && o`
        <div class="container interests-container">
          <h3>${t}</h3>
          ${e.map(
    ({ keywords: i = [], name: a }) => `
            <section class="item">
                <div class="main-skill skill left">${a}</div>
            </section>
        `
  ).join("")}
    </div>
    `;
}
function R(e = [], t = "Langue") {
  return e.length > 0 && o`
        <div class="container languages-container">
        <h3 class="bold">${t}</h3>

        <ul class="minimal">
         ${e.map(
    ({ fluency: i, language: a }) => o` <li>
                    <div class="subWorkInfo"><h6>${a}:  </h6>${i ? `<em> ${i}</em>` : ""}</div>
                </li>`
  )}
        </ul>
    </div>
    `;
}
function U(e = {}) {
  const { name: t, summary: i } = e;
  return o`
    ${t && o`<title>${t}</title>`}
    ${i && o`<meta name="description" content="${f(i, !0)}" />`}
  `;
}
function w(e = []) {
  return e.length > 0 && o`

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
      (i) => `<div class="main-skill skill left">${i}</div>`
    ).join("")}
                </div>
            </section>
        `
  )}
      </section>
      </div>
    `;
}
function B(e = [], t) {
  const i = e.reduce(
    (a, { description: n, name: c, url: m, ...r }) => {
      const l = a[a.length - 1];
      return l && l.name === c ? l.items.push(r) : a.push({ description: n, name: c, url: m, items: [r] }), a;
    },
    /** @type {NestedWork[]} */
    []
  );
  return e.length > 0 && o`
      <div id="work">
        <h3>${t.works}</h3>
        <div class="stackSimple">
          ${i.map(
    ({ description: a, name: n, url: c, items: m = [] }) => o`
              <article>
                <header>
                  <h4>${u(c, n)}</h4>
                  <div class="meta">${a && o`<div>${a}</div>`}</div>
                </header>
                <div class="timeline">
                  ${m.reduce(
      (r, { position: l, startDate: d, endDate: h }) => {
        let p = !1;
        for (let s of r)
          if (l === s.position) {
            h === s.startDate ? (s.startDate = d, p = !0) : d === s.endDate && (s.endDate = h, p = !0);
            break;
          }
        return p || r.push({ position: l, startDate: d, endDate: h }), r;
      },
      []
    ).map(
      ({ position: r, startDate: l, endDate: d }) => o`
                      <div>
                        <span>
                          <div><span class="simplifyWorkPosition"><b>${r}</b></span>${l && o`: ${T(l, d)}`}</div>
                        </span>
                      </div>
                    `
    )}
                </div>
              </article>
            `
  )}
        </div>
      </div>
    `;
}
function F(e = [], t) {
  const i = e.reduce((a, { highlights: n }) => {
    if (n)
      for (let c of n)
        a.add(c.subject);
    return a;
  }, /* @__PURE__ */ new Set());
  return e.length > 0 && o`
      <div id="workSkill">
        <h3>${t.worksSkill}</h3>
          <div class="highlights">
            <ul>
              ${Array.from(i).map((a) => o`<li>${f(a)}</li>`)}
            </ul>
          </div>
      </div>
    `;
}
var D;
function H(e, { css: t, js: i } = {}) {
  return o`<!doctype html>
    <html lang="en" style="${I(e.meta)}">
      <head>
        <meta charset="utf-8" />
        ${U(e.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${t && o`<style>
          ${t}
        </style>`}
        ${i && o(D || (D = k([`<script type="module">
          `, `
        <\/script>`])), i)}
      </head>
        <div class="headers">
           ${E(e.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${P(e.education)}
          ${R(e.languages, e.labels.languages)}
          ${w(e.skills)} 
          ${w(e.env)} 
          ${O(e.interests)}
        </aside>
        <div class="right-column">
          
          ${F(e.work, e.labels)} 
          ${B(e.work, e.labels)} 
        </div>
        </div>
      </body>
    </html>`;
}
const K = {
  mediaType: "print",
  printBackground: !0
}, Q = (e) => H(e, { css: W, js: C });
export {
  K as pdfRenderOptions,
  Q as render
};
