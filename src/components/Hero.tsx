import React from 'react';
import { ArrowRight, Code, Users, Award, TrendingUp, CheckCircle, Star, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="space-y-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-6 py-3 rounded-full text-sm font-medium">
              <Star className="mr-2" size={16} />
              Leading Software Development Company
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">Innovate.</span>
                <span className="block text-white mb-2">Execute.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Transform.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Empowering enterprises with cutting-edge technology solutions that drive innovation, 
                efficiency, and sustainable growth in the digital era.
              </p>
            </div>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 rounded-full p-2">
                  <CheckCircle className="text-green-400" size={20} />
                </div>
                <span className="text-blue-100">Enterprise-Grade Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500/20 rounded-full p-2">
                  <Zap className="text-blue-400" size={20} />
                </div>
                <span className="text-blue-100">Rapid Development Cycles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500/20 rounded-full p-2">
                  <Award className="text-purple-400" size={20} />
                </div>
                <span className="text-blue-100">Industry-Leading Expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-500/20 rounded-full p-2">
                  <Users className="text-indigo-400" size={20} />
                </div>
                <span className="text-blue-100">Dedicated Support Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <a href="#services" className="flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </button>
              <button className="group border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 backdrop-blur-sm px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                <a href="#internships" className="flex items-center justify-center">
                  Student Programs
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-blue-800/30">
              <div className="text-center group">
                <div className="bg-blue-500/10 rounded-2xl p-4 mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <Code className="mx-auto text-blue-400" size={32} />
                </div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-300 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="bg-purple-500/10 rounded-2xl p-4 mb-3 group-hover:bg-purple-500/20 transition-colors">
                  <Users className="mx-auto text-purple-400" size={32} />
                </div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-300 text-sm">Expert Developers</div>
              </div>
              <div className="text-center group">
                <div className="bg-green-500/10 rounded-2xl p-4 mb-3 group-hover:bg-green-500/20 transition-colors">
                  <Award className="mx-auto text-green-400" size={32} />
                </div>
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-blue-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="bg-yellow-500/10 rounded-2xl p-4 mb-3 group-hover:bg-yellow-500/20 transition-colors">
                  <TrendingUp className="mx-auto text-yellow-400" size={32} />
                </div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-300 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Image */}
          <div className="relative lg:mt-0 mt-16">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional Software Development Team" 
                  className="w-full h-[600px] object-cover"
                />
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span>We're Growing!</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">ISO 9001:2015</div>
                    <div className="text-gray-600">Certified Excellence</div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl -z-10 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;