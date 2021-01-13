import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  function tick() {
    setSeconds((prevSeconds) => Math.round(100 * (prevSeconds + 0.1)) / 100);
  }

  useEffect(() => {
    const timer = window.setInterval(() => tick(), 100);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="timer text-light">
      Timer has been running for {seconds} seconds;
    </div>
  );
}

export default Timer;
