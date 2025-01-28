import React from 'react';
import { Github, Linkedin, User, Code, Database, Briefcase, Award, Rocket, Brain, Globe, BookOpen, Target } from 'lucide-react';

export default function About() {
  const aboutCards = [
    {
      title: "Who I Am",
      icon: <User size={24} />,
      content: "Hello, I’m Shivanshu Mishra, a passionate and driven B.Tech student in Information Technology at Shri Ram Swaroop Memorial College of Engineering and Management, Lucknow, graduating in July 2025. With a knack for web development, I have successfully developed over three interactive projects that showcase my technical skills and creativity."
    },
    {
      title: "What I Do",
      icon: <Code size={24} />,
      content: "I aim to build innovative and user-friendly web applications, with a focus on responsive designs, interactive interfaces, and visually appealing elements. My portfolio reflects my dedication to creating seamless user experiences with cutting-edge technologies."
    },
    {
      title: "My Focus",
      icon: <Target size={24} />,
      content: "Currently focused on modern web technologies and data science, bringing creativity and technical expertise to every project. Beyond academics, I am enthusiastic about exploring new challenges, continuously learning, and refining my expertise to excel in the tech industry."
    }
  ];

  const highlights = [
    { icon: <Code size={20} />, text: 'Front-End Development' },
    { icon: <Database size={20} />, text: 'Data Science' },
    { icon: <Briefcase size={20} />, text: 'Professional Experience' },
    { icon: <Award size={20} />, text: 'Multiple Certifications' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <User size={32} className="text-blue-600" />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        
        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-6">Key Highlights</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="text-blue-600 transition-transform duration-300 group-hover:rotate-12">
                  {item.icon}
                </div>
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/shiva6307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivanshu-mishra-shiv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}