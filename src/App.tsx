import React from 'react';
import reactLogo from './assets/react.svg';

function App() {
  return (
    <div className="bg-slate-800 w-full h-screen flex flex-col gap-8 items-center justify-center">
      <img className="animate-spin-slow w-44 h-44" src={reactLogo} alt="React Logo" />
      <p className="text-2xl text-white font-medium">React Vite</p>
    </div>
  );
}

export default App;
