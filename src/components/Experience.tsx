import React from 'react';
import { Briefcase, Code, Database, Laptop } from 'lucide-react';

const experiences = [
  {
    title: 'Front-End Developer',
    company: 'CODE ALPHA',
    period: 'Previous',
    description: 'Worked on 3+ projects, using HTML, CSS, and JavaScript.',
    icon: <Code className="w-6 h-6 text-blue-500" />,
  },
  {
    title: 'Data Science Intern',
    company: 'IBM',
    period: 'Previous',
    description: 'Built data visualization models with Python using Pandas, Matplotlib, and NumPy.',
    icon: <Database className="w-6 h-6 text-blue-500" />,
  },
  {
    title: 'Virtual Training',
    company: 'SIPHER WEB',
    period: 'Previous',
    description: 'Completed training in front-end development with 2 projects.',
    icon: <Laptop className="w-6 h-6 text-blue-500" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase size={32} className="text-blue-600" />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-300"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-3 md:left-7 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-600 mb-2">{exp.description}</p>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full group-hover:bg-blue-50">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}