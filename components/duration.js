import { html } from '@rbardini/html'
import DateTime from './date-time.js'

/**
 * @param {string} startDate
 * @param {string} [endDate]
 * @returns {string}
 */
export default function Duration(startDate, endDate) {
  if (endDate === startDate) return getDate(endDate)
  return html`<time-duration>${getDate(startDate)} – ${endDate ? getDate(endDate) : 'Present'}</time-duration>`
}

function getDate(dateToConvert) {
  return dateToConvert.length === 4 ? dateToConvert : DateTime(dateToConvert)
}
