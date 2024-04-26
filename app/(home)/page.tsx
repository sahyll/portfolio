"use client";

import React,{useRef} from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Footer from './components/footer';
import Projects from './components/Projects';

const Page = () => {
  const proRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleTopClick = () => {
    if (navRef && navRef.current) {
      const padding = 20; // Adjust the padding value as needed
      const topOffset = navRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: topOffset - padding, behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
        <div className='max-w-7xl mx-auto p-5'>
          <div ref={navRef}>
          <Navbar projectRef={proRef} skillsRef={skillRef}/>
          </div>
          <div>
          <HeroSection projectRef={proRef} skillsRef={skillRef}/>
          </div>
        </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full z-10'></div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <div ref={skillRef} id="skills">
        <Skills />
        </div>
        <div ref={proRef} id="projects">
        <Projects />
        </div>
        <div className='flex items-center justify-center p-4 mt-6'>
          <button
            className=" animate-bounce hover:bg-indigo-300 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            data-ripple-light="true"
            onClick={handleTopClick}
          >    🔼 
          </button>
        </div>
        <Footer />
        
        
      </div>
    </div>
  );
};

export default Page;
