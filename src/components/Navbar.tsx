import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navigation = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Shivanshu Mishra
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-white/10 font-semibold transform scale-105'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-white/10 font-semibold'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}