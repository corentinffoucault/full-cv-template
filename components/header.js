import { html } from '@rbardini/html'
import markdown from '../utils/markdown.js'
import Icon from './icon.js'
import Link from './link.js'

/**
 * @param {string} countryCode
 * @returns {string | undefined}
 */
const formatCountry = countryCode =>
  Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode) : countryCode

/**
 * @param {import('../schema.d.ts').ResumeSchema['basics']} basics
 * @returns {string}
 */
export default function Header(basics = {}) {
  const { email, image, birth, label, location, name, phone, profiles = [], summary, url } = basics
  function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  return html`
    <header class="masthead">
      ${image && html`<img src="${image}" alt="" />`}
      <div>${name && html`<h1>${name}</h1>`} ${label && html`<h2>${label}</h2>`}</div>
      <div>${birth && html`<h6>Age: ${calculateAge(new Date(birth))}</h6>`}</div>
      ${summary && html`<article>${markdown(summary)}</article>`}
      <ul class="icon-list">
        ${location?.city &&
        html`
          <li>
            ${Icon('map-pin')} ${location.city}${location.countryCode && html`, ${formatCountry(location.countryCode)}`}
          </li>
        `}
        ${email &&
        html`
          <li>
            ${Icon('mail')}
            <a href="mailto:${email}">${email}</a>
          </li>
        `}
        ${phone &&
        html`
          <li>
            ${Icon('phone')}
            <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>
          </li>
        `}
        ${url && html`<li>${Icon('link')} ${Link(url)}</li>`}
        ${profiles.map(
          ({ network, url, username }) => html`
            <li>
              ${network && Icon(network, 'user')} ${Link(url, username)}
              ${network && html`<span class="network">(${network})</span>`}
            </li>
          `,
        )}
      </ul>
    </header>
  `
}
