

import Link from 'next/link'
import React from 'react'
import { MovingBorderBtn } from './ui/moving-border'
import Title from './Title'

import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
 
export function TailwindcssButtons() {
  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.component);
 
    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };
 
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
  return (
    <div className="pb-40 px-4 w-full">
      <Toaster position="top-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-7xl mx-auto gap-10">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => copy(button)}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}

export const buttons = [
  {
    name: "Shimmer",
    description: "Shimmer button for your website",
    showDot: false,
    component: (
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Shimmer
      </button>
    ),
  },
];


const HeroSection = ({projectRef, skillsRef }: {projectRef?: React.RefObject<HTMLDivElement>; skillsRef?: React.RefObject<HTMLDivElement> }) => {
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
    <div className='min-h-[80vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between px-5 animate-move-up'>
      <div className='space-y-10 text-center lg:text-left flex flex-col'>
        <h1 className='text-4xl lg:text-7xl font-bold leading-[1.2]'>
          Hey there! 👋
          <br />
          <span className='underline underline-offset-8 decoration-red-600'>{"Sahil here"}</span> 
          <span className='cursor-cell lg:text-5xl text-2xl relative lg:top-[-0.5rem] top-[-0.2rem] hover:text-indigo-600 transition-all'>{ " :)"}</span>
        </h1>
        <p className='md:w-96 text-lg text-gray-300 relative'>
          {"Based in Bangalore, I'm a Fullstack Developer passionate about building modern web applications that users love 🚀"}
        </p>

        <div className='flex flex-col mt-5 lg:mt-0 gap-5 items-center lg:items-start '>
          <Link className="group inline-block w-fit" href={"mailto:mohdasahil28@gmail.com"}>
            <Title text="Contact Me 📭" boxClass2='translate-x-2' width="w-40" />
          </Link>
          <Link className="group inline-block w-fit" href="/Resume.pdf" download="Resume">
            <Title text="Resume ⬇️" boxClass1='translate-x-2' width="w-[110px]" />
          </Link>
          <div className='lg:hidden flex flex-col mr-10 mt-5'>
          <h1>{"{Sections}"}</h1>
          <div className='flex gap-6 mt-5'>
            <button onClick={handleProjectsClick} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Projects
            </button>
            <button onClick={handleSkillsClick} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Skills
            </button>
          </div>
        </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div className='items-center justify-center relative'>
          <div className='h-72 w-72 space-y-3 -rotate-[20deg]'>
            <div className='flex translate-x-8 relative'>
              <img src='/sippin.png' className='mx-auto ml-[-30px]' />
            </div>
            <div className='glow absolute top-[47%] right-[45%] -z-10'></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection
