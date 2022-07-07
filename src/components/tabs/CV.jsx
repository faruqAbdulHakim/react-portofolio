import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import TabHeader from '../shared/TabHeader';

function CV() {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.to(buttonRef.current, { opacity: 1, duration: 1, delay: 1 });
  }, []);

  return (
    <div className="h-[calc(100vh-56px)]">
      <div className="pt-4">
        <TabHeader text1="CV" text2="Download my CV" />
      </div>
      <div className="mt-16 flex justify-center items-center">
        <button
          ref={buttonRef}
          className="bg-stone-800 text-white px-4 py-2 rounded-md mt-4 font-mono
          opacity-0 hover:bg-stone-700 active:bg-stone-600 transition-all"
          type="button"
          title="Click to start download CV"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

export default CV;
