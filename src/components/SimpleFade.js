import { useSpring, animated } from 'react-spring';

const SimpleFade = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  return <animated.div style={props}>This is a simple fade-in animation</animated.div>;
};

export default SimpleFade;
