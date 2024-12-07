import style from './relogio.module.scss';

interface IRelogioProps {
  tempo: number | undefined
}

export const Relogio = ({tempo=0}: IRelogioProps) => {
  const segundoParaMinutos = Math.floor(tempo / 60);
  const apenasSegundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(segundoParaMinutos)
  .padStart(2,'0');
  const [segundoDezena, segundoUnidade] = String(apenasSegundos)
  .padStart(2,'0');

  return (
    <>
    <span className={style.relogioNumero}>{minutoDezena}</span>
    <span className={style.relogioNumero}>{minutoUnidade}</span>
    <span className={style.relogioDivisao}>:</span>
    <span className={style.relogioNumero}>{segundoDezena}</span>
    <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}