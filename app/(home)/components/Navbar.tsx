import React from 'react';
import { socials } from '../Links/index';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar = ({ className, projectRef, skillsRef }: { className?: string; projectRef?: React.RefObject<HTMLDivElement>; skillsRef?: React.RefObject<HTMLDivElement> }) => {
    const handleProjectsClick = () => {
        if (projectRef && projectRef.current) {
          const padding = 20; // Adjust the padding value as needed
          const topOffset = projectRef.current.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: topOffset - padding, behavior: 'smooth' });
        }
      };
      const handleSkillsClick = () => {
        if (skillsRef && skillsRef.current) {
          const padding = 20; // Adjust the padding value as needed
          const topOffset = skillsRef.current.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: topOffset - padding, behavior: 'smooth' });
        }
      };
      

  return (
    <nav className={cn('py-5 flex justify-between items-center animate-move-down', className)}>
      <h1 className='lg:text-2xl sm:text-sm font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
        Mohd A Sahil
        <span className='lg:text-3xl sm:text-xl py-2 rotate-2'>🥤</span>
      </h1>
      <div className='hidden lg:flex mr-10 mt-5 items-center gap-5 pl-14'>
        <h1 className='mb-1 text-lg font-semibold'>{"{Sections}"}</h1>
        <div className='flex gap-6 '>
          <button
            onClick={handleProjectsClick}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Projects
          </button>
          <button 
          onClick={handleSkillsClick}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Skills
          </button>
        </div>
      </div>
      <div className="hidden lg:flex mt-3 ml-8">+91 9341424326</div>
      <div className='flex flex-col'>
      
      <div className='flex items-center gap-5 mt-2'>
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className='w-5 h-5 ml-2 hover:scale-125 transition-all' />
            </Link>
          );
        })}
      </div>
      <div className="mt-2 lg:hidden  overline  decoration-green-500">+91 9341424326</div>
      </div>
    </nav>
  );
};

export default Navbar;
