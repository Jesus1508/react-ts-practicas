import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

const Button = () => {
  return (
    <div>
      <p>Presionado: 0</p>
      <button>Click me!</button>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
