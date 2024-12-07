import { ITarefa } from "../../../types";
import style from './Item.module.scss';

interface IItemProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export const Item = ({
  tarefa,
  tempo,
  selecionado,
  completo,
  id,
  selecionaTarefa
}: IItemProps) => {
  //const {tarefa, tempo} = props;
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completo ? style.itemCompletado: ''}`}
      onClick={() => !completo &&
        selecionaTarefa({
          tarefa,
          tempo,
          selecionado,
          completo,
          id
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completo && <span className={style.concluido}
      aria-label="tarefa completada"></span>}
    </li>
  );
};
