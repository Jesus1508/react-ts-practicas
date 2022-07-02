import * as React from 'react';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Button = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Ejecutado');
    return () => {
      console.log('Adios');
    };
  }, []);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Enviar
    </button>
  );
};

const App = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <div>
      <button onClick={() => setShowButton(false)}> Eliminar botón</button>
      <div>{showButton && <Button />}</div>
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
