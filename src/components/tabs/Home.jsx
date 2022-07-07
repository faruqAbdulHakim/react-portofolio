import { useRef, useEffect } from 'react';
import { gsap, Power0 } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

function Home() {
  const imgRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );

    gsap.registerPlugin(TextPlugin);
    gsap.to(text1Ref.current, { text: 'Hi,', duration: 1 });
    gsap.to(text1Ref.current, {
      text: "Hi, I'm a Front-End Developer!",
      duration: 2,
      delay: 1.2,
    });
    gsap.to(text2Ref.current, {
      text: 'Let me introduce myself. My name is Faruq Abdul Hakim. You can call me Faruq (فارق). I am now a college student at the University of Jember, studying information systems.',
      duration: 8,
      delay: 3.4,
      ease: Power0.easeNone,
    });
    gsap.to(text3Ref.current, {
      text: 'I have a high interest in web and mobile apps development, especially as a Front-End web developer.',
      duration: 5,
      delay: 12,
      ease: Power0.easeNone,
    });

    gsap.fromTo(
      buttonRef.current,
      {
        visibility: 'hidden',
        opacity: 0,
      },
      {
        visibility: 'visible',
        opacity: 1,
        duration: 2,
        delay: 15,
      }
    );
  }, []);

  return (
    <div className="flex flex-col sm:flex-row p-4 h-[calc(100vh-56px)] items-center justify-around">
      <div className="order-1 sm:order-2">
        <img
          ref={imgRef}
          src="/assets/peeps.svg"
          alt=""
          className="w-72"
          aria-hidden="true"
        />
      </div>
      <div className="order-2 sm:order-1">
        <h1 ref={text1Ref} className="font-cursive font-bold text-3xl">
          {' '}
        </h1>
        <p
          ref={text2Ref}
          className="font-mono text-sm mt-6 leading-tight tracking-wide max-w-md"
        ></p>
        <p
          ref={text3Ref}
          className="font-mono text-sm mt-4 leading-tight tracking-wide max-w-md"
        ></p>
        <div className="mt-4">
          <a
            ref={buttonRef}
            className="bg-stone-800 text-white px-4 py-2 rounded-md font-mono
            opacity-0 hover:bg-stone-700 active:bg-stone-600 transition-all"
            href="/assets/CV_Faruq Abdul Hakim.pdf"
            download
            title="Click to start download CV"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
