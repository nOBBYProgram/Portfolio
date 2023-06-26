import React, { useState } from 'react'
import Intro from '../Pages/Intro'
import About from '../Pages/About'
import Education from '../Pages/Education'
import Timeline from '../Pages/Timeline'
import Skills from '../Pages/Skills'
import Portfolio from '../Pages/Portfolio'
import Footer from '../Pages/Footer'
import LeftSideProfile from './LeftSideProfile'
import AppsIcon from '@mui/icons-material/Apps';
import Navbar from './Navbar'

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (<>
<button className='absolute top-2 left-3 z-10' onClick={()=>setShowProfile(!showProfile)}><AppsIcon/></button>
    <div className='flex'>
      <LeftSideProfile showProfile={showProfile}/>
    <div className='w-full sm:w-3/4  bg-slate-300  '>
      <Navbar/>
      <Intro setShowProfile={setShowProfile}/>
 <About/>
 <Education/>
 <Timeline/>
 <Skills/>
 <Portfolio/>
 <Footer/>
    </div>
    </div>
    </>
  )
}

export default Home
