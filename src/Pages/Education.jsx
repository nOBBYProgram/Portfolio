import React from 'react'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
const Education = () => {
  return (
    <div id='resume' className='flex flex-col py-7 px-5 sm:px-10 md:px-20 lg:px-52 space-y-7'>
    <span className='border rounded-full uppercase w-fit flex items-center px-2 py-1 text-sm'>
      <EventNoteOutlinedIcon style={{ width: '20px', height: '20px' }} /> Resume
    </span>
    <div className='flex flex-col text-xl sm:text-xl md:text-2xl uppercase font-custom'>
      
      <span className='w-full sm:w-3/4'>Education & <small className='text-green-500 text-2xl'>Experience</small></span>
    </div>
    </div>
  )
}

export default Education
