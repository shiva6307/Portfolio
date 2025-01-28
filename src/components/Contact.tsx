import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <Mail size={32} className="text-blue-600" />
          <h2 className="text-4xl font-bold">Contact Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MessageSquare size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Message subject"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:shivmishra6307@gmail.com"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">shivmishra6307@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+916307458601"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+91-6307458601</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-gray-700 group">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Lucknow, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Social Links</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/shiva6307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivanshu-mishra-shiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 rounded-lg text-blue-700 hover:bg-blue-200 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}