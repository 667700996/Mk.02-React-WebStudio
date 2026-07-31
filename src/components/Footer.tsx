import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="cx-footer">
      <div className="cx-footer__top">
        <Link href="/" className="cx-brand cx-brand--footer">
          <span className="cx-brand__mark" aria-hidden="true"><i /></span>
          <span>{siteConfig.shortName}</span>
        </Link>
        <p>Independent design engineering practice<br />Seoul · Working worldwide</p>
        <div className="cx-footer__social">
          {siteConfig.socials.slice(0, 3).map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label.replace(' (Twitter)', '')}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className="cx-footer__bottom">
        <small>© {year} {siteConfig.name}</small>
        <span>Clarity, character, and production discipline.</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
