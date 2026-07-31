export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  keywords: string[];
  navLinks: NavLink[];
  primaryCta: NavLink;
  secondaryCta: NavLink;
  socials: SocialLink[];
};

export const siteConfig: SiteConfig = {
  name: 'Commonline Studio',
  shortName: 'Commonline',
  tagline: 'Make complexity feel inevitable.',
  description:
    'Commonline is an independent design engineering practice creating digital products, interfaces, and visual systems where clarity and character are inseparable.',
  url: 'https://commonline.studio',
  keywords: [
    'design engineering',
    'next.js',
    'creative technology studio',
    'interactive portfolio',
    'product interface',
    'design engineering',
    'brand systems',
    'frontend architecture',
    'interaction design',
  ],
  navLinks: [
    { label: 'Index', href: '/' },
    { label: 'Work', href: '/#work' },
    { label: 'Practice', href: '/#approach' },
    { label: 'System', href: '/#system' },
    { label: 'About', href: '/about' },
  ],
  primaryCta: { label: 'Begin a project', href: '/contact' },
  secondaryCta: { label: 'Explore selected work', href: '/#work' },
  socials: [
    { label: 'GitHub', href: 'https://github.com/commonline-studio' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/commonline-studio/' },
    { label: 'X (Twitter)', href: 'https://x.com/commonlinestudio' },
    { label: 'YouTube', href: 'https://www.youtube.com/@commonlinestudio' },
  ],
};
