// import React, {useState} from 'react';
import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  // //Para mudar o estado da informação do contador utiliza-se useState(0)
  //  // O useState retorna um array com duas posições. [valor, funcaodeAtualizacaodovalor]
  // const[counter, setCounter] = useState(0);
  // //Para mudar o contador, utiliza-se setCounter
  // function increment() {
  //   setCounter(counter + 1) ;
  // }

  return (
    // <div> <Header>Contador: {counter} </Header><button onClick={increment}>Incrementar</button></div>
    <Routes />
  );
}

export default App;
