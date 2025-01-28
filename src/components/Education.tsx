import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'Abdul Kalam Technical University, Lucknow',
    period: '2021-2025',
    grade: 'GPA: 7',
    icon: <GraduationCap size={24} />,
  },
  {
    degree: 'Intermediate (12th)',
    school: 'Praxis Vidyapeeth U.M.V. Shiva Colony, Basti (U.P. Board)',
    period: '2019-2020',
    grade: '69.8%',
    icon: <BookOpen size={24} />,
  },
  {
    degree: 'High School (10th)',
    school: 'Dr. S.P. Mukharji H.S.S., Jigina, Basti (U.P. Board)',
    period: '2017-2018',
    grade: '83%',
    icon: <Award size={24} />,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <GraduationCap size={32} className="text-blue-600" />
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-blue-600">{edu.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 mb-4">{edu.school}</p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar size={18} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Award size={18} />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}