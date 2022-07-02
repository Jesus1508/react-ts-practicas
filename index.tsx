import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

const Saludo = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <input type="text" />
      <p>Hola {name} </p>
    </div>
  );
};

const App = () => {
  return <div></div>;
};

render(<App />, document.getElementById('react-app'));
