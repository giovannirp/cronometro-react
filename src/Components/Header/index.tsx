import "./styles.scss";

interface Props {
  titulo?: string,
  linkTitle?: string,
  subTitulo?: string
}

export default function Header({ titulo, linkTitle, subTitulo }: Props) {
  console.log(titulo);

  return (
    <>
      <header>
        <h1>
          <a href={linkTitle}>{ titulo }</a>
        </h1>
        <h2>
          {subTitulo}
        </h2>
      </header>
    </>
  )
}