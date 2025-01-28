import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import img from '../assets/shiv_profile.png';
interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="relative w-48 h-48 mx-auto mb-8 group">
          <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse group-hover:animate-none transition-all duration-300"></div>
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300"></div>
          <img
            src={img}
            alt="Shivanshu Mishra"
            className="absolute inset-2 rounded-full object-cover w-44 h-44 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Shivanshu Mishra
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Front-End Developer | Data Science Enthusiast
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Transforming ideas into reality through innovative web and data solutions
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/shiva6307"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivanshu-mishra-shiv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <button
            onClick={() => setActiveSection('contact')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <Mail size={20} />
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}