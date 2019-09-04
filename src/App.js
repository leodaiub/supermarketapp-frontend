import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Routes from './routes.js';

const particlesOptions ={
  particles: {
      number: {
          value: 300,
          density: {
            enable: true,
            value_area: 1500
       }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles  className='particles'  params={particlesOptions}/>
      <Routes />
    </div>
  );
}

export default App;
