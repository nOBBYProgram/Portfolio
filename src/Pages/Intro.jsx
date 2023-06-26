import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Intro = () => {
  return (
    <div id='intro' className='flex flex-col py-7 px-5 sm:px-10 md:px-20 lg:px-52 space-y-7'>
      <span className='border rounded-full uppercase w-fit flex items-center px-2 py-1 text-sm'>
        <HomeOutlinedIcon style={{ width: '20px', height: '20px' }} /> Introduce
      </span>
      <div className='flex flex-col text-2xl sm:text-3xl md:text-4xl uppercase font-custom'>
        <span>Hi! I'm <small className='text-2xl sm:text-3xl md:text-4xl text-sky-400'>Saheel</small></span>
        <span className=' sm:w-3/4'>a full stack responsive web Developer</span>
      </div>
      <span className='font-custom'>I excel in creating intuitive user experiences and delivering efficient solutions that meet client requirements.</span>
    </div>
  );
};

export default Intro;
