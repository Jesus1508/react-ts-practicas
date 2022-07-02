import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

const Form = () => {
  return (
    <form>
      <div>
        <label for="title">Título</label>
        <input type="text" id="title" />
      </div>
      <div>
        <label for="body">Publicación</label>
        <textarea id="body"></textarea>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
};

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
