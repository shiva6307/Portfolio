import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link.id)}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:shivmishra6307@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                shivmishra6307@gmail.com
              </a>
              <a
                href="tel:+916307458601"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={16} />
                +91-6307458601
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>Lucknow, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/shiva6307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivanshu-mishra-shiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1 text-sm">
            Made with <Heart size={14} className="text-red-500" /> by Shivanshu Mishra
          </p>
        </div>
      </div>
    </footer>
  );
}