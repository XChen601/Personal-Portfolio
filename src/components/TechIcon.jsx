import React from 'react';

const TechnologyIcon = ({ icon }) => {
  return (
    <div className="rounded-lg p-2 bg-white border border-gray-300 transform hover:-translate-y-1 hover:border-gray-500 transition duration-300">
      <img src={icon} alt="Technology Icon" className="h-12 w-12 mx-auto" />
    </div>
  );
};

export default TechnologyIcon;
