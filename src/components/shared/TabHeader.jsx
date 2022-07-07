import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

function TabHeader({ text1, text2 }) {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(text1Ref.current, { text: text1, duration: 0.8 });
    gsap.to(text2Ref.current, { text: text2, duration: 2, delay: 1 });
  }, [text1, text2]);

  return (
    <div>
      <h1
        ref={text1Ref}
        className="text-center font-cursive font-bold text-3xl"
      >
        {''}
      </h1>
      <p ref={text2Ref} className="text-center font-cursive opacity-70">
        {' '}
      </p>
    </div>
  );
}

export default TabHeader;
