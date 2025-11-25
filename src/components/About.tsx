import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const About = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">Inside My Creative Core</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 md:p-12 mb-12 border border-gray-800"
            style={{ backgroundColor: '#1C1C04' }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a Full Stack Developer with a passion for crafting visually appealing and highly functional 
              digital experiences. With a strong foundation in both frontend and backend technologies, I create 
              intuitive applications that are both user-friendly and performance-focused.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I enjoy collaborating with teams, solving real-world problems, and turning complex ideas into clean, 
              engaging solutions. Currently pursuing my studies at VIT Chennai while working as a Full Stack Developer 
              at Blank Labs.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="border border-gray-800 rounded-xl p-6" style={{ backgroundColor: '#1C1C04' }}>
              <h3 className="text-xl font-bold text-gray-200 mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-200">VIT Chennai</div>
                  <div className="text-gray-400">Bachelor's Degree</div>
                </div>
              </div>
            </div>

            <div className="border border-gray-800 rounded-xl p-6" style={{ backgroundColor: '#1C1C04' }}>
              <h3 className="text-xl font-bold text-gray-200 mb-4">Leadership Roles</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-200">GirlUp</div>
                  <div className="text-gray-400">Social Media Lead</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200">Youth Red Cross Club</div>
                  <div className="text-gray-400">Outreach Lead</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-gray-400 mb-4">Follow me:</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <Instagram className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

