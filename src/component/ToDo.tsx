import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  //const toDos = useRecoilValue(toDoState);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    //const name2: IToDo["category"] = event.currentTarget.name;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      console.log(targetIndex);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      //oldToDos[targetIndex].category = "DONE";

      console.log(oldToDo, newToDo);
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO + ""} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ""} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ""} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
export default ToDo;
