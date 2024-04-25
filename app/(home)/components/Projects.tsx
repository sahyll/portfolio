import React from 'react'
import Title from './Title'
import { projects } from '../Links'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='py-10 p-5 sm:p-0'>
      
      <Title 
          text="Projects 🎨"
          className='flex flex-col items-center justify-center rotate-6'
        />

      <div className='grid sm:grid-cols-2 grid-cols-1 pt-20 gap-5'>
        {projects.map((project,index)=>{
          console.log(project.background)
          return (
          <Link 
            href={project.Link}
            key={index}
          >
              <div 
                style={{ backgroundColor: `${project.background}`} }
              
                className={`p-5 rounded-md`}>
                
                <DirectionAwareHover
                  imageUrl={project.cover}
                  childrenClassName='bg-slate-800 p-3 rounded-2xl opacity-75 '
                  className='w-full space-y-5 cursor-pointer '>
                <div className='space-y-5'>
                  <h1 className='lg:text-2xl text-sm font-bold'> {project.title}</h1>
                  <div className='flex items-center gap-5'>
                    {project.tech.map((Icon, index)=>{
                      return <Icon className='w-8 h-8' key={index} />
                    })}
                  </div>
                  </div>
                </DirectionAwareHover>
              </div>


            </Link>
          );

        })}
      </div>
    </div>
  )
}

export default Projects