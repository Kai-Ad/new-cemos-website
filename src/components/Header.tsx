// src/components/Header.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggleButton } from './ThemeToggleButton';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // useEffect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if user has scrolled more than 10px, else false
      setScrolled(window.scrollY > 10);
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled 
          ? 'border-b border-black/10 dark:border-white/10 bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm' 
          : 'bg-transparent'
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-heading text-light-accent dark:text-dark-accent">
          CEMOS
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/research" className="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Research</Link>
          <Link href="/team" className="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Team</Link>
          <Link href="/instrumentations" className="hover:text-light-accent dark:hover:text-dark-accent transition-colors">Instrumentations</Link>
        </div>

        {/* Action Buttons & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-block px-4 py-2 border border-light-accent dark:border-dark-accent text-light-accent dark:text-dark-accent rounded hover:bg-light-accent/10 dark:hover:bg-dark-accent/10 transition-colors">
            Contact Us
          </button>
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;