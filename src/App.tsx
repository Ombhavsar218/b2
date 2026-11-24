import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LightboxProvider } from './context/LightboxContext';
import { Lightbox } from './components/Lightbox';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AudioToggle } from './components/AudioToggle';
import { ScrollToTop } from './components/ScrollToTop';
import { PageTransition } from './components/PageTransition';
import { Sparkles } from 'lucide-react';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Message = lazy(() => import('./pages/Message').then(m => ({ default: m.Message })));
const Memories = lazy(() => import('./pages/Memories').then(m => ({ default: m.Memories })));
const ThingsYouLove = lazy(() => import('./pages/ThingsYouLove').then(m => ({ default: m.ThingsYouLove })));
const RoadAhead = lazy(() => import('./pages/RoadAhead').then(m => ({ default: m.RoadAhead })));
const FinalWish = lazy(() => import('./pages/FinalWish').then(m => ({ default: m.FinalWish })));

const CelestialLoader: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3">
    <div className="relative flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border border-[#B9A9FF]/30 border-t-[#B9A9FF] animate-spin" />
      <Sparkles className="w-4 h-4 text-[#E8D5A5] absolute" />
    </div>
    <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/50">
      Loading Universe...
    </span>
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<CelestialLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/message"
            element={
              <PageTransition>
                <Message />
              </PageTransition>
            }
          />
          <Route
            path="/memories"
            element={
              <PageTransition>
                <Memories />
              </PageTransition>
            }
          />
          <Route
            path="/things-you-love"
            element={
              <PageTransition>
                <ThingsYouLove />
              </PageTransition>
            }
          />
          <Route
            path="/road-ahead"
            element={
              <PageTransition>
                <RoadAhead />
              </PageTransition>
            }
          />
          <Route
            path="/final-wish"
            element={
              <PageTransition>
                <FinalWish />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export function App() {
  return (
    <LightboxProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0B1026] text-[#F5F4FF] selection:bg-[#B9A9FF]/30 selection:text-white">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
          <AudioToggle />
          <Lightbox />
        </div>
      </Router>
    </LightboxProvider>
  );
}

export default App;
