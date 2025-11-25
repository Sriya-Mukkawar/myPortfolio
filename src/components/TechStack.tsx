import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', percentage: 85 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'Node.js', percentage: 75 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'Tailwind CSS', percentage: 88 },
  { name: 'Git/GitHub', percentage: 85 },
  { name: 'MongoDB', percentage: 70 },
  { name: 'Express.js', percentage: 75 },
  { name: 'Next.js', percentage: 72 },
  { name: 'Python', percentage: 65 },
  { name: 'PostgreSQL', percentage: 68 },
  { name: 'REST APIs', percentage: 82 },
];

const TechStack = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">My Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl p-6 text-center border border-gray-800 hover:border-gray-700 transition-colors"
              style={{ backgroundColor: '#1C1C04' }}
            >
              <div className="text-2xl font-bold text-gray-200 mb-2">{tech.name}</div>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="h-2 rounded-full"
                  style={{ backgroundColor: '#EDEDA8' }}
                />
              </div>
              <div className="text-sm font-semibold text-gray-400">{tech.percentage}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

