import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Smart Watch', price: '$49' },
    { name: 'Smart Phone', price: '$599' },
    { name: 'Ear Pod', price: '$99' }
  ];
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
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

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
function Product(props) {
  const productStyle = {
    width: '250px',
    height: '250px',
    float: 'left',
    margin: '5px',
    padding: '5px',
    backgroundColor: '#eee',
    color: '#000',
    borderRadius: '5px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
