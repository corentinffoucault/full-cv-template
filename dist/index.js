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
`, W = ':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:214px;margin-left:10px;word-wrap:break-word}.vl{border-right:1px dashed gray}.headers{width:auto;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;display:flex;margin-left:20px;flex-direction:column}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}#workSkill{padding-bottom:2em}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5,.simplifyWorkPosition{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:grid;gap:inherit;grid-template-areas:"menu content";grid-template-columns:1fr 3fr;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>div.menu{grid-area:menu;margin-left:10px}.masthead>div.content{text-align:center;grid-area:content}.masthead>div.content>h1{line-height:100px}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:5px}.stackSimple{display:grid;gap:1em;padding-top:10px;padding-bottom:20px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';
function I(e = {}) {
  const t = e.themeOptions?.colors;
  return t && Object.entries(t).map(([a, [i, n = i]]) => `--color-${a}-light:${i}; --color-${a}-dark:${n};`).join(" ");
}
function f(e, t = !1) {
  const a = (
    /** @type {string} */
    L(e)
  );
  return t ? S(a) : a;
}
const M = (e) => new Date(e).toLocaleDateString("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC"
});
function j(e) {
  return o`<time datetime="${e}">${M(e)}</time>`;
}
function T(e, t) {
  return t === e ? y(t) : o`<time-duration>${y(e)} – ${t ? y(t) : "Present"}</time-duration>`;
}
function y(e) {
  return e.length === 4 ? e : j(e);
}
const A = (e) => e.replace(/^(https?:|)\/\//, "").replace(/\/$/, "");
function u(e, t) {
  return t ? e ? o`<a href="${e}">${t}</a>` : t : e && o`<a href="${e}">${A(e)}</a>`;
}
function q(e = [], t) {
  return e.length > 0 && o`
      <div class="container education-container">
        <h3 class="bold">${t}</h3>
      <section id="education">
        <div>
          ${e.map(
    ({ area: a, courses: i = [], institution: n, startDate: r, endDate: m, studyType: l, url: s }) => o`
              <article>
                <header>
                  <h5>${u(s, n)}</h5>
                  <div>
                    ${a && o`<strong>${a}</strong>`}
                    ${m}
                  </div>
                </header>
                ${l && f(l)}
                ${i.length > 0 && o`
                  <h5>Courses</h5>
                  <ul>
                    ${i.map((d) => o`<li>${f(d)}</li>`)}
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
const B = (e) => Intl.DisplayNames ? new Intl.DisplayNames(["en"], { type: "region" }).of(e) : e;
function E(e = {}) {
  const { email: t, image: a, birth: i, label: n, location: r, name: m, phone: l, profiles: s = [], summary: d, url: h } = e;
  function p(c) {
    var v = Date.now() - c, $ = new Date(v);
    return Math.abs($.getUTCFullYear() - 1970);
  }
  return o`
    <header class="masthead">

      <div class="menu">
        <div>${m && o`<h6>${m}</h6>`}</div>
        <div>${i && o`Age: ${p(new Date(i))}`}</div>
        ${d && o`<article>${f(d)}</article>`}
        <ul class="icon-list">
          ${r?.city && o`
            <li style="font-size: 10px;">
              ${g("map-pin")} ${r.city}${r.countryCode && o`, ${B(r.countryCode)}`}
            </li>
          `}
          ${t && o`
            <li>
              ${g("mail")}
              <a href="mailto:${t}">${t}</a>
            </li>
          `}
          ${l && o`
            <li>
              ${g("phone")}
              <a href="tel:${l.replace(/\s/g, "")}">${l}</a>
            </li>
          `}
          ${h && o`<li>${g("link")} ${u(h)}</li>`}
          ${s.map(
    ({ network: c, url: v, username: $ }) => o`
              <li>
                ${c && g(c, "user")} ${u(v, $)}
                ${c && o`<span class="network">(${c})</span>`}
              </li>
            `
  )}
        </ul>
      </div>

      <div class="content">
        ${n && o`<h1>${n}</h1>`}
      </div>
    </header>
  `;
}
function O(e = [], t = "") {
  return e.length > 0 && o`
        <div class="container interests-container">
          <h3 class="bold">${t}</h3>
          ${e.map(
    ({ keywords: a = [], name: i }) => `
            <section class="item">
                <div class="main-skill skill left">${i}</div>
            </section>
        `
  ).join("")}
    </div>
    `;
}
function P(e = [], t) {
  return e.length > 0 && o`
        <div class="container languages-container">
        <h3 class="bold">${t}</h3>

        <ul class="minimal">
         ${e.map(
    ({ fluency: a, language: i }) => o` <li>
                    <div class="subWorkInfo"><h6>${i}:  </h6>${a ? `<em> ${a}</em>` : ""}</div>
                </li>`
  )}
        </ul>
    </div>
    `;
}
function R(e = {}) {
  const { name: t, summary: a } = e;
  return o`
    ${t && o`<title>${t}</title>`}
    ${a && o`<meta name="description" content="${f(a, !0)}" />`}
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
      (a) => `<div class="main-skill skill left">${a}</div>`
    ).join("")}
                </div>
            </section>
        `
  )}
      </section>
      </div>
    `;
}
function U(e = [], t) {
  const a = e.reduce(
    (i, { description: n, name: r, url: m, ...l }) => {
      const s = i[i.length - 1];
      return s && s.name === r ? s.items.push(l) : i.push({ description: n, name: r, url: m, items: [l] }), i;
    },
    /** @type {NestedWork[]} */
    []
  );
  return e.length > 0 && o`
      <div id="work">
        <h3>${t.works}</h3>
        <div class="stackSimple">
          ${a.map(
    ({ description: i, name: n, url: r, items: m = [] }) => o`
              <article>
                <header>
                  <h4>${u(r, n)}</h4>
                  <div class="meta">${i && o`<div>${i}</div>`}</div>
                </header>
                <div class="timeline">
                  ${m.reduce(
      (l, { position: s, startDate: d, endDate: h }) => {
        let p = !1;
        for (let c of l)
          if (s === c.position) {
            h === c.startDate ? (c.startDate = d, p = !0) : d === c.endDate && (c.endDate = h, p = !0);
            break;
          }
        return p || l.push({ position: s, startDate: d, endDate: h }), l;
      },
      []
    ).map(
      ({ position: l, startDate: s, endDate: d }) => o`
                      <div>
                        <span>
                          <div><span class="simplifyWorkPosition"><b>${l}</b></span>${s && o`: ${T(s, d)}`}</div>
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
  const a = e.reduce((i, { highlights: n }) => {
    if (n)
      for (let r of n)
        r.cat && (i.has(r.cat) || i.set(r.cat, /* @__PURE__ */ new Set()), i.get(r.cat).add(r.alternative || r.subject));
    return i;
  }, /* @__PURE__ */ new Map());
  return e.length > 0 && o`
      <div id="workSkill">
          <div class="highlights">
          ${Array.from(a).map(
    (i) => o`<h3>${i[0]}</h3>
            <ul>
              ${i[1] ? Array.from(i[1]).sort().map((n) => o`<li>${f(n)}</li>`) : "aa"}
            </ul>`
  )}
          </div>
      </div>
    `;
}
var D;
function H(e, { css: t, js: a } = {}) {
  return o`<!doctype html>
    <html lang="en" style="${I(e.meta)}">
      <head>
        <meta charset="utf-8" />
        ${R(e.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${t && o`<style>
          ${t}
        </style>`}
        ${a && o(D || (D = k([`<script type="module">
          `, `
        <\/script>`])), a)}
      </head>
        <div class="headers">
           ${E(e.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
          ${q(e.education, e.labels.diploma)}
          ${P(e.languages, e.labels.language)}
          ${w(e.skills)} 
          ${w(e.env)} 
          ${O(e.interests, e.labels.interests)}
        </aside>
        <div class="vl"></div>
        <div class="right-column">
                  
          ${F(e.work, e.labels)} 
          ${U(e.work, e.labels)} 
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
