import React, { useState, useEffect } from 'react';

function AnimatedCounter({ targetNumber, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 30); // 30ms per update approx
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return (
    <span>{count.toLocaleString()}</span>
  );
}

export default AnimatedCounter;
