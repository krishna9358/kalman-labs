import React from 'react';
import Image from 'next/image';

function IntroductionHeader({ title, imageSrc }) {
  return (
    <header className="flex gap-2 justify-center items-center self-start text-3xl font-bold tracking-widest whitespace-nowrap">
      <Image
        src={imageSrc}
        alt=""
        width={38}
        height={38}
        className="object-contain shrink-0 self-stretch my-auto aspect-square"
      />
      <h1 className="self-stretch my-auto">{title}</h1>
    </header>
  );
}

export default IntroductionHeader;