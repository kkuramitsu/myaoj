import React from 'react';
import './App.css';
import CounterButton from './CounterButton';
import AOJ from './AOJ';

const msgStyle = {
  color: 'blue'
};

const App = () => {
  return (
    <>
      <h1 style={msgStyle}>はじめてのReact</h1>
      <AOJ />
    </>
  );
}

export default App;
