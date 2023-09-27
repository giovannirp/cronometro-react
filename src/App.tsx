import Formulario from './Components/Formulario'
import "./App.css";
import Lista from './Components/Lista';
import { useState } from 'react';
import "./App.scss";
import Cronometro from './Components/Cronometro';
import { ITarefa } from './types/ITarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([
    {
      tarefa: 'React',
      tempo: '02:00:00'
    }, {
      tarefa: 'JavaScript',
      tempo: '01:00:03'
    }
  ]);

  return (
    <div className='container'>
      <Formulario setTarefas={setTarefas} />
      <hr />
      <Lista tarefas={tarefas} />
      <hr />
      <Cronometro />
    </div>
  )
}

export default App
