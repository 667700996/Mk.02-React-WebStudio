'use client';

import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { siteConfig } from '@/lib/siteConfig';
import { ArrowRight, Github, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const iconMap: Record<string, React.ReactNode> = {
    GitHub: <Github className="w-4 h-4" />,
    'X (Twitter)': <Twitter className="w-4 h-4" />,
    LinkedIn: <Linkedin className="w-4 h-4" />,
    YouTube: <Youtube className="w-4 h-4" />,
  };

  return (
    <footer className="py-8 mt-auto border-t border-white/5 bg-surface-1">
      <Container className="studio-container">
        <Row className="gy-5 justify-content-between">
          <Col lg={4}>
            <div className="mb-6">
              <span className="text-xl font-bold tracking-tight text-white">{siteConfig.name}</span>
              <p className="mt-4 text-secondary max-w-sm leading-relaxed">
                Building universal design systems for forward-thinking product teams. 
                We bridge the gap between cinematic storytelling and rigorous engineering.
              </p>
            </div>
            
            <div className="flex gap-4">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-white/10 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {iconMap[social.label]}
                </a>
              ))}
            </div>
          </Col>
          
          <Col lg={2} sm={6}>
            <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link href="#" className="text-secondary hover:text-white transition-colors">Framework</Link></li>
              <li><Link href="#" className="text-secondary hover:text-white transition-colors">Design Tokens</Link></li>
              <li><Link href="#" className="text-secondary hover:text-white transition-colors">Motion Kit</Link></li>
              <li><Link href="#" className="text-secondary hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </Col>

          <Col lg={2} sm={6}>
            <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link href="/about" className="text-secondary hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-secondary hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-secondary hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-secondary hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </Col>

          <Col lg={3}>
             <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay updated</h6>
             <p className="text-sm text-secondary mb-4">
                Get the latest on design engineering and system architecture.
             </p>
             <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all"
                />
                <button 
                    type="submit" 
                    className="absolute right-1 top-1 h-8 w-8 bg-white/10 rounded-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                    <ArrowRight className="w-4 h-4" />
                </button>
             </form>
          </Col>
        </Row>
        
        <div className="pt-8 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-content-between align-items-center gap-4">
            <small className="text-muted">© {year} {siteConfig.name}. All rights reserved.</small>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-muted hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
        </div>
      </Container>
    </footer>
  );
}
