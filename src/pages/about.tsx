'use client'
import React, { useState } from "react";

const About: React.FC = () => {
  const [name, setName] = useState<string | null>(typeof window !== 'undefined' ? localStorage.getItem('visitorName') : null);

  const askName = () => {
    const n = prompt('Как тебя зовут?');
    if (n) localStorage.setItem('visitorName', n);
    else localStorage.removeItem('visitorName');
    setName(n);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{name ? `Привет, ${name}!` : 'Добро пожаловать!'}</h1>
      <button onClick={askName}>Представиться</button>
    </div>
  );
};

export default About;
