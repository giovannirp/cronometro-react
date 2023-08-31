import { Component } from "react";
import Botao from "../Button";

class Formulario extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você precisa"
            required
          />
        </div>
        <div>
          <input
            type="time"
            step="1"
            name="tempo"
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
