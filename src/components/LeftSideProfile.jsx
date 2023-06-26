import React, { useState, useEffect } from 'react';
import fbprofile from '../Pictures/fbprofile.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const LeftSideProfile = ({showProfile}) => {
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold as needed for small screens
    };

    handleResize(); // Check initial screen size

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener on component unmount
    };
  }, []);




  return (
    <div className={`w-full sm:w-1/4 lg:w-1/4 h-fit bg-slate-200 mt-1 sticky top-2 rounded-2xl mx-1 p-3 flex font-custom flex-col space-y-4 ${showProfile || !isSmallScreen ?'' : 'hidden'}`}>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h2 className="text-2xl">Saheel</h2>
        <span>Web Developer</span>
      </div>
      {isSmallScreen ? (
        <React.Fragment>
          {showProfile ? (
            <React.Fragment>
              <img src={fbprofile} alt="profileimg" className="w-full rounded-3xl h-1/2 object-cover object-top" />
              <div className="flex flex-col items-center">
                <span>@Coding with saheel</span>
                <span className="-mt-2">Based in Nepal, Kathmandu, etc.</span>
                <small className="text-sm">@all rights reserved</small>
                <div className="flex space-x-2 cursor-pointer mt-4 md:flex-wrap md:space-y-1">
                  <span className="border-2 border-gray-400 p-1 rounded-full"><TwitterIcon style={{ width: "25px", height: "20px" }} /></span>
                  <span className="border-2 border-gray-400 p-1 rounded-full"><InstagramIcon style={{ width: "25px", height: "20px" }} /></span>
                  <span className="border-2 border-gray-400 p-1 rounded-full"><LinkedInIcon style={{ width: "25px", height: "20px" }} /></span>
                  <span className="border-2 border-gray-400 p-1 rounded-full"><GitHubIcon style={{ width: "25px", height: "20px" }} /></span>
                  <span className="border-2 border-gray-400 p-1 rounded-full"><FacebookIcon style={{ width: "25px", height: "20px" }} /></span>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <button className="text-white bg-green-400 absolute top-1 z-20" >
              See Profile
            </button>
          
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img src={fbprofile} alt="profileimg" className="w-full rounded-3xl h-1/2 object-cover object-top" />
          <div className="flex flex-col items-center">
            <span>@Coding with saheel</span>
            <span className="-mt-2">Based in Nepal, Kathmandu, etc.</span>
            <small className="text-sm">@all rights reserved</small>
            <div className="flex space-x-2 cursor-pointer mt-4 md:flex-wrap md:space-y-1">
              <span className="border-2 border-gray-400 p-1 rounded-full hover:border-blue-400 " ><TwitterIcon style={{ width: "25px", height: "20px" }} /></span>
              <span className="border-2 border-gray-400 p-1 rounded-full hover:border-blue-400 " ><InstagramIcon style={{ width: "25px", height: "20px" }} /></span>
              <span className="border-2 border-gray-400 p-1 rounded-full hover:border-blue-400 " ><LinkedInIcon style={{ width: "25px", height: "20px" }} /></span>
              <span className="border-2 border-gray-400 p-1 rounded-full hover:border-blue-400 " ><GitHubIcon style={{ width: "25px", height: "20px" }} /></span>
              <span className="border-2 border-gray-400 p-1 rounded-full hover:border-blue-400 " ><FacebookIcon style={{ width: "25px", height: "20px" }} /></span>
            </div>
          </div>
        </React.Fragment>
      )}
      {isSmallScreen && (
        <button className="bg-green-500 w-full cursor-pointer rounded-md text-center flex items-center justify-center p-2" >
          <span><EmailOutlinedIcon style={{ width: "25px", height: "20px" }} /></span> {showProfile ? 'Hide Profile' : 'Show Profile'}
        </button>
      )}
      {!isSmallScreen && (
        <button className="bg-green-500 w-full cursor-pointer rounded-md text-center flex items-center justify-center p-2">
          <span><EmailOutlinedIcon style={{ width: "25px", height: "20px" }} /></span> Hire me
        </button>
      )}
    </div>
  );
};

export default LeftSideProfile;
