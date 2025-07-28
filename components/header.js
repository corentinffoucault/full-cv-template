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

      <div class="menu">
        <div>${name && html`<h6>${name}</h6>`}</div>
        <div>${birth && html`Age: ${calculateAge(new Date(birth))}`}</div>
        ${summary && html`<article>${markdown(summary)}</article>`}
        <ul class="icon-list">
          ${location?.city &&
          html`
            <li style="font-size: 10px;">
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
      </div>

      <div class="content">
        ${label && html`<h1>${label}</h1>`}
      </div>
    </header>
  `
}
