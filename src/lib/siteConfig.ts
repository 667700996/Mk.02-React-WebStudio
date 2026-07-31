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
  tagline: 'Impossible ideas, engineered into living digital experiences.',
  description:
    'Commonline is an independent creative technology studio building cinematic digital experiences where brand, motion, and engineering move as one.',
  url: 'https://commonline.studio',
  keywords: [
    'web studio',
    'next.js',
    'creative technology studio',
    'interactive portfolio',
    'webgl experience',
    'design engineering',
    'brand systems',
    'universal website',
    'portfolio os',
    'launch kit',
  ],
  navLinks: [
    { label: 'Index', href: '/' },
    { label: 'Work', href: '/#work' },
    { label: 'Process', href: '/#process' },
    { label: 'Lab', href: '/#lab' },
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
