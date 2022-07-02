import * as React from 'react';
import { render } from 'react-dom';

const nombres = ['Merce', 'Dafhne', 'Lia', 'Jesus'];

const Nombres = () => {
  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <Nombres />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
