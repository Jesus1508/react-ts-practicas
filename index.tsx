import * as React from 'react';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Button = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Ejecutado');
  });
  return <button>Enviar</button>;
};

const App = () => <Button />;

render(<App />, document.getElementById('react-app'));
