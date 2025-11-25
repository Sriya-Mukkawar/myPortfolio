import { motion } from 'framer-motion';

const IndexSidebar = () => {
  const navItems = [
    'Work',
    'About me',
    'What I do',
    'Tech stack',
    'Awards',
    "Client's word",
    'Blog',
    'Contact me',
  ];

  return (
    <aside className="w-64 flex-shrink-0 border-l border-gray-800 p-8 h-full overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="h-full"
      >
        <h3 className="text-lg font-bold text-gray-300 mb-6">Index</h3>
        <nav className="space-y-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-').replace("'", '')}`}
              className="block text-gray-400 hover:text-gray-200 transition text-sm"
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

