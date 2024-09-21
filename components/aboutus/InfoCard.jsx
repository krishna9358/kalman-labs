import React from 'react';
import Image from "next/image"; // Import the Image component

function InfoCard({ imageSrc, title, description }) {
  return (
    <article className="flex gap-2.5 items-center self-stretch px-7 py-6 my-auto bg-white rounded-3xl min-w-[240px] shadow-[0px_4px_40px_rgba(0,0,0,0.08)] w-[333px] max-md:px-5">
      <div className="flex flex-col items-center self-stretch px-3.5 my-auto min-w-[240px] min-h-[250px] w-[277px]">
        <Image 
          loading="lazy" 
          src={imageSrc} 
          alt={title} 
          layout="responsive" 
          width={140} // Specify width
          height={140} // Specify height
          className="object-contain max-w-full" 
        />
        <h2 className="mt-8 text-xl font-bold tracking-wider leading-6 text-amber-400">{title}</h2>
        <p className="self-stretch mt-7 text-sm tracking-tight leading-6 text-zinc-500">{description}</p>
      </div>
    </article>
  );
}

export default InfoCard;
