//  bg-gradient-to-tr from-black via-cyan-500/20 to-transparent shadow-customBlueXl
import React from 'react';
import GolfBall from '../components/GolfBall';
import css from '../assets/icons/css.svg';
import html from '../assets/icons/html.svg';
import javascript from '../assets/icons/js.png';
import docker from '../assets/icons/docker.svg';
import express from '../assets/icons/expressLogo.png';
import git from '../assets/icons/git.png';
import c from '../assets/icons/letter-c.png';
import nodejs from '../assets/icons/nodejs.svg';
import python from '../assets/icons/python.png';
import postcsSQL from '../assets/icons/postgresSQL.svg';

const golfProps = [
  { label: css, value: '80%' },
  { label: html, value: '70%' },
  { label: javascript, value: '60%' },
  { label: docker, value: '80%' },
  { label: express, value: '70%' },
  { label: git, value: '60%' },
  { label: c, value: '80%' },
  { label: nodejs, value: '70%' },
  { label: python, value: '60%' },
  { label: postcsSQL, value: '80%' },
  { label: nodejs, value: '70%' },

]


function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-6"> <span className="text-secondary">My </span>Skills</h1>
      <div className='pb-14  pt-3 md:p-0 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
        <div className="flex gap-4 scroll-animate hover:pause-animation w-max">
          {[...golfProps].map((golfProp, index) => (
            <div key={index} className="w-32 h-32 md:w-96 md:h-96 bg-primary">
              <GolfBall golfProp={golfProp} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-1-6 bg-gradient-frame-line mt-9 md:mt-8" />
    </section>

  );
}


export default Skills;
