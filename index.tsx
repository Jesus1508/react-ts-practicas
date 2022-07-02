import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

const Saludo = () => {
  const [name, setName] = useState('');
  return (
    <div>
      {/* SyntheticEvent */}
      <input type="text" onChange={(ev) => setName(ev.target.value)} />
      <p>Hola {name} </p>
      {/* <a href="#" onClick={(ev) => ev.preventDefault()}>Ir</a> */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Saludo />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
