import { Item } from "./item";
import style from "./Lista.module.scss";
import { ITarefa } from "../../types";

interface IListaProps {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export function Lista({ tarefas, selecionaTarefa }: IListaProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(
          //map(item,index)
          (item) => (
            //colocar o key sempre que fizer map
            <Item
              selecionaTarefa={selecionaTarefa}
              key={item.id}
              {...item} //spread
            />
          )
        )}
      </ul>
    </aside>
  );
}
