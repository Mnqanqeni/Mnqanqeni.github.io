// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import FloatingCube from '../components/FloatingCube';

// export default function Skills() {
//   const skills = [
//     { label: 'JavaScript', position: [-2, 0, 0], color: 'gold' },
//   ];

//   return (
//     <div className="w-[400px] h-[400px] rounded-xl overflow-hidden border border-gray-300 shadow-md m-4">
//       <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
//         {skills.map((skill, idx) => (
//           <FloatingCube key={idx} {...skill} />
//         ))}
//       </Canvas>
//     </div>
//   );
// }


// export default function Skills() {
//     return (
//         <section id="skills" className="flex flex-col items-center justify-between">
//             <div className="text-3xl font-bold py-16">
//                 <h1> <span className="text-secondary">My </span>Skills</h1>
//             </div>
//             <div className="w-full h-1-6 bg-gradient-frame-line" />
//         </section>
//     );
// }

//  bg-gradient-to-tr from-black via-cyan-500/20 to-transparent shadow-customBlueXl
import React from 'react';
import GolfBall from '../components/GolfBall';
import GolfBallScene from '../components/GolfBallCSG';
import twitterIcon from '../assets/icons/twitter-brands-solid.svg';
import linkedinIcon from '../assets/icons/linkedin-in-brands-solid.svg';
import githubIcon from '../assets/icons/github-brands-solid.svg';

const golfProps = [
  { label: twitterIcon, value: '80%' },
  { label: linkedinIcon, value: '70%' },
  { label: githubIcon, value: '60%' },
  { label: twitterIcon, value: '80%' },
  { label: linkedinIcon, value: '70%' },
  { label: githubIcon, value: '60%' },
  { label: twitterIcon, value: '80%' },
  { label: linkedinIcon, value: '70%' },
  { label: githubIcon, value: '60%' },

]
import Marquee from 'react-fast-marquee';

function App() {
  return (
    <section id="skills" className="flex flex-col items-center justify-between py-16">
      <h1 className="text-3xl font-bold"> <span className="text-secondary">My </span>Skills</h1>
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div className="inline-flex gap-4 w-max">
          <Marquee pauseOnHover gradient={false} speed={220}>
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
