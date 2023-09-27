import Botao from "../Button";
import Relogio from "./Relogio";

export default function Cronometro() {
  return (
    <div className="cronometro">
      <p>
        Escolha um card e inicie o cronômetro
      </p>
      <div>
        <Relogio />
      </div>
      <Botao>
        Começar
      </Botao>
    </div>
  )
}