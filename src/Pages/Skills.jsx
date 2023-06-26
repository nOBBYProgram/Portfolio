import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import skills from '../SkillData';
const Skills = () => {
  return (
    <div id='skills' className='flex flex-col py-7 px-5 sm:px-10 md:px-20 lg:px-52 space-y-7'>
    <span className='border rounded-full uppercase w-fit flex items-center px-2 py-1 text-sm'>
      <ManageSearchIcon style={{ width: '20px', height: '20px' }} /> My skills
    </span>
    <div className='flex flex-col text-xl sm:text-xl md:text-2xl uppercase font-custom'>
      
      <span className='w-full sm:w-3/4'>My <small className='text-2xl text-green-500'>Advantages</small></span>
    </div>
    <div className='flex flex-wrap gap-6 justify-start font-custom'>
  {skills.map((skill)=>(<div className='flex flex-col cursor-pointer items-center space-y-2' key={skill.id}>
    <div className='border-2 border-black hover:border-green-400  w-28 rounded-full px-5 space-y-2 flex flex-col items-center py-4'>
    <img src={skill.img} className='w-14 h-14 object-cover rounded-xl' alt="" />
    <span className='text-2xl text-green-500'>{skill.percentage}</span>
    </div>
    <small className='text-xl'>{skill.title}</small>
</div>))} 
    </div>
    </div>
  )
}

export default Skills
