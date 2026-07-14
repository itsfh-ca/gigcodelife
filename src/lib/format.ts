const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

/** e.g. "July 12, 2026" */
export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

/** Rough reading time from a post body, e.g. "3 min read" (225 wpm). */
export function readingTime(body = ''): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 225))} min read`;
}
