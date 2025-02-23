import React from 'react';
import Logo from './Logo';
import { navLinks } from '@/constants/nav-links';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 capitalize items-center">
          {navLinks.map((link, index) => (
            <Link
              href={`#${link}`}
              key={index}
              className="text-sm font-semibold text-slate-200 hover:text-sky-400"
            >
              {link}
            </Link>
          ))}
        </nav>
        {/* Mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
