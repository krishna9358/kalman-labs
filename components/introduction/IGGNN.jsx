import React from 'react';
import Introduction from './introduction';
import intro_icon from '../../public/images/intro_icon.png'

function IntroductionGroupGNN() {
  const introductions = [
    {
      imageSrc: intro_icon,
      title: "krmvfdxc",
      content: "Introduction to concept of genomics, basics of bio-informatics and possible application of AI in the domain"
    },
    {
      imageSrc: intro_icon,
      title: "Understanding",
      content: "Exploring the fundamentals of genetic sequencing and its role in modern medicine and research"
    },
    {
      imageSrc: intro_icon,
      title: "Application",
      content: "Understanding the intersection of data science and biology in the era of big data genomics"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {introductions.map((intro, index) => (
        <Introduction
          key={index}
          title={intro.title}
          imageSrc={intro.imageSrc}
          content={intro.content}
        />
      ))}
    </div>
  );
}

export default IntroductionGroupGNN;