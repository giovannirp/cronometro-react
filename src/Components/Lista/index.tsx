import { ITarefa } from "../../types/ITarefas";
import Item from "./Item";
import "./styles.scss";

function Lista( { tarefas }: {tarefas: ITarefa[]}) {
  return (
    <aside className="list">
      <h2>Tarefas do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            tarefa={item.tarefa}
            tempo={item.tempo}
            selecionado={item.selecionado}
            completado={item.completado}
            id={item.id}
          />
          // <Item
          //   key={index}
          //   {...item}
          //  />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;