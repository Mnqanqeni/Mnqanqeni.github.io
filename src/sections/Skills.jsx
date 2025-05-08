//  bg-gradient-to-tr from-black via-cyan-500/20 to-transparent shadow-customBlueXl
import React from 'react';
import GolfBall from '../components/GolfBall';
import GolfBallScene from '../components/GolfBallCSG';
import twitterIcon from '../assets/icons/twitter-brands-solid.svg';
import linkedinIcon from '../assets/icons/linkedin-in-brands-solid.svg';
import githubIcon from '../assets/icons/github-brands-solid.svg';
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

]
import Marquee from 'react-fast-marquee';

function App() {
  return (
    <section id="skills" className="flex flex-col items-center justify-between py-16">
      <h1 className="text-3xl font-bold"> <span className="text-secondary">My </span>Skills</h1>
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div className="inline-flex gap-4 w-max">
          <Marquee pauseOnHover gradient={false} speed={60}>
            {[...golfProps, ...golfProps].map((golfProp, index) => (
              <div key={index} className="mx-4 min-w-[100px]">
                <GolfBall golfProp={golfProp} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="w-full h-1-6 bg-gradient-frame-line mt-8" />
    </section>

  );
}


export default App;
