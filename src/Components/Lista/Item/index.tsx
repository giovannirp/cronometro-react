import { ITarefa } from "../../../types/ITarefas";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa, tempo, selecionado, completado, id, selecionaTarefa
}: Props) {
  console.log('Item atual: ', {
    tarefa, tempo, selecionado, completado, id,
  });
  
  return (
    <>
      <li 
        className={`${"item"} ${selecionado ? "itemSelecionado" : ""} ${completado ? "itemCompletado" : ''}`}
        onClick={() => selecionaTarefa(
          {tarefa, tempo, selecionado, completado, id}
        )}
      >
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
      </li>
    </>

  )
}