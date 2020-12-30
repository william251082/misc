/**
 * Returns a string containing the origin and pathname of a URL
 */
export default function getOriginUrl(url: string): string {
  return url.split(/[?#]/)[0];
}
