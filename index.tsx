import * as React from 'react';
import { render } from 'react-dom';

const Saludo = ()=>{
  const nombre = "Jesus Solis";
  const idioma = "en";
  return{
    <div>
      {
        idioma === "en" ? <p>Hello</p> : <p>Hola</p>
      }
    </div>
  }
}

const App = () =>{
  return <h1><Saludo/></h1>;
}

render (<App/>, document.getElementById('react-app'))