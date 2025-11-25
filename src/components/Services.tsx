import { motion } from 'framer-motion';

const services = [
  {
    title: '1. Frontend Development',
    items: [
      'React.js & Next.js',
      'TypeScript & JavaScript',
      'Tailwind CSS & Styled Components',
      'Responsive & Mobile-first Design',
      'UI/UX Implementation',
      'Performance Optimization',
    ],
  },
  {
    title: '2. Backend Development',
    items: [
      'Node.js & Express',
      'RESTful API Development',
      'Database Design & Management',
      'Authentication & Authorization',
      'Server-side Optimization',
      'API Integration',
    ],
  },
  {
    title: '3. Full Stack Solutions',
    items: [
      'End-to-end Development',
      'Clean, Scalable Architecture',
      'Version Control (Git/GitHub)',
      'Testing & Debugging',
      'Deployment & DevOps',
      'Code Review & Best Practices',
    ],
  },
];

const Services = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">What I Do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors"
              style={{ backgroundColor: '#1C1C04' }}
            >
              <h3 className="text-xl font-bold text-gray-200 mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                    <span className="mt-1" style={{ color: '#EDEDA8' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

