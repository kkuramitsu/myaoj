import React from 'react';
import './App.css';
import AOJ from './AOJ';

const msgStyle = {
  color: 'blue'
};

const App = () => {
  return (
    <>
      <h1 style={msgStyle}>プログラミング課題2020</h1>
      <AOJ />
      <hr/>
      <div>Selected by Kimio Kuramitsu</div>
    </>
  );
}

export default App;
