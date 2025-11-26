import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Instagram } from 'lucide-react';

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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Inside My Creative Core</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 md:p-12 mb-12 border border-purple-200 bg-purple-50"
          >
            <p className="text-lg text-black leading-relaxed mb-6">
              I'm a Full Stack Developer with a passion for crafting visually appealing and highly functional 
              digital experiences. With a strong foundation in both frontend and backend technologies, I create 
              intuitive applications that are both user-friendly and performance-focused.
            </p>
            <p className="text-lg text-black leading-relaxed mb-8">
              I enjoy collaborating with teams, solving real-world problems, and turning complex ideas into clean, 
              engaging solutions. Currently pursuing my studies at VIT Chennai while working as a Full Stack Developer 
              at Blank Labs.
            </p>
            <a href="https://drive.google.com/file/d/1auTY7m0-YvVTp4fjOYxBpvw4OdWM4aBt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="border border-purple-200 rounded-xl p-6 bg-purple-50">
              <h3 className="text-xl font-bold text-black mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-black">VIT Chennai</div>
                  <div className="text-gray-600">Bachelor's Degree</div>
                </div>
              </div>
            </div>

            <div className="border border-purple-200 rounded-xl p-6 bg-purple-50">
              <h3 className="text-xl font-bold text-black mb-4">Leadership Roles</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-black">GirlUp</div>
                  <div className="text-gray-600">Social Media Lead</div>
                </div>
                <div>
                  <div className="font-semibold text-black">Youth Red Cross Club</div>
                  <div className="text-gray-600">Outreach Lead</div>
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
            <p className="text-sm text-gray-600 mb-4">Follow me:</p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Sriya-Mukkawar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition border border-purple-300">
                <Github className="w-5 h-5 text-purple-700" />
              </a>
              <a href="https://www.linkedin.com/in/sriyamukkawar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition border border-purple-300">
                <Linkedin className="w-5 h-5 text-purple-700" />
              </a>
              <a href="mailto:mukkawarsriya@gmail.com" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition border border-purple-300">
                <Mail className="w-5 h-5 text-purple-700" />
              </a>
              <a href="https://www.instagram.com/sriyaaaaaaaaaa._/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition border border-purple-300">
                <Instagram className="w-5 h-5 text-purple-700" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

