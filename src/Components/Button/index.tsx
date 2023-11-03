import { Component } from "react";
// interface BotaoProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {}

class Botao extends Component <{
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
}> {
  render() {
    const { children, type ="button", onClick } = this.props;

    return (
      <button onClick={onClick} type={type} >
        {children}
      </button>
    )
  }
}

export default Botao;