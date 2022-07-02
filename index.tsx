import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

const nombres = ['Merce', 'Dafhne', 'Lia', 'Jesus'];

const Saludar = ({ nombre, idioma }) => {
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <p>
      {saludo} {nombre}
    </p>
  );
};

const App = () => {
  return (
    <h1>
      <Saludar nombre="Lia" idioma="es" />
    </h1>
  );
};

render(<App />, document.getElementById('react-app'));
