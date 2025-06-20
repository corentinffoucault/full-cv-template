var j = Object.freeze, q = Object.defineProperty;
var C = (e, i) => j(q(e, "raw", { value: j(i || e.slice()) }));
import { html as t } from "@rbardini/html";
import O from "micromark";
import A from "striptags";
import W from "feather-icons";
const R = `const pluralize = (num, str) => \`\${num} \${num === 1 ? str : str.concat('s')}\`

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
`, U = ':root{color-scheme:light dark;--color-background-light: #ffffff;--color-dimmed-light: #a0cae4;--color-primary-light: #191e23;--color-secondary-light: #6fb388;--color-secondary-bis-light: #6d797e;--color-accent-light: #0073aa;--color-background-dark: #191e23;--color-dimmed-dark: #23282d;--color-primary-dark: #fbfbfc;--color-secondary-dark: #ccd0d4;--color-secondary-bis-dark: #ccd0d4;--color-accent-dark: #00a0d2;--color-background: var(--color-background-light);--color-dimmed: var(--color-dimmed-light);--color-primary: var(--color-primary-light);--color-secondary: var(--color-secondary-light);--color-secondary-bis: var(--color-secondary-bis-light);--color-accent: var(--color-accent-light);--scale-ratio: 1.2;--scale0: 1rem;--scale1: calc(var(--scale0) * var(--scale-ratio));--scale2: calc(var(--scale1) * var(--scale-ratio));--scale3: calc(var(--scale2) * var(--scale-ratio));--scale4: calc(var(--scale3) * var(--scale-ratio));--scale5: calc(var(--scale4) * var(--scale-ratio))}@media (prefers-color-scheme: dark){:root{--color-background: var(--color-background-dark);--color-dimmed: var(--color-dimmed-dark);--color-primary: var(--color-primary-dark);--color-secondary: var(--color-secondary-dark);--color-secondary-bis: var(--color-secondary-bisdark);--color-accent: var(--color-accent-dark)}}*{box-sizing:border-box;margin:0;padding:0}html{font-size:14px}.highlights li{padding:3px}body{background:var(--color-background);color:var(--color-primary);display:block;font:.87em/1.5 Lato,sans-serif;gap:2em;margin-bottom:4em}.left{background:var(--color-background);color:var(--color-primary);display:block;font:1em/1.5 Lato,sans-serif}body:before{content:"";grid-column:full;grid-row:content}.container{margin-bottom:1em}ol,ul{padding-left:1em;line-height:15px}.left-column{float:left;width:200px;margin-left:10px;word-wrap:break-word;height:1000px}.headers{width:auto;grid-template-columns:[full-start] 1fr [main-start side-start] minmax(min-content,12em) [side-end content-start] minmax(min-content,36em) [main-end content-end] 1fr [full-end];grid-template-rows:auto [content] 0;display:grid;padding-bottom:10px}.right-column{width:auto;margin-bottom:4em;grid-template-rows:auto [content] 0;display:flex;margin-left:10px}.workInfo{display:flex;flex-direction:column}.subWorkInfo{display:flex;flex-direction:row;gap:8px}.detail{display:flex;flex-direction:column;padding-top:7px}.nonList{list-style:none}.highlights{width:500px;margin-right:15px}li::marker,.network{color:var(--color-secondary)}.keyWord{padding-left:15px;padding-top:5px}a{color:var(--color-accent);text-decoration:none}a:focus,a:hover{text-decoration:underline}h1,h2,h3,h5{font-weight:400}.bold{font-weight:700}h1,h2,h3{line-height:1.2}.masthead h1{font-size:var(--scale3)}.masthead h2{color:var(--color-secondary-bis);font-size:var(--scale0)}.h1{font-size:var(--scale5)}h2{color:var(--color-secondary);font-size:var(--scale4)}h3{color:var(--color-secondary);font-size:var(--scale3);grid-column:side;margin-bottom:1rem;margin-right:1em}h4{font-size:var(--scale2)}h5{font-size:var(--scale1)}h6{font-size:var(--scale0)}blockquote{border-left:.2em solid var(--color-dimmed);padding-left:1em}cite{color:var(--color-secondary);font-style:inherit}cite:before{content:"— "}svg{margin-right:.2em;vertical-align:text-bottom}.masthead{background:var(--color-dimmed);display:inherit;gap:inherit;grid-column:full;grid-template-columns:inherit;padding:1em 0;text-align:center;border-bottom-color:red;border-bottom-style:solid;border-bottom-width:1px}.masthead>*,section{grid-column:main}.masthead>img{border:4px solid;border-radius:50%;margin:0 auto;max-width:12em}article>*+*,blockquote>*+*,.timeline>div>*+*{margin-top:.7em}.meta{padding-top:10px}.workmeta{padding-top:5px}.stack{display:grid;gap:1em;padding-top:25px}.icon-list{display:flex;flex-wrap:wrap;justify-content:center;list-style:none;padding:0}.grid-list{display:grid;gap:1em}.tag-list{display:flex;flex-wrap:wrap;gap:.4em;list-style:none;padding:0}.tag-list>li{background:var(--color-dimmed);border-radius:.2em;padding:.2em .6em}.timeline>div{position:relative}.timeline>div:not(:last-child){padding-bottom:1rem}.timeline>div:not(:last-child):before{content:"";position:absolute;top:1rem;left:-15px;width:2px;height:100%;background:var(--color-secondary)}.timeline>div:not(:only-child):after{content:"";position:absolute;top:.6rem;left:-20px;width:8px;height:8px;background:var(--color-secondary);border:2px solid var(--color-background);border-radius:50%}@media print,(min-width: 48em){h3{text-align:left;margin-bottom:inherit}.masthead{text-align:inherit}.masthead>*,section{grid-column:content}.masthead img{grid-column:side;grid-row:span 2;max-width:100%}section{display:flex;flex-direction:column}.body{display:flex;flex-direction:row}.icon-list{flex-direction:column}.grid-list{grid-template-columns:repeat(auto-fit,minmax(calc((100% - 1em)/2),1fr))}}@media print{.duration{display:none}}';
function B(e = {}) {
  const i = e.themeOptions?.colors;
  return i && Object.entries(i).map(([o, [a, s = a]]) => `--color-${o}-light:${a}; --color-${o}-dark:${s};`).join(" ");
}
function f(e, i = !1) {
  const o = (
    /** @type {string} */
    O(e)
  );
  return i ? A(o) : o;
}
const F = (e) => new Date(e).toLocaleDateString("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC"
});
function H(e) {
  return t`<time datetime="${e}">${F(e)}</time>`;
}
function N(e, i) {
  return i === e ? w(i) : t`<time-duration>${w(e)} – ${i ? w(i) : "Present"}</time-duration>`;
}
function w(e) {
  return e.length === 4 ? e : H(e);
}
const P = (e) => e.replace(/^(https?:|)\/\//, "").replace(/\/$/, "");
function b(e, i) {
  return i ? e ? t`<a href="${e}">${i}</a>` : i : e && t`<a href="${e}">${P(e)}</a>`;
}
function Y(e = [], i = "Diplome") {
  return e.length > 0 && t`
      <div class="container education-container">
        <h3 class="bold">Diploma</h3>
      <section id="education">
        <div>
          ${e.map(
    ({ area: o, courses: a = [], institution: s, startDate: h, endDate: u, studyType: d, url: l }) => t`
              <article>
                <header>
                  <h5>${b(l, s)}</h5>
                  <div>
                    ${o && t`<strong>${o}</strong>`}
                    ${u}
                  </div>
                </header>
                ${d && f(d)}
                ${a.length > 0 && t`
                  <h5>Courses</h5>
                  <ul>
                    ${a.map((m) => t`<li>${f(m)}</li>`)}
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
function $(e, i) {
  return (W.icons[
    /** @type {FeatherIconNames} */
    e.toLowerCase()
  ] || i && W.icons[
    /** @type {FeatherIconNames} */
    i.toLowerCase()
  ])?.toSvg({ width: 16, height: 16 });
}
const J = (e) => Intl.DisplayNames ? new Intl.DisplayNames(["en"], { type: "region" }).of(e) : e;
function Z(e = {}) {
  const { email: i, image: o, birth: a, label: s, location: h, name: u, phone: d, profiles: l = [], summary: m, url: p } = e;
  function v(r) {
    var c = Date.now() - r, g = new Date(c);
    return Math.abs(g.getUTCFullYear() - 1970);
  }
  return t`
    <header class="masthead">
      ${o && t`<img src="${o}" alt="" />`}
      <div>${u && t`<h1>${u}</h1>`} ${s && t`<h2>${s}</h2>`}</div>
      <div>${a && t`<h6>Age: ${v(new Date(a))}</h6>`}</div>
      ${m && t`<article>${f(m)}</article>`}
      <ul class="icon-list">
        ${h?.city && t`
          <li>
            ${$("map-pin")} ${h.city}${h.countryCode && t`, ${J(h.countryCode)}`}
          </li>
        `}
        ${i && t`
          <li>
            ${$("mail")}
            <a href="mailto:${i}">${i}</a>
          </li>
        `}
        ${d && t`
          <li>
            ${$("phone")}
            <a href="tel:${d.replace(/\s/g, "")}">${d}</a>
          </li>
        `}
        ${p && t`<li>${$("link")} ${b(p)}</li>`}
        ${l.map(
    ({ network: r, url: c, username: g }) => t`
            <li>
              ${r && $(r, "user")} ${b(c, g)}
              ${r && t`<span class="network">(${r})</span>`}
            </li>
          `
  )}
      </ul>
    </header>
  `;
}
function G(e = [], i = "Passion") {
  return e.length > 0 && t`
        <div class="container interests-container">
          <h3>${i}</h3>
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
function K(e = [], i = "Langue") {
  return e.length > 0 && t`
        <div class="container languages-container">
        <h3 class="bold">${i}</h3>

        <ul class="minimal">
         ${e.map(
    ({ fluency: o, language: a }) => t` <li>
                    <div class="subWorkInfo"><h6>${a}:  </h6>${o ? `<em> ${o}</em>` : ""}</div>
                </li>`
  )}
        </ul>
    </div>
    `;
}
function Q(e = {}) {
  const { name: i, summary: o } = e;
  return t`
    ${i && t`<title>${i}</title>`}
    ${o && t`<meta name="description" content="${f(o, !0)}" />`}
  `;
}
function E(e = []) {
  return e.length > 0 && t`

      <div class="container skill-container">
      <section id="skills">
      ${e.map(
    (i) => `
           <section class="container">
           <div class="title">
            <h3 class="bold">${i.name}</h3>
            <div class="keyline"></div>
          </div>
                <div class="minimal flex-container">
                ${i.keywords?.map(
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
function V(e = [], i = "Emplois", o = "Equipe", a = "Langage", s = "Outils", h = "Environnement", u = "Méthodes") {
  const d = e.reduce(
    (l, { description: m, name: p, url: v, ...r }) => {
      const c = l[l.length - 1];
      return c && c.name === p ? c.items.push(r) : l.push({ description: m, name: p, url: v, items: [r] }), l;
    },
    /** @type {NestedWork[]} */
    []
  );
  return e.length > 0 && t`
      <section id="work">
        <h3>${i}</h3>
        <div class="stack">
          ${d.map(
    ({ description: l, name: m, url: p, items: v = [] }) => t`
              <article>
                <header>
                  <h4>${b(p, m)}</h4>
                  <div class="meta">${l && t`<div>${l}</div>`}</div>
                </header>
                <div class="timeline">
                  ${v.map(
      ({ highlights: r = [], languages: c = [], tools: g = [], env: y = [], method: k = [], team: n, location: D, position: S, startDate: L, endDate: T, summary: z }) => t`
                      <div>
                        <div>
                          <h5>${S}</h5>
                          ${n && t`<div class="workmeta">
                            ${t`<div>${o} ${n.description}: ${n.back > 0 && t`${n.back} back`}${n.front > 0 && n.back > 0 && t`, `}${n.front > 0 && t`${n.front} front`}${n.front + n.back > 0 && n.fullStack > 0 && t`, `}${n.fullStack > 0 && t`${n.fullStack} fullStack`}</div>`}
                          </div>`}
                           
                          <div class="workmeta">
                            ${L && t`<div>${N(L, T)}</div>`}
                            ${D && t`<div>${D}</div>`}
                          </div>
                        </div>
                        ${z && f(z)}
                        <div class="workInfo">
                          <div class="highlights">
                            ${r.length > 0 && t`
                              <ul>
                                ${r.map((x) => t`
                                <li>${f(x.subject)}</li>
                                ${x.detail && t`<ul>${x.detail.map((M) => t`<li>${f(M)}</li>`)}</ul>`}
                                `)}
                              </ul>
                            `}
                          </div>
                          ${c.length + g.length + y.length + k.length > 0 && t`<div class="detail">
                              ${c.length > 0 && t`<div class="keyWord minimal flex-container">
                                <b>${a}</b>: ${c?.join(", ")}
                              </div>`}
                              ${g.length > 0 && t`<div class="keyWord minimal flex-container">
                                <b>${s}</b>: ${g?.join(", ")}
                              </div>`}
                              ${y.length > 0 && t`<div class="keyWord minimal flex-container">
                                <b>${h}</b>: ${y?.join(", ")}
                              </div>`}
                              ${k.length > 0 && t`<div class="keyWord minimal flex-container">
                                <b>${u}</b>: ${k?.join(", ")}
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
var I;
function X(e, { css: i, js: o } = {}) {
  return t`<!doctype html>
    <html lang="en" style="${B(e.meta)}">
      <head>
        <meta charset="utf-8" />
        ${Q(e.basics)}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" />
        ${i && t`<style>
          ${i}
        </style>`}
        ${o && t(I || (I = C([`<script type="module">
          `, `
        <\/script>`])), o)}
      </head>

        <div class="headers">
           ${Z(e.basics)} 
        </div>
        <div class="body">
        <aside class="left-column">
        ${Y(e.education)}
        ${K(e.languages, "Languages")}
        ${E(e.skills)} 
        ${E(e.env)} 
        ${G(e.interests)}
        </aside>
        <div class="right-column">
        ${V(e.work, "Jobs", "Team", "Language", "Tools", "Environment", "Methods")} 
        </div>
        </div>
      </body>
    </html>`;
}
const ae = {
  mediaType: "print",
  printBackground: !0
}, ne = (e) => X(e, { css: U, js: R });
export {
  ae as pdfRenderOptions,
  ne as render
};
