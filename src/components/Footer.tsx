import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <div className="text-gray-300 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-gray-200 transition">Index</a></li>
              <li><a href="#work" className="hover:text-gray-200 transition">Work</a></li>
              <li><a href="#about" className="hover:text-gray-200 transition">About me</a></li>
              <li><a href="#services" className="hover:text-gray-200 transition">What I do</a></li>
              <li><a href="#tech-stack" className="hover:text-gray-200 transition">Tech stack</a></li>
              <li><a href="#testimonials" className="hover:text-gray-200 transition">Client's word</a></li>
              <li><a href="#blog" className="hover:text-gray-200 transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-gray-200 transition">Contact me</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Stats</h3>
            <p className="text-gray-400">Delivered 2 projects, tackled multiple challenges</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Sriya Mukkawar. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

