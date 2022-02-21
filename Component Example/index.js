import React, { useState, useEffect } from 'react';
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

function App2() {
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.5" />
    <Item name="Ice cream" price="24" />
  </div>;
}

const el4 = <App2 />; 
ReactDOM.render(
  el4, 
  document.getElementById('rootItem')
);

//STATE
class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
const e15 = <Counter />; 
ReactDOM.render(e15, document.getElementById('rootState')
);

//HOOKS
function Counter2() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}
const el6 = <Counter2 />; 
ReactDOM.render(
  el6, 
  document.getElementById('rootHooks')
);

function HelloHooks() {
  const [name, setName] = useState("David");

  return <h1>Hello {name}.</h1>;
}
const el7 = <HelloHooks />; 
ReactDOM.render(
  el7, 
  document.getElementById('rootHooks2')
);

//Lifecycle Methods
class Counter3 extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  componentDidMount() {
    this.setState({counter: 42});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
const el8 = <Counter3 />; 
ReactDOM.render(
  el8, 
  document.getElementById('rootLife')
);

class Counter4 extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
const el9 = <Counter4 />; 
ReactDOM.render(
  el9, 
  document.getElementById('rootLife2')
);

// function Counter5() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert("Number of clicks: " + counter);
//   });

//   function increment() {
//     setCounter(counter+1);
//   }
//   return <div>
//   <p>{counter}</p>
//   <button onClick={increment}>Increment</button>
//   </div>;
// }
// const e20 = <Counter5 />; 
// ReactDOM.render(
//   e20, 
//   document.getElementById('rootLife3')
// );

//Handling Events
function Toggle() {
  const [val, setVal] = useState("ON");
  function toggle() {
    setVal((val=="ON")?"OFF":"ON");
  }
  return <button onClick={toggle}>{val}</button>;
}
const e21 = <Toggle />; 
ReactDOM.render(
  e21, 
  document.getElementById('rootHandling')
);

function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km/1.609).toFixed(2);
  }

  return <div>
  <input type="text" value={km} onChange={handleChange} />
  <p> {km} km is {convert(km)} miles </p>
  </div>;
}
const e22 = <Converter />; 
ReactDOM.render(
  e22, 
  document.getElementById('rootHandling2')
);

function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}
const e23 = <AddForm />; 
ReactDOM.render(
  e23, 
  document.getElementById('rootHandling3')
);

//List
function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val) =>
    <li>{val}</li>
  );
  return <ul>{listItems}</ul>;
}
const arr = ["A", "B", "C"];
const e24 = <MyList data={arr} />; 
ReactDOM.render(
  e24, 
  document.getElementById('rootList')
);

function MyList2(props) {
  const arr2 = props.data;
  const listItems = arr2.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}
const arr2 = ["A", "B", "C"];
const e25 = <MyList2 data={arr2} />; 
ReactDOM.render(
  e25, 
  document.getElementById('rootList2')
);
