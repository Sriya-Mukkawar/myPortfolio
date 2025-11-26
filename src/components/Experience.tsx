import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'Feb 2025 - Present',
    role: 'Full Stack Developer',
    company: 'Blank Labs',
    type: 'Full Time',
  },
  {
    period: 'Aug 2023 - Nov 2023',
    role: 'Apprentice',
    company: 'Qurinom',
    type: 'Apprenticeship',
  },
];

const Experience = () => {
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
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-purple-300 flex-1 max-w-32"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-black">Since</h2>
            <div className="h-px bg-purple-300 flex-1 max-w-32"></div>
          </div>
          <div className="text-6xl md:text-8xl font-bold text-black">2023</div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl p-6 border border-purple-200 hover:border-purple-300 transition-colors bg-purple-50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1 font-mono">{exp.period}</div>
                  <h3 className="text-2xl font-bold text-black mb-1">{exp.role}</h3>
                  <p className="text-lg text-gray-700">{exp.company}</p>
                </div>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-200 text-purple-800 border border-purple-300">
                  {exp.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

