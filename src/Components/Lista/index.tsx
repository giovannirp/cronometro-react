import { ITarefa } from "../../types/ITarefas";
import Item from "./Item";
import "./styles.scss";

interface Props extends ITarefa {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista( { tarefas, selecionaTarefa }: Props) {
  return (
    <aside className="list">
      <h2>Tarefas do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            selecionaTarefa={selecionaTarefa}
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