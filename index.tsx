import * as React from 'react';
import { render } from 'react-dom';

const Button = () => {
  return <button>Enviar</button>;
};

const App = () => <Button />;

render(<App />, document.getElementById('react-app'));
