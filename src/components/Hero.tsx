import { motion } from 'framer-motion';
import { Download, Calendar, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Creative Full Stack Developer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            As a user-centric developer, I create visually refined, highly functional digital experiences 
            that transform ideas into meaningful interactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
              SM
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sriya Mukkawar</h2>
              <p className="text-lg text-gray-600 mb-6">Full Stack Developer</p>
              <p className="text-gray-700 mb-6">
                I'm a passionate full stack developer focused on creating clean, efficient, and scalable solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                <div>📍 VIT Chennai, India</div>
                <div>💼 Full Stack Developer</div>
                <div>🌐 English, Hindi</div>
                <div>📧 Available for opportunities</div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <Calendar className="w-4 h-4" />
                  Schedule a call
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition">
                  <Mail className="w-4 h-4" />
                  Work with me
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

