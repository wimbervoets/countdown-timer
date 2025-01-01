// src/Timer.tsx
import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer: React.FC = () => {
  const [countdownValue, setCountdownValue] = useState<number>(60);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [name, setName] = useState<string>('');

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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

//   const handleAddSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setAddSeconds(Number(event.target.value));
//   };

  const add10Seconds = () => {
    setCountdownValue(prevValue => prevValue + 10);
  };

  // Functie om 20 seconden van de tijd af te trekken
  const subtract20Seconds = () => {
    setCountdownValue(prevValue => (prevValue - 20 >= 0 ? prevValue - 20 : 0));
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer-container">
      <div id="name-display">
        <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
        />
      </div>
      {/* <div id="timer-display">{formatTime(countdownValue)}</div> */}
      <div id="timer-display">{countdownValue} seconden</div>
      <button onClick={startCountdown} className="button green">Start</button>
      <button onClick={stopCountdown} className="button red">Stop</button>
      {/* {name && <p>Timer for: {name}</p>} */}
      <div className="add-time-container">
      <br/>
        {/* <input
            type="number"
            placeholder="Seconds to add"
            value={addSeconds}
            onChange={handleAddSecondsChange}
        /> */}
        <button onClick={add10Seconds} id="add-time-button" className="button green">Voeg 10s toe</button>
        <button onClick={subtract20Seconds} className="button red">Verlaag 20s</button>
      </div>
    </div>
  );
};

export default Timer;