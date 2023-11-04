import React from 'react';
import Topo from './componentes/topo';
import Conteudo from './componentes/Conteudo/';

import Rodape from './componentes/rodape/'
import './App.css';

function App() {
  return (
    <div className='container'>
      <Topo />
      <Conteudo />
      <Rodape />
    </div>

  );
   
}

export default App;
