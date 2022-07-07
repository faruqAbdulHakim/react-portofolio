import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import TabHeader from '../shared/TabHeader';

function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 2.5,
      }
    );
  }, []);

  return (
    <div className="h-[calc(100vh-56px)]">
      <div className="pt-4">
        <TabHeader text1="Contact" text2="Contact me here" />
      </div>
      <div ref={containerRef} className="mt-8 flex flex-col items-center gap-4">
        <img
          src="/assets/me.jpeg"
          alt="me"
          className="w-36 h-36 rounded-full grayscale"
        />
        <div>
          <h2 className="font-semibold font-mono">Faruq Abdul Hakim</h2>
          <div className="flex gap-2 justify-around mt-4">
            <a
              href="https://www.linkedin.com/in/faruq-abdul-hakim-1aa6231bb/"
              className="hover:scale-105 active:scale-95 transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/linkedin-icon.svg"
                alt="linked in"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.instagram.com/faruq_a.h/"
              className="hover:scale-105 active:scale-95 transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/instagram.webp"
                alt="linked in"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://github.com/faruqAbdulHakim"
              className="hover:scale-105 active:scale-95 transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/github-icon.svg"
                alt="linked in"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
