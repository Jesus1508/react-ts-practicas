import * as React from 'react';
import { render } from 'react-dom';

const nombres = ['Merce', 'Dafhne', 'Lia', 'Jesus'];

function getNombres() {
  const elementosLista = [];
  for (var i = 0; i < nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]}</li>);
  }
  return elementosLista;
}

const Nombres = () => {
  return <ul>{getNombres()}</ul>;
};

const App = () => {
  return (
    <div>
      <Nombres />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
