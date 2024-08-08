import { AuthorizationStatus } from '../const';

export function getRatingWidth (rating: number) {
  return `${rating / 0.05}%`;
}

export function getBedroomsString (count: number) {
  return `${count} Bedroom${count > 1 ? 's' : ''}`;
}

export function getAdultsString (count: number) {
  return `Max ${count} adult${count > 1 ? 's' : ''}`;
}

export function getAuthorizationStatus () {
  return AuthorizationStatus.Auth;
}

export function getStarsText (count: number) {
  return `"${count}-star${count > 1 ? 's' : ''}"`;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function getMarkupDate (rawDate: string) {
  const date = new Date(rawDate);
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}
