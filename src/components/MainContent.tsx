import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTab } from '../contexts/TabContext';
import Experience from './Experience';
import About from './About';
import Services from './Services';
import TechStack from './TechStack';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';
import PixelatedReveal from './PixelatedReveal';

const projects = [
  {
    title: 'NewsApp',
    description: 'A modern news aggregation application',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
    hoverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
  },
  {
    title: 'PopcornPal',
    description: 'Movie discovery and recommendation platform',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
    hoverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800',
  },
];

const MainContent = () => {
  const { activeTab } = useTab();
  
  // Calculate approximate line count for line numbers - matches actual content length
  const totalLines = activeTab === 'sriya.info' ? 318 : activeTab === 'work.done' ? 50 : 30;

  return (
    <main className="flex-1 min-w-0 relative">
      {/* Line Numbers Container - extends from top to bottom */}
      <div className="fixed left-64 top-8 bottom-8 w-10 z-10" style={{ backgroundColor: '#1C1C04' }}>
        {/* Left border line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800"></div>
        {/* Right border line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-800"></div>
        <div className="text-xs font-mono pt-4 pb-4 space-y-1 h-full overflow-y-auto" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          {Array.from({ length: totalLines }, (_, i) => (
            <div key={i} className="text-right pr-2">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

          <div className="pl-14 pr-8 pt-4 pb-8">
        {activeTab === 'sriya.info' && (
          <>
            {/* Hero Section */}
            <section id="home" className="mb-16">
              <div className="text-xs italic mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* Hero section */</div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-6xl font-bold mb-6">
                  <span className="text-white">Creative Full Stack</span>{' '}
                  <span className="text-gray-300">Developer</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  As a user-centric developer, I create visually refined, highly functional digital experiences
                  that transform ideas into meaningful interactions.
                </p>
              </motion.div>
            </section>

            {/* Experience Section */}
            <div className="mb-16 pt-16">
              <div className="text-xs italic mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* Experience section */</div>
              <Experience />
            </div>

            {/* About Section */}
            <div className="mb-16 pt-16">
              <div className="text-xs italic mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* About section */</div>
              <About />
            </div>

            {/* Services Section */}
            <div className="mb-16 pt-16">
              <div className="text-xs italic mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* Services section */</div>
              <Services />
            </div>

            {/* Tech Stack Section */}
            <div className="mb-16 pt-16">
              <div className="text-xs italic mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* Tech stack section */</div>
              <TechStack />
            </div>

            {/* Testimonials Section */}
            <div className="mb-16 pt-16">
              <div className="text-xs italic mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* Testimonials section */</div>
              <Testimonials />
            </div>

            {/* Contact Section */}
            <div className="mb-16 pt-16">
              <div className="text-xs italic mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* Contact section */</div>
              <Contact />
            </div>
          </>
        )}

        {activeTab === 'work.done' && (
          <section id="work" className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs italic" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* Featured work */</div>
              <div className="flex gap-2">
                <button className="w-6 h-6 border border-gray-700 rounded hover:bg-gray-800 transition"></button>
                <button className="w-6 h-6 border border-gray-700 rounded hover:bg-gray-800 transition"></button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition">
                      {project.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition" />
                  </div>
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-2 relative group/image">
                    <PixelatedReveal image={project.image} hoverImage={project.hoverImage} alt={project.title} gridSize={25} />
                  </div>
                  <p className="text-xs text-gray-500">Delivered 2 projects, tackled multiple challenges</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'blog.share' && (
          <div className="mb-16 pt-16">
            <div className="text-xs italic mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>/* Blog section */</div>
            <Blog />
          </div>
        )}
        </div>
    </main>
  );
};

export default MainContent;
