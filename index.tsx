import * as React from 'react';
import { render } from 'react-dom';

const nombres = ['Merce', 'Jesus', 'Dafhne', 'Lia'];

function getNombres() {
  const elementosLista = [];
  for (var i = 0; i < nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]}</li>);
  }
}

const Nombres = () => {
  return <ul> {getNombres()} </ul>;
};

const App = () => {
  return (
    <div>
      <Nombres />
    </div>
  );
};

// const Saludo = () => {
//   const nombre = 'Jesus';
//   const idioma = 'en';
//   return [
//     <div>
//       {
//         idioma === 'en' ? <p>Hello</p> : <p>Hola</p>
//       }
//     </div>
//     ];
// };

// const App = () => {
//   return (
//     <h1>
//       <Saludo />
//     </h1>
//   );
// };

render(<App />, document.getElementById('react-app'));
