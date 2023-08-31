import { Component } from "react";
interface BotaoProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {}

class Botao extends Component <BotaoProps> {
  render() {
    const { children, type ="button"} = this.props;

    return (
      <button type={type} >
        {children}
      </button>
    )
  }
}

export default Botao;