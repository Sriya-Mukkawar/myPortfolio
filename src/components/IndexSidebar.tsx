import { motion } from 'framer-motion';

const IndexSidebar = () => {
  const navItems = [
    'Career Journey',
    'About me',
    'Tech stack',
    'Contact me',
  ];

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0 border-l border-blue-200 p-8 h-full overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="h-full"
      >
        <h3 className="text-lg font-bold text-black mb-6 font-mono">Index</h3>
        <nav className="space-y-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-').replace("'", '')}`}
              className="block text-black hover:text-blue-600 transition text-sm font-mono hover:translate-x-1"
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>
    </aside>
  );
};

export default IndexSidebar;

