import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';

const Form = ({ showed }) => {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');

  React.useEffect(() => {
    //Actualizar el dom
    console.log(':)');
  }, [showed]);

  const sendForm = (ev) => {
    ev.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTitle('');
        setBody('');
        console.log(json);
      });
  };

  return (
    <form onSubmit={(ev) => sendForm(ev)}>
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Publicación</label>
        <textarea
          id="body"
          value={body}
          onChange={(ev) => setBody(ev.target.value)}
        ></textarea>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
};

const Acordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Mostrar formulario </button>
      {show && <Form showed={show} />}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Acordion />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
