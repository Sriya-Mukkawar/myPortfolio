import { useEffect } from 'react';
import { TabProvider, useTab } from './contexts/TabContext';
import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import MainContent from './components/MainContent';
import IndexSidebar from './components/IndexSidebar';
import BottomBar from './components/BottomBar';
import CustomCursor from './components/CustomCursor';

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
    <div className="min-h-screen bg-white text-black">
      <CustomCursor />
      <Navbar />
      <div className="flex pt-8 h-[calc(100vh-2rem)]">
        <ProfileSidebar />
        <div className="flex-1 min-w-0 overflow-y-auto pb-8 bg-white">
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
