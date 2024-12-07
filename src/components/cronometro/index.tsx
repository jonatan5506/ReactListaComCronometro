import { Botao } from "../botao"
import { Relogio } from "./relogio"
import style from './cronometro.module.scss'
import { horaParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types";
import { useEffect, useState } from "react";

interface ICronometroProps {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

export const Cronometro = ({selecionado, finalizarTarefa}: ICronometroProps) => {
  //State para controlar o tempo do cronometro
  const [tempo,setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(horaParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number=0) {
    setTimeout(() => { 
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador -1);//Função recursiva
      }
      finalizarTarefa();
    }, 1000);
  }
  
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>
    </div>
  )
}