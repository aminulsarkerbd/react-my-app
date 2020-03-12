import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'Smart Watch', price: '$49' },
    { name: 'Smart Phone', price: '$599' },
    { name: 'Ear Pod', price: '$99' },
    { name: 'Tab', price: '$999' }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          My First React Experience!
        </h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(prd => <Product product={prd}></Product>)
        }
        <Person name='Apple' description='Green Apple'></Person>
        <Person name='Coconut' description='Green Coconut'></Person>
        <Person name='Mango' description='Yellow Mango'></Person>
        {/*<Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>*/}

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => { setCount(count + 1); };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => { setCount(count + 1); }}>Increase</button>
      <button onClick={() => { setCount(count - 1); }}>Decrease</button>
    </div >
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
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
