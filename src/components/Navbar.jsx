import React from 'react'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className={`flex sm:flex-col border sm:right-8 sm:top-1/4 border-gray-800 gap-4 sm:p-3 rounded-3xl w-fit   sm:fixed top-9 p-1 ml-5 relative z-20`}>
      <Link to='intro' smooth={true} duration={500} className='hover:text-sky-500 cursor-pointer'>
        <HomeOutlinedIcon />
      </Link>
      <Link to='about' smooth={true} duration={500} className='hover:text-sky-500 cursor-pointer'>
        <Person3OutlinedIcon />
      </Link>
      <Link to='resume' smooth={true} duration={500} className='hover:text-sky-500 cursor-pointer'>
        <EventNoteOutlinedIcon />
      </Link>
      <Link to='skills' smooth={true} duration={500} className='hover:text-sky-500 cursor-pointer'>
        <ManageSearchIcon />
      </Link>
      <Link to='projects' smooth={true} duration={500} className='hover:text-sky-500 cursor-pointer'>
        <DocumentScannerIcon />
      </Link>
      <Link to='contact' smooth={true} duration={500} className='hover:text-sky-500 cursor-pointer'>
        <MailOutlineIcon />
      </Link>
    </div>
  )
}

export default Navbar
