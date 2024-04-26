import React from 'react'

const Title = ({text, className,width, boxClass1,boxClass2}:{text:string, className?: string, boxClass1?:string, boxClass2?:string, width?:string}) => {
  return (
    <div className={className}>
                   <h1 className='text-3xl font-bold group-hover:text-indigo-500 transition-all'>
                    {text}
                    </h1> 
                    <div className={`${width} h-2 bg-underline-red rounded-full ${boxClass1}`}>

                    </div>
                    <div className={`${width} h-2 bg-indigo-500 rounded-full ${boxClass2}`}>

                    </div>
    </div>
  )
}

export default Title