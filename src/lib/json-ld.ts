/**
 * Serialise a JSON-LD graph for injection into a <script type="application/ld+json">.
 *
 * `JSON.stringify` alone is not safe here: any `<` that reaches the output —
 * from page copy, a job title, a product name — can close the script element
 * early (`</script>`) and let the rest of the string be parsed as markup.
 * Replacing it with its unicode JSON escape keeps the payload identical after
 * JSON.parse while making that breakout impossible.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
