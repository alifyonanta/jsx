import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Hellos extends React.Component {
  render() {
    return <h1>Hello world.</h1>;
  }
}

const el = <Hellos />;
ReactDOM.render(el, document.getElementById('root'));

//Ini props
function Hello(props) {
  return (
    <p>
      Hello, <b>{props.name}!</b>
    </p>
  );
}

const el2 = <Hello name="David 1" />;
ReactDOM.render(el2, document.getElementById('roots'));

function Helloss(props) {
  return <p>Hello, {props.name}!</p>;
}

function App() {
  return (
    <div>
      <Helloss name="David" />
      <Helloss name="James" />
      <Helloss name="Amy" />
    </div>
  );
}

const el3 = <App />;
ReactDOM.render(el3, document.getElementById('roots1'));

function Item(props) {
  return <div className="item">
  <b>Name:</b> {props.name} <br />
  <b>Price:</b> ${props.price}
  </div>;
}

function App() {
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.5" />
    <Item name="Ice cream" price="24" />
  </div>;
}

const el = <App />; 
ReactDOM.render(
  el, 
  document.getElementById('rootItem')
);
