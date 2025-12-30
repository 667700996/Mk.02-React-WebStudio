'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggleButton from './ThemeToggleButton';
import { siteConfig } from '@/lib/siteConfig';
import { useEffect, useState } from 'react';

export default function AppNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    const [base] = href.split('#');
    if (!base) {
      return pathname === '/';
    }
    return pathname === base;
  };

  return (
    <Navbar 
        expand="lg" 
        fixed="top" 
        className={`py-4 transition-all duration-300 ${scrolled ? 'bg-surface-0/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'}`}
    >
      <Container className="studio-container">
        <Navbar.Brand as={Link} href="/" className="fw-bold text-uppercase tracking-wider text-white flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-accent-primary" />
           {siteConfig.shortName}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="studio-navbar" className="border-0 p-0 text-white focus:outline-none shadow-none">
            <span className="navbar-toggler-icon invert" />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="studio-navbar" className="justify-content-end">
          <Nav className="align-items-lg-center gap-1">
            {siteConfig.navLinks.map((item) => (
              <Nav.Link
                as={Link}
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:text-white hover:bg-white/5 ${
                    isActive(item.href) ? 'text-white bg-white/5' : 'text-secondary'
                }`}
              >
                {item.label}
              </Nav.Link>
            ))}
            
            <div className="h-6 w-px bg-white/10 mx-3 hidden lg:block" />
            
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <ThemeToggleButton />
              <Link 
                href={siteConfig.primaryCta.href} 
                className="px-4 py-2 text-sm font-semibold text-surface-0 bg-white rounded-lg hover:bg-gray-200 transition-colors"
              >
                {siteConfig.primaryCta.label}
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}