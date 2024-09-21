import React from 'react';
import Image from 'next/image';

import BgImage from '../../public/images/about_us_main.png';

function AboutUsHeader() {
  return (
    <header className="relative flex items-center justify-center w-screen min-h-[375px] text-5xl font-bold tracking-[4px] max-md:text-4xl overflow-hidden">
      <Image
        loading="lazy"
        src={BgImage}
        alt="About Us background"
        layout="fill" // Makes the image cover the parent element
        objectFit="cover" // Ensures the image covers the area without distortion
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 px-16 pt-16 pb-48 max-md:px-5 max-md:pb-28 text-center">
        <h1 className="text-black text-5xl">About Us</h1> {/* Change text color to black */}
      </div>
    </header>
  );
}

export default AboutUsHeader;
