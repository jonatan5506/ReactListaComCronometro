import { ReactNode } from "react";
import style from "./Botao.module.scss";

interface IBotaoProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void
}

export const Botao = ({ children, type = "button", onClick }: IBotaoProps) => {
  return <button onClick={onClick} 
  type={type} 
  className={style.botao}>{children}
  </button>;
};

// import React, { ReactNode } from "react";
// import style from "./Botao.module.scss";

// interface IBotaoProps {
//   children: ReactNode;
// }

// class Botao extends React.Component<IBotaoProps> {
//   render() {
//     return <button className={style.botao}>{this.props.children}</button>;
//   }
// }

// export default Botao;
