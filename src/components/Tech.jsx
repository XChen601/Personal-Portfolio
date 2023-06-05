import React from 'react'
import { technologies } from "../constants";
import TechnologyIcon from './TechIcon';

const Tech = () => {
    return (
      <div className='flex flex-row flex-wrap justify-center gap-10 my-10'>
        {technologies.map((technology) => (
          <div className='w-25 h-25' key={technology.name}>
            <TechnologyIcon icon={technology.icon} />
          </div>
        ))}
      </div>
    );
  };

export default Tech