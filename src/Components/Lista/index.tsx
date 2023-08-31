import Item from "./Item";

function Lista() {
  const tarefas = [
    {
      tafefa: 'React',
      tempo: '02:00:00'
    }, {
      tarefa: 'JavaScript',
      tempo: '01:00:03'
    }
  ];
  return (
    <aside>
      <h2>Tarefas do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            tarefa={item.tafefa}
            tempo={item.tempo}
          />
        ))}

      </ul>
    </aside>
  )
}

export default Lista;