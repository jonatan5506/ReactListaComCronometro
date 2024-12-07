import React, { useState } from "react";
import { Botao } from "../botao";
import style from "./Formulario.module.scss";
import { ITarefa } from "../../types";

import {v4 as uuidv4} from 'uuid';

interface IFormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export function Formulario({ setTarefas }: IFormularioProps) {
  //States
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  // const [tarefas, setTarefas] = useState<{ tarefa: string; tempo: string }[]>(
  //   []
  // );

  //handle do time
  const handleChangeTempo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempo(e.target.value);
  };

  //handle campo tarefa
  const handleChangeTarefa = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarefa(e.target.value);
  };

  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); //impede a pag de dar refresh

    if (tarefa.trim() === "") return; // Evita adicionar tarefas vazias

    // Adiciona a nova tarefa à lista
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completo: false, id:uuidv4() }
    ]); //O Spread criar uma cópia do estado antigo e depois adicona o novo obj, atualizando assim o setTarefas

    // Limpa os campos após a adição
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={handleChangeTarefa}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={handleChangeTempo}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}
