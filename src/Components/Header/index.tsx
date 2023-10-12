import "./styles.scss";

interface Props {
  titulo?: string,
}

export default function Header({ titulo }: Props) {
  console.log(titulo);

  return (
    <>
      <header>
        <h1>{ titulo }</h1>
      </header>
    </>
  )
}