import Formulario from './Components/Formulario'
import "./App.css";
import Lista from './Components/Lista';
import { useState } from 'react';
import "./App.scss";
import Cronometro from './Components/Cronometro';
import { ITarefa } from './types/ITarefas';
import Header from './Components/Header';

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

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }

          return tarefa;
        })  
      )
    }
  }

  return (
    <div className='container'>
      <Header 
        titulo="Cronômetro" 
        subTitulo="Acertando sua hora"
        linkTitle="#" 
      />
      <Formulario setTarefas={setTarefas} />
      <hr />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <hr />
      <Cronometro 
        selecionado={selecionado} 
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  )
}

export default App
