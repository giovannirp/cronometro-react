import Botao from "../Button";
import Relogio from "./Relogio";
import "./Cronometro.scss";

export default function Cronometro() {
  return (
    <div className="cronometro">
      <p className="titulo">
        Escolha um card e inicie o cronômetro
      </p>
      <div className="relogioWrapper">
        <Relogio />
      </div>
      <Botao>
        Começar
      </Botao>
    </div>
  )
}