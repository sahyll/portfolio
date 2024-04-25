import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='border-t mt-10 flex flex-col items-center justify-center'>
        <Navbar className='flex-col gap-5'/>
        <p>© {currentYear}</p>
    </div>
  )
}

export default Footer