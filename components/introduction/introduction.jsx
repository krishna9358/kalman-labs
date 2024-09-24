import React from 'react';
import IntroductionHeader from './IntroductionHeader';
import IntroductionContent from './IntroductionContent';

function Introduction({ title, imageSrc, content }) {
  return (
    <article className="flex flex-col max-w-[321px] text-zinc-800">
      <IntroductionHeader title = {title} imageSrc={imageSrc} />
      <IntroductionContent content={content} />
    </article>
  );
}

export default Introduction;