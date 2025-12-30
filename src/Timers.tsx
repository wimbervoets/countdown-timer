// src/Timers.tsx
import React from 'react';
import Timer from './Timer';
import './Timers.css';

function Timers() {
  return (
    <div className="timers-container">
      <Timer name="Mama" bgColor="#FFCCCC" />
      <Timer name="Papa" bgColor="#CCFFCC" />
      <Timer name="Bert" bgColor="#CCCCFF" />
    </div>
  );
}

export default Timers;
