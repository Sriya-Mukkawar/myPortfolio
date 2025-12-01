import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTab } from '../contexts/TabContext';
import Experience from './Experience';
import About from './About';
import TechStack from './TechStack';
import Blog from './Blog';
import Contact from './Contact';
import ProjectImage from './ProjectImage';
import FunShare from './FunShare';

// Import project images
import popcorn1 from '../assets/popcorn1.png';
import popcorn2 from '../assets/popcorn2.png';
import popcorn3 from '../assets/popcorn3.png';
import popcorn4 from '../assets/popcorn4.png';
import newsapp1 from '../assets/Newsapp1.jpeg';
import newsapp2 from '../assets/Newsapp2.jpeg';
import newsapp3 from '../assets/Newsapp3.jpeg';
import newsapp4 from '../assets/Newsapp4.jpeg';
import newsapp5 from '../assets/Newsapp5.jpeg';
import newsapp6 from '../assets/Newsapp6.jpeg';
import newsapp7 from '../assets/Newsapp7.jpeg';
import newsapp8 from '../assets/Newsapp8.jpeg';
import newsapp9 from '../assets/Newsapp9.jpeg';

const projects = [
  {
    title: 'NewsApp',
    description: 'A modern news aggregation application',
    category: 'Full Stack',
    images: [newsapp1, newsapp2, newsapp3, newsapp4, newsapp5, newsapp6, newsapp7, newsapp8, newsapp9],
  },
  {
    title: 'PopcornPal',
    description: 'Movie discovery and recommendation platform',
    category: 'Frontend',
    images: [popcorn1, popcorn2, popcorn3, popcorn4],
  },
];

const MainContent = () => {
  const { activeTab } = useTab();
  
  // Calculate approximate line count for line numbers - matches actual content length
  const totalLines = activeTab === 'sriya.info' ? 318 : activeTab === 'work.done' ? 50 : activeTab === 'blog.share' ? 30 : activeTab === 'type.fun' ? 100 : 30;

  return (
    <main className="flex-1 min-w-0 relative bg-white">
      {/* Line Numbers Container - extends from top to bottom - hidden on mobile */}
      <div className="hidden lg:block fixed left-64 top-8 bottom-8 w-10 z-10 bg-white">
        {/* Left border line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200"></div>
        {/* Right border line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-blue-200"></div>
        <div className="text-xs font-mono pt-4 pb-4 space-y-1 h-full overflow-y-auto" style={{ color: '#2563eb' }}>
          {Array.from({ length: totalLines }, (_, i) => (
            <div key={i} className="text-right pr-2">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

          <div className="pl-4 lg:pl-14 pr-4 lg:pr-8 pt-4 pb-8 bg-white">
        {activeTab === 'sriya.info' && (
          <>
            {/* Hero Section */}
            <section id="home" className="mb-8">
              <div className="text-xs italic mb-4 font-mono" style={{ color: '#2563eb' }}>/* Hero section */</div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="text-black">Creative Full Stack</span>{' '}
                  <span className="text-black">Developer</span>
                </h1>
                <p className="text-black text-lg leading-relaxed max-w-2xl">
                  As a user-centric developer, I create visually refined, highly functional digital experiences
                  that transform ideas into meaningful interactions.
                </p>
              </motion.div>
            </section>

            {/* Experience Section */}
            <div className="mb-8 pt-8">
              <div className="text-xs italic mb-4 font-mono" style={{ color: '#2563eb' }}>/* Experience section */</div>
              <Experience />
            </div>

            {/* About Section */}
            <div className="mb-8 pt-8">
              <div className="text-xs italic mb-4 font-mono" style={{ color: '#2563eb' }}>/* About section */</div>
              <About />
            </div>

            {/* Tech Stack Section */}
            <div className="mb-8 pt-8">
              <div className="text-xs italic mb-4 font-mono" style={{ color: '#2563eb' }}>/* Tech stack section */</div>
              <TechStack />
            </div>

            {/* Contact Section */}
            <div className="mb-8 pt-8">
              <div className="text-xs italic mb-4 font-mono" style={{ color: '#2563eb' }}>/* Contact section */</div>
              <Contact />
            </div>
          </>
        )}

        {activeTab === 'work.done' && (
          <section id="work" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs italic font-mono" style={{ color: '#2563eb' }}>/* Featured work */</div>
              <div className="flex gap-2">
                <button className="w-6 h-6 border border-blue-300 rounded hover:bg-blue-100 transition"></button>
                <button className="w-6 h-6 border border-blue-300 rounded hover:bg-blue-100 transition"></button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* NewsApp - left column */}
              <motion.div
                key={projects[0].title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="group"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-black group-hover:text-gray-800 transition">
                    {projects[0].title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-blue-800 transition" />
                </div>
                <div className="w-full bg-blue-50 rounded-lg overflow-hidden mb-2 relative group/image border border-blue-200 flex items-center justify-center min-h-[200px] md:min-h-[250px] max-h-[300px] md:max-h-[350px]">
                  <ProjectImage images={projects[0].images} alt={projects[0].title} />
                </div>
              </motion.div>
              {/* Empty spacer - right column */}
              <div></div>
              {/* PopcornPal - left column, second row */}
              <motion.div
                key={projects[1].title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-black group-hover:text-gray-800 transition">
                    {projects[1].title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-blue-800 transition" />
                </div>
                <div className="w-full bg-blue-50 rounded-lg overflow-hidden mb-2 relative group/image border border-blue-200 flex items-center justify-center min-h-[200px] md:min-h-[250px] max-h-[300px] md:max-h-[350px]">
                  <ProjectImage images={projects[1].images} alt={projects[1].title} />
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {activeTab === 'blog.share' && (
          <div className="mb-16 pt-16">
            <div className="text-xs italic mb-4 font-mono" style={{ color: '#2563eb' }}>/* Blog section */</div>
            <Blog />
          </div>
        )}

        {activeTab === 'type.fun' && (
          <div className="mb-16 pt-16">
            <div className="text-xs italic mb-4 font-mono" style={{ color: '#2563eb' }}>/* Fun share section */</div>
            <FunShare />
          </div>
        )}
        </div>
    </main>
  );
};

export default MainContent;
