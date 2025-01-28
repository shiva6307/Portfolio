import React from 'react';
import { Code2, Users, Brain, Terminal, Database, Palette, Server, PenTool, Cpu, FileCode, Github as Git, Globe, Monitor, Package, Phone as Python, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 size={24} className="text-blue-600" />,
    skills: [
      { name: 'JavaScript ES6', icon: <FileCode size={16} /> },
      { name: 'React.js', icon: <Code2 size={16} /> },
      { name: 'HTML5', icon: <Globe size={16} /> },
      { name: 'CSS3', icon: <Palette size={16} /> },
      { name: 'Tailwind CSS', icon: <Package size={16} /> }
    ],
    color: 'blue',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Programming Languages',
    icon: <Terminal size={24} className="text-green-600" />,
    skills: [
      { name: 'Python', icon: <Python size={16} /> },
      { name: 'C++', icon: <Cpu size={16} /> },
      { name: 'C', icon: <Terminal size={16} /> },
      { name: 'SQL', icon: <Database size={16} /> }
    ],
    color: 'green',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Data Science',
    icon: <Database size={24} className="text-purple-600" />,
    skills: [
      { name: 'Pandas', icon: <Database size={16} /> },
      { name: 'NumPy', icon: <Brain size={16} /> },
      { name: 'Matplotlib', icon: <Monitor size={16} /> },
      { name: 'Data Visualization', icon: <PenTool size={16} /> }
    ],
    color: 'purple',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Tools & Technologies',
    icon: <PenTool size={24} className="text-orange-600" />,
    skills: [
      { name: 'Git', icon: <Git size={16} /> },
      { name: 'VS Code', icon: <Code2 size={16} /> },
      { name: 'GitHub', icon: <Globe size={16} /> },
      { name: 'Command Line', icon: <Terminal size={16} /> }
    ],
    color: 'orange',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
];

const softSkills = [
  { skill: 'Leadership', icon: <Users size={20} /> },
  { skill: 'Problem Solving', icon: <Brain size={20} /> },
  { skill: 'Critical Thinking', icon: <Terminal size={20} /> },
  { skill: 'Communication', icon: <Server size={20} /> },
  { skill: 'Creativity', icon: <Palette size={20} /> },
  { skill: 'Adaptability', icon: <Settings size={20} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <Brain size={32} className="text-blue-600" />
          <h2 className="text-4xl font-bold">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative group">
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`relative overflow-hidden flex items-center gap-2 bg-${category.color}-50/50 px-4 py-3 rounded-lg text-${category.color}-700 font-medium hover:bg-${category.color}-100/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-md group/skill`}
                    >
                      {/* Animated background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-${category.color}-100/0 via-${category.color}-100/30 to-${category.color}-100/0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 animate-shine`}></div>
                      
                      <span className="relative z-10 group-hover/skill:rotate-12 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="relative z-10">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-8">
            <Users size={24} className="text-blue-600" />
            <h3 className="text-2xl font-semibold">Soft Skills</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-md group"
              >
                <div className="text-gray-600 group-hover:text-blue-600 transition-colors group-hover:rotate-12">
                  {skill.icon}
                </div>
                <span className="font-medium group-hover:text-blue-600">{skill.skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}