import React, { useState } from 'react';
import { Globe, Smartphone, Cloud, Database, Shield, Zap, X, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and cloud infrastructure.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      detailedDescription: "Transform your business with cutting-edge web applications that deliver exceptional user experiences and drive growth.",
      features: [
        "Responsive Design & Mobile Optimization",
        "Modern Frontend Technologies (React, Vue, Angular)",
        "Robust Backend Development (Node.js, Python, Java)",
        "Database Integration & API Development",
        "Cloud Deployment & Scalability",
        "Performance Optimization & SEO",
        "Security Implementation & Testing",
        "Ongoing Maintenance & Support"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "TypeScript", "Next.js"],
      deliverables: [
        "Fully functional web application",
        "Source code and documentation",
        "Deployment and hosting setup",
        "User training and support",
        "3 months free maintenance"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
      detailedDescription: "Create powerful mobile applications that engage users and expand your business reach across all mobile platforms.",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions (React Native, Flutter)",
        "UI/UX Design & Prototyping",
        "App Store Optimization",
        "Push Notifications & Analytics",
        "Offline Functionality",
        "Third-party Integrations",
        "App Store Submission Support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
      deliverables: [
        "Published mobile application",
        "App store listings",
        "Analytics dashboard",
        "User documentation",
        "Post-launch support"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, migration services, and DevOps implementation for enterprise clients.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      detailedDescription: "Leverage the power of cloud computing to scale your business operations and reduce infrastructure costs.",
      features: [
        "Cloud Migration & Strategy",
        "AWS, Azure, Google Cloud Services",
        "DevOps & CI/CD Implementation",
        "Container Orchestration (Docker, Kubernetes)",
        "Serverless Architecture",
        "Cloud Security & Compliance",
        "Cost Optimization",
        "24/7 Monitoring & Support"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      deliverables: [
        "Cloud infrastructure setup",
        "Migration documentation",
        "Monitoring dashboards",
        "Security configurations",
        "Training and handover"
      ]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Big data processing, business intelligence, and machine learning solutions for data-driven insights.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      detailedDescription: "Unlock the power of your data with advanced analytics and machine learning solutions that drive business intelligence.",
      features: [
        "Data Warehouse Design & Implementation",
        "ETL Pipeline Development",
        "Business Intelligence Dashboards",
        "Machine Learning Model Development",
        "Predictive Analytics",
        "Real-time Data Processing",
        "Data Visualization",
        "Custom Reporting Solutions"
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "TensorFlow"],
      deliverables: [
        "Analytics platform",
        "Interactive dashboards",
        "ML models and algorithms",
        "Data documentation",
        "Training and workshops"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits, penetration testing, and security infrastructure implementation.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400",
      detailedDescription: "Protect your digital assets with comprehensive cybersecurity solutions and proactive threat management.",
      features: [
        "Security Assessment & Auditing",
        "Penetration Testing",
        "Vulnerability Management",
        "Security Policy Development",
        "Incident Response Planning",
        "Employee Security Training",
        "Compliance Management",
        "24/7 Security Monitoring"
      ],
      technologies: ["Kali Linux", "Metasploit", "Wireshark", "Nessus", "OWASP", "SIEM"],
      deliverables: [
        "Security assessment report",
        "Penetration testing results",
        "Security policies",
        "Incident response plan",
        "Ongoing monitoring setup"
      ]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation for modern enterprises.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      detailedDescription: "Transform your business operations with comprehensive digital solutions that improve efficiency and drive innovation.",
      features: [
        "Digital Strategy Consulting",
        "Process Automation",
        "Legacy System Modernization",
        "Digital Workflow Design",
        "Change Management",
        "Technology Integration",
        "Performance Optimization",
        "ROI Measurement & Analytics"
      ],
      technologies: ["RPA", "AI/ML", "IoT", "Blockchain", "API Integration", "Microservices"],
      deliverables: [
        "Digital transformation roadmap",
        "Automated workflows",
        "Modernized systems",
        "Training programs",
        "Success metrics dashboard"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="mr-2" size={16} />
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Software Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge technology solutions that drive innovation, 
            efficiency, and sustainable growth in the digital era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="text-white" size={28} />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Enterprise Ready
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group/btn transition-all duration-300"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="mr-1" size={14} />
                    Available
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our expert team can help you achieve your technology goals 
              and drive your business forward.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <selectedService.icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {selectedService.detailedDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Receive</h3>
                    <div className="space-y-3">
                      {selectedService.deliverables.map((deliverable: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech: string, index: number) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Get Started Today</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Ready to implement this solution for your business?
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-3">
                      Request Quote
                    </button>
                    <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-lg font-semibold transition-colors">
                      Schedule Consultation
                    </button>
                  </div>

                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-green-600 font-semibold text-sm">✓ Free Initial Consultation</div>
                    <div className="text-green-600 font-semibold text-sm">✓ 24/7 Support Available</div>
                    <div className="text-green-600 font-semibold text-sm">✓ Satisfaction Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;