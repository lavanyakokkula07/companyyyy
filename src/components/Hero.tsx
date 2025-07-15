import React from 'react';
import { ArrowRight, Code, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Leading software development company delivering cutting-edge solutions for enterprises worldwide. 
                Join our mission to innovate and excel in the digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Explore Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-blue-400 hover:bg-blue-400 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Join Our Team
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Code className="mx-auto mb-2 text-blue-400" size={32} />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 text-purple-400" size={32} />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-blue-200 text-sm">Expert Developers</div>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-2 text-green-400" size={32} />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 text-yellow-400" size={32} />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Software Development Team" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                🚀 Hiring Now!
              </div>
            </div>
            <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;