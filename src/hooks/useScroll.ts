import {useState} from 'react';

const useScroll = () => {
  const [y, setY] = useState(0);

  const updateY = newY => setY(newY);

  return {y, updateY};
};

export default useScroll;
