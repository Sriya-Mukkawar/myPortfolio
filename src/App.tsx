import { useEffect } from 'react';
import { TabProvider, useTab } from './contexts/TabContext';
import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import MainContent from './components/MainContent';
import IndexSidebar from './components/IndexSidebar';
import BottomBar from './components/BottomBar';

function AppContent() {
  const { activeTab } = useTab();

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <Navbar />
      <div className="flex pt-8 h-[calc(100vh-2rem)]">
        <ProfileSidebar />
        <div className="flex-1 min-w-0 overflow-y-auto pb-8" style={{ backgroundColor: '#1C1C04' }}>
          <MainContent />
        </div>
        {activeTab === 'sriya.info' && <IndexSidebar />}
      </div>
      <BottomBar />
    </div>
  );
}

function App() {
  return (
    <TabProvider>
      <AppContent />
    </TabProvider>
  );
}

export default App;
