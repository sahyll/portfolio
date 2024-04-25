import React from 'react'
import {socials} from '../Links/index';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar = ({className}: {className?:string}) => {
  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Mohd A Sahil
            <span className='text-3xl py-2 rotate-2'>
            🥤
            </span>
        </h1>
        <div className='flex items-center gap-5'>
        +91 9341424326
            
            {socials.map((social, index)=>{
                const Icon = social.icon;
                return (
                    <Link
                    href={social.link}
                    key={index}
                    aria-label={social.label}
                    >
                        <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                    </Link>
                );
            
            })}
        </div>
    </nav>
  )
}

export default Navbar