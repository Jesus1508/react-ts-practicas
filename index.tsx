import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

componentDidMount();
componentDidUpdate();
componentWillUnmount();

const Button = () => {
  // Aqui no debe haber efectos secundarios
  return <button>Enviar</button>;
};

const App = () => <Button />;

render(<App />, document.getElementById('react-app'));

function componentDidUpdate() {
  throw new Error('Function not implemented.');
}

function componentDidMount() {
  throw new Error('Function not implemented.');
}

function componentWillUnmount() {
  throw new Error('Function not implemented.');
}
