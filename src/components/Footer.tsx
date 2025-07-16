import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/public/Logo.2.jpg" 
                alt="Vedanza Software" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Vedanza Software</h3>
                <p className="text-sm text-gray-400">Innovation • Excellence • Growth</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading software development company delivering cutting-edge solutions 
              for enterprises worldwide while nurturing the next generation of tech talent.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={20} />
              <Twitter className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={20} />
              <Instagram className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#internships" className="hover:text-white transition-colors">Student Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@vedanza.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 9876543210</span>
              </div>
              <div className="text-xs text-gray-400 mt-4">
                Tech Park, Electronic City<br />
                Bangalore, Karnataka 560100<br />
                India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © 2024 Vedanza Software. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="?admin=true" className="hover:text-blue-400 transition-colors text-xs">Admin Access</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;