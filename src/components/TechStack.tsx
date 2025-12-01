import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', iconName: 'react', color: '61DAFB' },
  { name: 'TypeScript', iconName: 'typescript', color: '3178C6' },
  { name: 'Node.js', iconName: 'nodedotjs', color: '339933' },
  { name: 'MongoDB', iconName: 'mongodb', color: '47A248' },
  { name: 'Python', iconName: 'python', color: '3776AB' },
  { name: 'AWS', iconName: 'amazonaws', color: 'FF9900', customUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'MySQL', iconName: 'mysql', color: '4479A1' },
  { name: 'Apollo GraphQL', iconName: 'apollographql', color: '311C87' },
];

const TechStack = () => {
  return (
    <div id="tech-stack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">My Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="rounded-xl p-4 text-center border border-blue-200 hover:border-blue-300 transition-all bg-blue-50 cursor-pointer group"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 mb-3 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={tech.customUrl || `https://cdn.simpleicons.org/${tech.iconName}/${tech.color}`}
                    alt={tech.name}
                    className="w-full h-full object-contain transition-transform group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to colored version if custom URL fails
                      if (tech.customUrl) {
                        e.currentTarget.src = `https://cdn.simpleicons.org/${tech.iconName}/${tech.color}`;
                      }
                    }}
                  />
                </div>
                <div className="text-sm font-semibold text-black font-mono">{tech.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

