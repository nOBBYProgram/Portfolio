import React, { useState } from 'react';
import project from '../Datas';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(false);
  };

  return (
    <div id='projects' className='flex flex-col py-7 px-5 sm:px-10 md:px-20 lg:px-52 space-y-7'>
      <span className='border rounded-full uppercase w-fit flex items-center px-2 py-1 text-sm'>
        <DocumentScannerIcon style={{ width: '20px', height: '20px' }} /> Portfolio
      </span>
      <div className='flex flex-col text-xl sm:text-xl md:text-2xl uppercase font-custom'>
        <span className='w-full sm:w-3/4'>
          Featured <small className='text-2xl text-green-500'>Projects</small>
        </span>
      </div>
      <div className='grid grid-cols-1 gap-7 sm:grid-cols-2'>
        {project.map((item, index) => (
          <div
            key={index}
            className={`col-span-1 ${index === 0 || index === 3 ? 'sm:col-span-2' : ''} hover:opacity-70 `}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className='relative font-custom'>
              <img
                src={item.img}
                alt={`Image ${index + 1}`}
                className={`w-full h-full object-cover rounded-xl object-left ${
                  index === 0 || index === 3 ? 'col-span-2' : ''
                }`}
              />
              <button className='absolute bottom-1 bg-sky-300 px-2 py-1 rounded-lg left-2'>
                <GitHubIcon /> GitHub
              </button>
              {hoveredIndex === index && (
                <button className={`top-1/3 px-3 py-1 absolute left-1/4 sm:1/3 ${index === 0 || index=== 3 ? 'sm:left-72': ''} rounded-3xl text-2xl bg-slate-200 hover:text-blue-300`}><VisibilityOutlinedIcon/>View Site</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
