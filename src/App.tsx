import Formulario from './Components/Formulario'
import "./App.css";
import Lista from './Components/Lista';
import { useState } from 'react';
import "./App.scss";
import Cronometro from './Components/Cronometro';
import { ITarefa } from './types/ITarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map((tarefa) => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className='container'>
      <Formulario setTarefas={setTarefas} />
      <hr />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <hr />
      <Cronometro />
    </div>
  )
}

export default App
