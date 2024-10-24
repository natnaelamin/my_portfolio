import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div 
    style={{background: "url(/mountains.jpg)"}}
    className='w-screen h-screen flex items-center justify-center bg-cover bg-center'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[75%]'>
        {Projects.map((project, index) =>(
            <ProjectCard 
            key={index}
            title={project.title}
            image={project.src}
            text={project.text}
            />
        ))}
      </div>
    </div>
  )
}

export default Page
