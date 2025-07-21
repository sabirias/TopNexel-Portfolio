// useCounter hook placeholder
import { useEffect, useState } from "react";

const useCounter = (target, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
      } else {
        setCount(target);
        clearInterval(timer);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);

  return count;
};

export default useCounter;
