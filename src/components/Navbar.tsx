'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';
import { useEffect, useState } from 'react';

export default function AppNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`cx-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="cx-nav__inner">
        <Link href="/" className="cx-brand" aria-label={`${siteConfig.name} home`}>
          <span className="cx-brand__mark" aria-hidden="true"><i /></span>
          <span>{siteConfig.shortName}</span>
          <sup>®</sup>
        </Link>

        <button
          type="button"
          className={`cx-menu-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`cx-nav__links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {siteConfig.navLinks.map((item, index) => {
            const active = item.href === '/' ? pathname === '/' : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href={siteConfig.primaryCta.href} className="cx-nav__cta">
          <span>{siteConfig.primaryCta.label}</span>
          <i aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
