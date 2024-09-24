import React from 'react';

function IntroductionContent({ content }) {
  return (
    <section className="z-10 self-end mt-5 text-lg tracking-wider leading-7">
      {content}
    </section>
  );
}

export default IntroductionContent;