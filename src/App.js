import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          My First React Experience!
        </h1>

        <Person name='Apple' description='Green Apple'></Person>
        <Person name='Coconut' description='Green Coconut'></Person>
        <Person name='Mango' description='Yellow Mango'></Person>

      </header>
    </div>
  );
}

function Person(props) {
  return (<div style={{ border: '3px solid #fcd454', margin: '5px', padding: '5px', width: '500px', borderRadius: '5px', backgroundColor: '#fff', color: '#000' }}>
    <h1>Name: {props.name}</h1>
    <p>Description: {props.description}</p>
  </div>)
}

export default App;
