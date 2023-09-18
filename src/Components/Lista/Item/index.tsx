import { ITarefa } from "../../../types/ITarefas";

export default function Item(props: ITarefa) {
  const { tarefa, tempo, selecionado, completado, id } = props;

  console.log('Item atual: ', {
    tarefa, tempo, selecionado, completado, id
  });
  
  return (
    <li className="item">
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}