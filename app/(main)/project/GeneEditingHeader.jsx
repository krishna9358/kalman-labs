import React from 'react';
import Image from "next/image";
import project1_theme from "../../../public/images/project1_theme.png";

function GeneEditingHeader() {
  return (
    <header className="overflow-hidden pl-20 bg-teal-600 rounded-none max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <h1 className="z-10 self-stretch my-auto mr-0 text-5xl font-bold text-gray-200 leading-[77px] tracking-[7.2px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[72px]">
            Deep Learning in Gene Editing
          </h1>
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <Image
                loading="lazy"
                src={project1_theme}
                alt="Illustration of deep learning in gene editing"
                className="object-contain grow w-full aspect-[2.38] max-md:max-w-full rounded-r-lg" // Add rounded class here
                layout="responsive"
                width={800} // Set a width according to your layout
                height={337} // Set a height according to your layout
            />
        </div>
      </div>
    </header>
  );
}

export default GeneEditingHeader;
