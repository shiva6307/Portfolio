import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Artificial Intelligence Fundamentals',
    url: 'https://www.credly.com/badges/8ff4ef3f-030a-4c23-9f30-6dee52deb8db/linked_in_profile',
  },
  {
    title: 'Foundations of Cybersecurity',
    url: 'https://www.coursera.org/account/accomplishments/verify/3CSYWQTMYDKM',
  },
  {
    title: 'Machine Learning with Python',
    url: 'https://courses.cognitiveclass.ai/certificates/19933488966b4a2f8b95d3c0bbcdeb9e',
  },
  {
    title: 'AI for India 2.0',
    url: 'https://www.guvi.in/verify-certificate?id=60w8rQ9I87111zV2v6',
  },
  {
    title: 'HTML and CSS in Depth',
    url: 'https://www.coursera.org/account/accomplishments/verify/5M6CVXNTJ84G',
  },
  {
    title: 'Python',
    url: 'https://www.guvi.in/certificate?id=ds28NW6f169DUL5184',
  },
  {
    title: 'Build Your Own Chatbot',
    url: 'https://courses.cognitiveclass.ai/certificates/2fcbb57208fa4f91a5b2d1cd15f463b2',
  },
  {
    title: 'Data Science 101',
    url: 'https://courses.cognitiveclass.ai/certificates/a1d554c7ac314134bbd2211dc563dd43',
  },
  {
    title: 'Introduction to Cloud',
    url: 'https://courses.cognitiveclass.ai/certificates/7685b11182934d949cf8ed6b4cf8f641',
  },
  {
    title: 'Java Programming',
    url: 'https://www.mygreatlearning.com/certificate/QXAIVAIH',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <Award size={24} className="text-blue-600" />
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}