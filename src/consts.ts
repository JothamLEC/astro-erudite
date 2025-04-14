import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Jotham Lim',
  description:
    'A Digital Marketing Engineer, helping B2B Tech companies showcase products & services. Also working part-time as a HelathyGamer Coach.',
  href: 'https://jothamlim.com',
  author: 'jotham',
  locale: 'en-US',
  featuredPostCount: 3,
  postsPerPage: 7,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/jothamlec/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:jotham@cothink.ing',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
