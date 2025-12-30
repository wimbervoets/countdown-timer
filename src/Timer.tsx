// src/Timer.tsx
import React, { useState, useEffect } from 'react';
import './Timer.css';

interface TimerProps {
  name?: string;       // optional name prop
  bgColor?: string;    // optional background color prop
}

const Timer: React.FC<TimerProps> = ({ name: initialName = '', bgColor = 'white' }) => {
  const [countdownValue, setCountdownValue] = useState<number>(60);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [name, setName] = useState<string>(initialName);

  useEffect(() => {
    if (countdownValue === 0 && timer) {
      clearInterval(timer);
      alert('Time is up!');
    }
  }, [countdownValue, timer]);

  const startCountdown = () => {
    if (!timer) {
      setTimer(setInterval(() => {
        setCountdownValue(prevValue => prevValue - 1);
      }, 1000));
    }
  };

  const stopCountdown = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const add10Seconds = () => {
    setCountdownValue(prevValue => prevValue + 10);
  };

  const subtract20Seconds = () => {
    setCountdownValue(prevValue => (prevValue - 20 >= 0 ? prevValue - 20 : 0));
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer-container" style={{ backgroundColor: bgColor }}>
      {name && <p>Timer for: {name}</p>}
      <div id="timer-display">{countdownValue} seconden</div>
      <button onClick={startCountdown} className="button green">Start</button>
      <button onClick={stopCountdown} className="button red">Stop</button>
      <div className="add-time-container">
        <br/>
        <button onClick={add10Seconds} id="add-time-button" className="button green">Voeg 10s toe</button>
        <button onClick={subtract20Seconds} className="button red">Verlaag 20s</button>
      </div>
    </div>
  );
};

export default Timer;
