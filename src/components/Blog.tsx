import { motion } from 'framer-motion';
import blogsImage from '../assets/blogs.png';
import casualThoughtsImage from '../assets/casualThoughts.png';

const Blog = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">From My Development Desk</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.a
            href="https://www.notion.so/2a8973f8aeda802ba804cd5dd99bd3de?v=2a8973f8aeda80e98729000ce8154106&source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer group block"
            style={{ backgroundColor: '#1C1C04' }}
          >
            <img
              src={blogsImage}
              alt="Sriya's Blogs"
              className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
            />
          </motion.a>

          <motion.a
            href="https://www.notion.so/2a8973f8aeda80b584c0fe0a7e808844?v=2a8973f8aeda8034b023000c89ef2a6d&source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer group block"
            style={{ backgroundColor: '#1C1C04' }}
          >
            <img
              src={casualThoughtsImage}
              alt="Casual Thoughts"
              className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Blog;

