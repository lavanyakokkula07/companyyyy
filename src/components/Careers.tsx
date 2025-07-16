import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Rocket, X } from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const openings = [
    {
      title: "Senior Full Stack Developer",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹12-18 LPA",
      experience: "3-5 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      description: "We are looking for a Senior Full Stack Developer to join our dynamic team. You will be responsible for developing and maintaining web applications using modern technologies.",
      responsibilities: [
        "Develop and maintain web applications using React and Node.js",
        "Design and implement RESTful APIs",
        "Work with MongoDB and other databases",
        "Deploy applications on AWS cloud infrastructure",
        "Collaborate with cross-functional teams",
        "Mentor junior developers"
      ],
      requirements: [
        "3-5 years of experience in full stack development",
        "Strong proficiency in JavaScript, React, and Node.js",
        "Experience with MongoDB and SQL databases",
        "Knowledge of AWS services",
        "Good understanding of software development lifecycle",
        "Excellent problem-solving skills"
      ]
    },
    {
      title: "DevOps Engineer",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹10-15 LPA",
      experience: "2-4 years",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS"],
      description: "Join our DevOps team to help streamline our development and deployment processes. You'll work with cutting-edge tools and technologies.",
      responsibilities: [
        "Implement and maintain CI/CD pipelines",
        "Manage containerized applications using Docker and Kubernetes",
        "Monitor system performance and reliability",
        "Automate deployment processes",
        "Collaborate with development teams",
        "Ensure security best practices"
      ],
      requirements: [
        "2-4 years of DevOps experience",
        "Proficiency in Docker and Kubernetes",
        "Experience with Jenkins or similar CI/CD tools",
        "Knowledge of AWS cloud services",
        "Scripting skills in Python or Bash",
        "Understanding of monitoring and logging tools"
      ]
    },
    {
      title: "UI/UX Designer",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹8-12 LPA",
      experience: "2-3 years",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "We're seeking a creative UI/UX Designer to create intuitive and engaging user experiences for our software products.",
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and mockups",
        "Collaborate with developers and product managers",
        "Maintain design systems and style guides",
        "Stay updated with design trends and best practices"
      ],
      requirements: [
        "2-3 years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or similar tools",
        "Strong portfolio showcasing design projects",
        "Understanding of user-centered design principles",
        "Knowledge of HTML/CSS is a plus",
        "Excellent communication and collaboration skills"
      ]
    },
    {
      title: "Data Scientist",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹15-22 LPA",
      experience: "3-6 years",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
      description: "Join our data science team to build intelligent solutions and derive insights from complex datasets using advanced analytics and machine learning.",
      responsibilities: [
        "Develop machine learning models and algorithms",
        "Analyze large datasets to extract meaningful insights",
        "Build predictive models for business applications",
        "Collaborate with engineering teams to deploy models",
        "Create data visualizations and reports",
        "Stay current with ML/AI research and trends"
      ],
      requirements: [
        "3-6 years of data science experience",
        "Strong proficiency in Python and SQL",
        "Experience with machine learning frameworks (TensorFlow, PyTorch)",
        "Knowledge of statistical analysis and data mining",
        "Experience with big data tools is a plus",
        "Strong analytical and problem-solving skills"
      ]
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
                    <button 
                      onClick={() => setSelectedJob(job)}
                      className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
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

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {selectedJob.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      {selectedJob.salary}
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-1" />
                      {selectedJob.experience}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((responsibility: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((requirement: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill: string, skillIndex: number) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;