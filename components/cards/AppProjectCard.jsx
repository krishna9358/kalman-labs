import React from 'react';
import Image from 'next/image';

import arrow from '../../public/images/arrow.svg';

const AppProjectCard = ({ title, imageSrc, projectName }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-[25rem] w-full mb-4">
        {/* Set the image size to be smaller */}
        <Image
          src={imageSrc}
          alt={title}
          layout="fill" 
          objectFit="cover"
          className="scale-90 h-full" // Scale down the image to 90%
        />
      </div>
      <div className="flex justify-center mt-0">
        <button className="flex overflow-hidden justify-center items-center self-center px-2.5 py-3 mt-7 w-full rounded-sm max-w-[200px]">
          <span className="self-stretch my-auto text-2xl">{projectName}</span>
          <Image
            width="6"
            height="8"
            src={arrow}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
          />
        </button>
      </div>
    </div>
  );
};

export default AppProjectCard;
