import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollSVG = () => {
  const controls = useAnimation();
  const svgRef = useRef(null);

  const handleScroll = () => {
    const svg = svgRef.current;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / scrollHeight;

    controls.start({
      pathLength: scrollFraction,
      transition: { duration: 0.7 },
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative' style={{ height: '300vh', padding: '20px' }}>
      <div className="absolute">
      <svg
        ref={svgRef}
        viewBox="0 0 700 700"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100vh',
          maxWidth: '100%',
          maxHeight: '100%',
          position: 'fixed',
          top: 0,
          left: 350,
        }}
      >
        <defs>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8d27" />
            <stop offset="100%" stopColor="#ffb027" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 800 0 C 700 0 650 150 600 200 C 500 300 450 250 450 200 C 450 150 550 100 550 200 C 550 300 550 500 800 600 "
          stroke="url(#strokeGradient)"
          stroke-width="6"
          stroke-linecap="round"
          initial={{ pathLength: 0 }}
          animate={controls}
          fill={'transparent'}
        />
      </svg>
      </div>

      
    </div>
  );
};

export default ScrollSVG;
