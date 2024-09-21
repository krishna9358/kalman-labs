import React from 'react';
import InfoCard from './InfoCard';
import AboutUsHeader from './AboutUsHeader';

import image1 from '../../public/images/logo_q1_aboutus.png';
import image2 from '../../public/images/logo_2_aboutus.png';
import image3 from '../../public/images/logo_3_aboutus.png';
import image4 from '../../public/images/logo_4_aboutus.png';
import image5 from '../../public/images/logo_5_aboutus.png';


const cardData = [
  {
    imageSrc: image1,
    title: "Innovating\nthe Future",
    description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
  },
  {
    imageSrc: image2,
    title: "Collaborative Excellence",
    description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
  },
  {
    imageSrc: image3,
    title: "Inspired by Kalman Filter",
    description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
  },
  {
    imageSrc: image4,
    title: "Our Mission",
    description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
  },
  {
    imageSrc: image5,
    title: "Join Us",
    description: "Pioneering research and development company at the intersection of technology and innovation spanning deep learning, genomics, decentralized & more"
  }
];

function AboutUs() {
  return (
    <main className="flex flex-col text-center">
      <AboutUsHeader />
      <section className="flex z-10 flex-col -mt-32 mx-auto max-w-[1159px] w-full px-4">
        <div className="flex flex-wrap gap-10 justify-center items-center max-md:max-w-full">
          {cardData.slice(0, 3).map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
        <div className="flex flex-wrap gap-10 items-center justify-center mt-20 max-md:mt-10 max-md:max-w-full">
          {cardData.slice(3).map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutUs;