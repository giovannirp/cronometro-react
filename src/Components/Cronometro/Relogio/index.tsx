import "./style.scss";

interface Props {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 } : Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  // adicionei downlevelIteration no tsconfig
  const [minutosDezena, minutosUnidade] = String(minutos).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

  return (
    <div className="relogio">
      <span className="relogioNumero">{minutosDezena}</span>
      <span className="relogioNumero">{minutosUnidade}</span>
      <span className="relogioDivisao">:</span>
      <span className="relogioNumero">{segundoDezena}</span>
      <span className="relogioNumero">{segundoUnidade}</span>
    </div>
  )
}