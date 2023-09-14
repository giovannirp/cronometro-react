import { ChangeEvent, Component } from "react";
import Botao from "../Button";
import { ITarefa } from "../../types/ITarefas";
// import { v4 as uuidv4 } from 'uuid';

class Formulario extends Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  }

  changeNew = (evento: ChangeEvent<HTMLInputElement>) => {
    const target = evento.currentTarget;
    const { value, name } = target;
    
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state}])
    console.log('state: ', this.state)

    // this.props.setTarefas((tarefasAntigas) => [
    //   ...tarefasAntigas,
    //   {
    //     ...this.state,
    //     selecionado: false,
    //     completado: false,
    //     id: uuidv4()
    //   },
    // ]);

    // this.setState({
    //   tarefa: "",
    //   tempo: "00:00"
    // })

    console.log("oláaa")
  }

  render() {
    return (
      <form onSubmit={this.adicionarTarefa.bind(this)}>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            id="tarefa"
            onChange={this.changeNew}
            placeholder="O que você precisa"
            required
          />
        </div>
        <div>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={this.changeNew}
            min="00:00:00"
            max="01:30:00"
          />
        </div>
        <Botao type="submit">Enviar</Botao>
      </form>
    );
  }
}

export default Formulario;
