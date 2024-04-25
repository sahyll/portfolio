import Link from 'next/link'
import React from 'react'
import { MovingBorderBtn } from './ui/moving-border'
import Title from './Title'

const HeroSection = () => {
  return (
    <div  className='min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between px-5 animate-move-up'>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold leading-[1.2]'>
                Hey there! 👋
                <br />
                <span className='underline underline-offset-8 decoration-red-600'>{"Sahil here"}</span> 
                <span className='lg:text-5xl text-2xl relative lg:top-[-0.5rem] top-[-0.2rem]'>{ " :)"} </span>
                
               
            </h1>
            <p className='md:w-96 text-lg text-gray-300'>
                {"Based in Bangalore, I'm a Fullstack Developer passionate about building modern web applications that users love 🚀"}
            </p>
            
            
            <Link className="group inline-block" href={"mailto:mohdasahil28@gmail.com"}>
                <Title 
                    text="Contact Me 📭"
                />

            </Link>

           
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='items-center justify-center relative'>
                <div className='h-72 w-72 space-y-3 -rotate-[20deg]'>
                    <div className='flex translate-x-8 relative'>
                        <img src='/sippin.png' className='mx-auto ml-[-30px]'/>
                    </div>
                    <div className='glow absolute top-[47%] right-[45%] -z-10'>

                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default HeroSection