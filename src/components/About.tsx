import React from 'react';
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Vedanza Software</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded with a vision to transform businesses through innovative technology solutions, 
                Vedanza Software has emerged as a trusted partner for enterprises seeking digital excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of expert developers, designers, and consultants work collaboratively to deliver 
                cutting-edge software solutions that drive growth and efficiency for our clients worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Globe className="mx-auto mb-2 text-blue-600" size={32} />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <TrendingUp className="mx-auto mb-2 text-green-600" size={32} />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our Team" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <Award className="text-yellow-500" size={32} />
                <div>
                  <div className="font-semibold text-gray-900">ISO 9001:2015</div>
                  <div className="text-gray-600 text-sm">Certified Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Target className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital marketplace.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Eye className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading software development company recognized globally for 
                excellence, innovation, and transformative digital solutions.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Users className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, excellence, and client success form the foundation 
                of everything we do at Vedanza Software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;