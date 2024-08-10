import React from 'react';
import { useSpring, animated } from 'react-spring';

const FallingHeart = ({ delay }) => {
  const props = useSpring({
    to: { transform: 'translateY(100vh)', opacity: 1 },
    from: { transform: 'translateY(-10vh)', opacity: 0 },
    config: { duration: 4000 },
    delay: delay,
    loop: { reverse: false },
  });

  // Randomize the position of each heart horizontally
  const randomXPosition = Math.random() * 100 + 'vw';

  return (
    <animated.div
      style={{
        ...props, // Spread the animation properties here
        position: 'fixed', // Ensure the heart is free to move
        left: randomXPosition,
        fontSize: '2rem',
        color: 'pink',
        zIndex: 1000, // Make sure hearts are on top of other elements
      }}
    >
      ❤️
    </animated.div>
  );
};

const HeartRain = () => {
  // Create multiple hearts with different delays
  const hearts = Array.from({ length: 20 }).map((_, index) => (
    <FallingHeart key={index} delay={index * 200} />
  ));

  return <div>{hearts}</div>;
};

export default HeartRain;
