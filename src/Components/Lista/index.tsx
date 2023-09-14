import { ITarefa } from "../../types/ITarefas";
import Item from "./Item";

function Lista( { tarefas }: {tarefas: ITarefa[]}) {
  return (
    <aside>
      <h2>Tarefas do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            tarefa={item.tarefa}
            tempo={item.tempo}
          />
        ))}

      </ul>
    </aside>
  )
}

export default Lista;