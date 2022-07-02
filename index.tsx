import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

const nombres = ['Merce', 'Dafhne', 'Lia', 'Jesus'];

const Saludar = ({ nombre }) => {
  return <p>Hola {nombre}</p>;
};

const App = () => {
  return (
    <h1>
      <Saludar nombre="Lia" />
    </h1>
  );
};

render(<App />, document.getElementById('react-app'));
