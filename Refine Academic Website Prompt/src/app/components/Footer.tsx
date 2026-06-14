import { Link } from 'react-router';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4" style={{ fontFamily: 'Inter' }}>UNIBEN Data Science</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Leading the future of data-driven innovation through world-class education, cutting-edge research, and industry collaboration.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#388EED] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#388EED] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#388EED] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-white mb-4" style={{ fontFamily: 'Inter' }}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/news" className="text-gray-400 hover:text-[#388EED] transition-colors">News & Events</Link></li>
              <li><Link to="/programs/bsc-data-science" className="text-gray-400 hover:text-[#388EED] transition-colors">Programs</Link></li>
              <li><a href="#research" className="text-gray-400 hover:text-[#388EED] transition-colors">Research</a></li>
              <li><a href="#admissions" className="text-gray-400 hover:text-[#388EED] transition-colors">Admissions</a></li>
              <li><a href="#faculty" className="text-gray-400 hover:text-[#388EED] transition-colors">Faculty</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-white mb-4" style={{ fontFamily: 'Inter' }}>Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>University of Benin, Ugbowo Campus, Benin City, Nigeria</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+234 (0) 803 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>datascience@uniben.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 University of Benin. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#388EED] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#388EED] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
