import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div id='contact' className='flex flex-col py-7 font-custom px-5 sm:px-10 md:px-20 lg:px-52 space-y-7'>
      <span className='border rounded-full uppercase w-fit flex items-center px-2 py-1 text-sm'>
        <MailOutlineIcon style={{ width: '20px', height: '20px' }} /> Contact
      </span>
      <div className='flex flex-col text-xl sm:text-xl md:text-2xl uppercase font-custom'>
        <span className='w-full sm:w-3/4'>Let's work <small className='text-2xl text-green-500'>Together</small></span>
        <small>@codingwihtsaheel</small>
      </div>
      <label htmlFor='' className='flex flex-col text-xl'>
        <small>FullName</small>
        <input
          type='text'
          placeholder='FullName...'
          className='border-b border-black bg-slate-300 outline-none px-4 w-full sm:w-3/4'
        />
      </label>
      <label htmlFor='' className='flex flex-col text-xl'>
        <small>Email</small>
        <input
          type='text'
          placeholder='Email...'
          className='border-b border-black bg-slate-300 outline-none px-4 w-full sm:w-3/4'
        />
      </label>
      <label htmlFor='' className='flex flex-col text-xl'>
        <small>Message</small>
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          className='border-b border-black bg-slate-300 outline-none px-4 w-full sm:w-3/4 h-36'
          placeholder='Write your message here...'
        ></textarea>
      </label>
      <button className='bg-green-400 px-3 py-2 rounded-xl w-fit'>Send Message</button>
    </div>
  );
};

export default Footer;
