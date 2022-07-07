import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TabHeader from '../shared/TabHeader';

const projects = [
  {
    title: 'Space Tourism',
    imgSrc: '/assets/projects/space-tourism.png',
    desc: 'Solusi dari challange yang disediakan oleh situs frontendmentor.io. Individu',
    techs: 'React.js, TailwindCSS, GSAP',
    url: 'https://react-space-tourism-peach.vercel.app/',
  },
  {
    title: 'Website Danaindoagri',
    imgSrc: '/assets/projects/danaindoagri.png',
    desc: 'Dikerjakan untuk memenuhi tugas mata kuliah Pengembangan Perangkat Lunak. Terdapat berbagai CRUD data disertai dengan fitur autentikasi dan otorisasi. Berkolaborasi dalam sebuah tim yang terdiri atas Project Manager, System Analyst, Desainer, Programmer, dan Tester',
    techs: 'Next.js, TailwindCSS, Supabase, FramerMotion',
    url: 'https://danaindoagri-website-dev.vercel.app/',
  },
  {
    title: 'Jokes Generator',
    imgSrc: '/assets/projects/jokes-generator.png',
    desc: 'Sebuah situs yang menampilkan berbagai lelucon dengan cara fetch ke public API. Individu',
    techs: 'React.js, Styled-Components',
    url: 'https://jokes-generator-512097.netlify.app/',
  },
  {
    title: 'Postgre',
    imgSrc: '/assets/projects/postgre.png',
    desc: 'Situs untuk melakukan pendaftaran sebuah event webinar. Berkolaborasi dalam sebuah tim yang terdiri atas Project Manager, UI/UX Desainer, FrontEnd Dev, dan BackEnd Dev',
    techs: 'Next.js, TailwindCSS',
    url: 'https://postgre.pemro.id/',
  },
];

function Projects() {
  return (
    <div className="h-[calc(100vh-56px)]">
      <div className="pt-4">
        <TabHeader text1="Projects" text2="Some projects I've done" />
      </div>
      <div className="p-4 mt-6 pb-16 flex flex-col items-center gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            imgSrc={project.imgSrc}
            desc={project.desc}
            techs={project.techs}
            url={project.url || null}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, imgSrc, desc, techs, url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      gsap.fromTo(
        containerRef.current,
        {
          y: 40,
        },
        {
          scrollTrigger: containerRef.current,
          y: 0,
          opacity: 1,
          duration: 2,
        }
      );
    }, 3000);
  }, []);

  return (
    <div
      ref={containerRef}
      className="opacity-0 w-full max-w-screen-md flex flex-col md:flex-row gap-4 border shadow-md rounded-md overflow-hidden group"
    >
      <div>
        <img
          src={imgSrc}
          alt={title}
          className="w-full md:w-56 h-40 sm:h-64 md:h-full object-cover object-center"
        />
      </div>
      <div className="p-2 flex-1">
        <h2 className="text-xl font-mono font-bold mb-1">{title}</h2>
        <p className="font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity mb-3">
          {desc}
        </p>
        <p className="font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">
          {techs}
        </p>
        {url && (
          <div className="ml-auto w-max">
            <a
              className="font-mono text-sm inline-block underline my-2 mr-2 hover:opacity-90 active:opacity-80 transition-opacity"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Lihat situs
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
