import TabHeader from '../shared/TabHeader';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Skills() {
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const childrens = cardContainerRef.current.children;
    for (let i = 0; i < childrens.length; i++) {
      gsap.fromTo(
        childrens[i],
        { visibility: 'hidden', opacity: 0, y: 20 },
        {
          visibility: 'visible',
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5 * i + 3,
        }
      );
    }
  }, []);

  return (
    <div className="h-[calc(100vh-56px)]">
      <div className="pt-4">
        <TabHeader text1="Skills" text2="Frequent technologies I use" />
      </div>
      <div ref={cardContainerRef} className="mx-8 mt-8 flex gap-4 flex-wrap">
        <Card text="HTML 5" imgSrc="/assets/html-5.svg" />
        <Card text="CSS 3" imgSrc="/assets/css-3.svg" />
        <Card text="TailwindCSS" imgSrc="/assets/tailwindcss.svg" />
        <Card text="JavaScript" imgSrc="/assets/javascript.svg" />
        <Card text="React.js" imgSrc="/assets/react.svg" />
        <Card text="Next.js" imgSrc="/assets/nextjs.svg" />
        <Card text="PHP" imgSrc="/assets/php.svg" />
        <Card text="Node.js" imgSrc="/assets/nodejs-icon.svg" />
        <Card text="Express.js" imgSrc="/assets/express.svg" />
        <Card text="PostgreSQL" imgSrc="/assets/postgresql.svg" />
        <Card text="Supabase" imgSrc="/assets/supabase-icon.svg" />
        <Card text="Git" imgSrc="/assets/git-icon.svg" />
        <Card text="GitHub" imgSrc="/assets/github-icon.svg" />
      </div>
    </div>
  );
}

function Card({ text, imgSrc }) {
  return (
    <div className="shadow-md p-4">
      <img src={imgSrc} alt={text} className="w-20 h-20" />
      <h2 className="text-mono text-sm font-semibold text-center mt-4">
        {text}
      </h2>
    </div>
  );
}

export default Skills;
