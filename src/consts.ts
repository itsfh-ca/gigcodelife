// Site-wide constants — the single source of truth for identity and navigation.

export const SITE_NAME = 'gigcodelife';

export const SITE_DESCRIPTION =
  'Notes on code and the gig economy — pay guarantees, app bugs, and the software behind the platforms.';

export const NAV_LINKS = [
  { href: '/', label: 'Latest' },
  { href: '/about', label: 'About' },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: 'Read',
    links: [
      { href: '/', label: 'Latest Dispatches' },
      { href: '/rss.xml', label: 'Archive' },
      { href: '/rss.xml', label: 'RSS Feed' },
    ],
  },
  {
    title: 'Topics',
    links: [
      { href: '/', label: 'Pay & Guarantees' },
      { href: '/', label: 'App Bugs & Teardowns' },
      { href: '/', label: 'Field Notes' },
    ],
  },
  {
    title: 'About',
    links: [
      { href: '/about', label: 'About gigcodelife' },
      { href: '/about', label: 'Who writes this' },
      { href: '/rss.xml', label: 'Follow via RSS' },
    ],
  },
  {
    title: 'More',
    links: [
      { href: '/about', label: 'Contact' },
      { href: '/', label: 'Corrections' },
      { href: '/', label: 'Ethics' },
    ],
  },
] as const;

export const FOOTER_META_LINKS = [
  { href: '/', label: 'Latest' },
  { href: '/about', label: 'About' },
  { href: '/rss.xml', label: 'RSS' },
] as const;
