import React, { useState } from 'react';
import { GraduationCap, Calendar, Award, Users, CheckCircle, Star } from 'lucide-react';

const Internships = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    passedOutYear: '',
    university: '',
    percentage: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your Google Sheets
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  const programs = [
    {
      title: "Full Stack Development",
      duration: "3 months",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
      spots: "20 positions"
    },
    {
      title: "Java Development",
      duration: "3 months",
      technologies: ["Java", "Spring Boot", "MySQL", "Maven"],
      spots: "15 positions"
    },
    {
      title: "Python Development",
      duration: "3 months",
      technologies: ["Python", "Django", "Flask", "PostgreSQL"],
      spots: "10 positions"
    },
    {
      title: "C/C++ Programming",
      duration: "3 months",
      technologies: ["C", "C++", "Data Structures", "Algorithms"],
      spots: "12 positions"
    },
    {
      title: "Database Management",
      duration: "2 months",
      technologies: ["SQL", "MySQL", "PostgreSQL", "Database Design"],
      spots: "15 positions"
    },
    {
      title: "DevOps Engineering",
      duration: "4 months",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS"],
      spots: "8 positions"
    },
    {
      title: "Cyber Security",
      duration: "4 months",
      technologies: ["Network Security", "Ethical Hacking", "Penetration Testing", "Security Auditing"],
      spots: "10 positions"
    },
    {
      title: "SAP FICO",
      duration: "3 months",
      technologies: ["SAP FICO", "Financial Accounting", "Controlling", "SAP ERP"],
      spots: "8 positions"
    },
    {
      title: "SAP ABAP",
      duration: "4 months",
      technologies: ["SAP ABAP", "ABAP Programming", "SAP Development", "Data Dictionary"],
      spots: "6 positions"
    }
  ];

  const benefits = [
    "Real-world project experience",
    "Mentorship from industry experts",
    "Certificate of completion",
    "Potential full-time job offers",
    "Networking opportunities",
    "Skill development workshops"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "IIT Delhi",
      program: "Java Development",
      feedback: "The internship at Vedanza was transformative. I learned cutting-edge technologies and got hands-on experience with real client projects."
    },
    {
      name: "Rahul Kumar",
      university: "NIT Trichy",
      program: "Python Development",
      feedback: "Amazing mentorship and learning environment. The projects were challenging and helped me grow as a developer."
    },
    {
      name: "Ananya Patel",
      university: "BITS Pilani",
      program: "Cyber Security",
      feedback: "Great exposure to industry standards and practices. The team was very supportive throughout the internship."
    }
  ];

  return (
    <section id="internships" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Internship Program</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Launch your tech career with our comprehensive internship program. 
            Gain real-world experience and work on live projects with industry mentors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Available Programs</h3>
            <div className="space-y-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Users size={16} className="mr-1" />
                          {program.spots}
                        </div>
                      </div>
                    </div>
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {program.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">What You'll Get</h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Qualification *</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Qualification</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="B.E">B.E</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passed Out Year *</label>
                <input
                  type="number"
                  name="passedOutYear"
                  value={formData.passedOutYear}
                  onChange={handleInputChange}
                  min="2020"
                  max="2025"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">University/College *</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Percentage/CGPA *</label>
                <input
                  type="text"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 85% or 8.5 CGPA"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Student Feedback</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.feedback}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.university}</div>
                  <div className="text-sm text-blue-600">{testimonial.program} Intern</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;