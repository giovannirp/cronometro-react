import Botao from "../Button";
import Relogio from "./Relogio";
import "./Cronometro.scss";
import { useEffect, useState } from "react";
import { TempoParaSegundos } from "../common/ultils/time";
import { ITarefa } from "../../types/ITarefas";

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa } : Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
   if(selecionado?.tempo) {
    setTempo(TempoParaSegundos(selecionado.tempo))
   }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className="cronometro">
      <p className="titulo">
        Escolha um card e inicie o cronômetro
        {/* Tempo: {tempo} */}
      </p>
      <div className="relogioWrapper">
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar
      </Botao>
    </div>
  )
}