'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Container from './Container';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Inner pages have a dark blue hero — use white text when not scrolled
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When scrolled: always dark text on white bg
  // When not scrolled on homepage: dark text (light gray bg)
  // When not scrolled on inner pages: white text (blue hero bg)
  const useDarkText = scrolled || isHomepage;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : !isHomepage
          ? 'bg-gradient-to-b from-brand-dark/30 to-transparent'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={cn(
              'text-2xl font-heading font-bold transition-colors duration-300',
              useDarkText ? 'text-brand-blue' : 'text-white'
            )}>
              saytup
            </span>
            <span className="text-2xl font-heading font-bold text-brand-orange">.</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-sm font-body font-medium transition-colors duration-200 relative group',
                    useDarkText
                      ? pathname === link.href
                        ? 'text-brand-blue'
                        : 'text-brand-dark hover:text-brand-blue'
                      : pathname === link.href
                      ? 'text-white font-semibold'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 transition-all duration-200',
                      useDarkText ? 'bg-brand-blue' : 'bg-white',
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:block">
              <Button className={cn(
                'font-body font-medium px-6 transition-all duration-300',
                scrolled || isHomepage
                  ? 'bg-brand-orange hover:bg-brand-orange/90 text-white'
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm'
              )}>
                Layihə Başlat
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className={cn('h-6 w-6', useDarkText ? 'text-brand-dark' : 'text-white')} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col gap-8 pt-8">
                  <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                    <span className="text-2xl font-heading font-bold text-brand-blue">saytup</span>
                    <span className="text-2xl font-heading font-bold text-brand-orange">.</span>
                  </Link>
                  <ul className="flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'text-lg font-body font-medium transition-colors',
                            pathname === link.href ? 'text-brand-blue' : 'text-brand-dark hover:text-brand-blue'
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-body">
                      Layihə Başlat
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}
