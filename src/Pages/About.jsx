import React from 'react'
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
const About = () => {
  return (
    <div id='about' className='flex flex-col py-7 px-5 sm:px-10 md:px-20 lg:px-52 space-y-7'>
    <span className='border rounded-full uppercase w-fit flex items-center px-2 py-1 text-sm'>
      <Person3OutlinedIcon style={{ width: '20px', height: '20px' }} /> About
    </span>
    <div className='flex flex-col text-xl sm:text-3xl md:text-2xl uppercase font-custom'>
      
      <span className='w-full sm:w-3/4'>Accomplished Developer: Showcasing Remarkable Projects</span>
    </div>
    <span className='font-custom'>Throughout my journey as a developer, I have had the privilege of working on some exceptional projects that have pushed the boundaries of what is possible. These projects have not only showcased my technical skills but also demonstrated my ability to deliver outstanding results.</span>
  </div>
  )
}

export default About
