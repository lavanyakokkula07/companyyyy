import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Rocket } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: "Senior Full Stack Developer",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹12-18 LPA",
      experience: "3-5 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "DevOps Engineer",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹10-15 LPA",
      experience: "2-4 years",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS"]
    },
    {
      title: "UI/UX Designer",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹8-12 LPA",
      experience: "2-3 years",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      title: "Data Scientist",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹15-22 LPA",
      experience: "3-6 years",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: Users,
      title: "Great Team Culture",
      description: "Collaborative environment with talented professionals"
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Clear career progression paths and skill development programs"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career with India's fastest-growing software company. 
            Work on cutting-edge projects with the latest technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Current Openings</h3>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign size={16} className="mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Join Us?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <benefit.icon className="text-blue-600 mb-3" size={32} />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-blue-100 mb-6">
            Send your resume to careers@vedanza.com or apply through our portal
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Openings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;