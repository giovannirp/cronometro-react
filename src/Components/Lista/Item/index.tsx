export default function Item(props) {
  const { tarefa, tempo, selecionado, completado, id } = props;
  console.log('Item atual: ', {
    tarefa, tempo, selecionado, completado, id
  });
  
  return (
    <li>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}