// src/components/Footer.tsx
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light-content dark:bg-dark-content border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-light-text dark:text-dark-text">
        
        {/* Column 1: CEMOS Info */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold tracking-heading text-light-accent dark:text-dark-accent mb-4">
            CEMOS
          </h3>
          <p className="text-sm opacity-80">
            Pioneering the Future of Polymer Electronics through cutting-edge research and collaboration.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/research" className="opacity-80 hover:opacity-100 hover:text-light-accent dark:hover:text-dark-accent transition-colors">Research</Link></li>
            <li><Link href="/team" className="opacity-80 hover:opacity-100 hover:text-light-accent dark:hover:text-dark-accent transition-colors">Team</Link></li>
            <li><Link href="/instrumentations" className="opacity-80 hover:opacity-100 hover:text-light-accent dark:hover:text-dark-accent transition-colors">Instrumentations</Link></li>
            <li><Link href="/news" className="opacity-80 hover:opacity-100 hover:text-light-accent dark:hover:text-dark-accent transition-colors">News</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>123 Research Lane</li>
            <li>Tech University, 90210</li>
            <li>contact@cemos.edu</li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100 hover:text-light-accent dark:hover:text-dark-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 hover:text-light-accent dark:hover:text-dark-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="GitHub" className="opacity-80 hover:opacity-100 hover:text-light-accent dark:hover:text-dark-accent transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Center for Emergent Molecular Optoelectronics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;