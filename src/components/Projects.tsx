import React from 'react';
import { ExternalLink, Github, Layout, Music, Newspaper, Tv } from 'lucide-react';

const projects = [
  {
    title: "Krishna Furniture's",
    description: 'A modern furniture website showcasing products and services.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://shiva6307.github.io/Krishna_furnitures/',
    github: 'https://github.com/shiva6307/Krishna_furnitures',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: 'Music Player',
    description: 'A web-based music streaming platform with API integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    demo: 'https://shiva6307.github.io/Music_player/',
    github: 'https://github.com/shiva6307/Music_player',
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: 'NewsNexus',
    description: 'Real-time news platform with personalized content delivery.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    demo: 'https://shiva6307.github.io/NewsNexus/',
    github: 'https://github.com/shiva6307/NewsNexus',
    icon: <Newspaper className="w-6 h-6" />,
  },
  {
    title: 'Prem Dance Studio',
    description: 'Dynamic website for a professional dance studio.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://dance-studio-01.vercel.app/',
    github: 'https://github.com/shiva6307/Dance_studio_01',
    icon: <Tv className="w-6 h-6" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <Layout size={32} className="text-blue-600" />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {React.cloneElement(project.icon, { className: "text-blue-600" })}
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}