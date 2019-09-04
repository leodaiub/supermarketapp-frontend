import React from 'react';
import './App.css';
import List from './pages/List';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <List></List>
    </div>
  );
}

export default App;
