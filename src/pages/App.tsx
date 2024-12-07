import React, { useState } from 'react';
import { Formulario, Lista } from '../components';
import style from './App.module.scss';
import { Cronometro } from '../components/cronometro';
import { ITarefa } from '../types';

export function App() {
  //TODO Criar back com Json-server
  const [ tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [ selecionado, setSelecionado] = useState<ITarefa>();

  //State para marcar tarefa selecionada
  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);

    //Iteirar sobre a lista para setar true na opção selecionada
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true: false 
    })));
  }

  function finalizarTarefa() {
    setSelecionado(undefined)
    if (selecionado) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completo: true
          }
        }

        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}/>
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}
