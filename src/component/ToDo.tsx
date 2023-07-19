import { useRecoilValue } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category }: IToDo) {
  const toDos = useRecoilValue(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    const {
      currentTarget: { name },
    } = event;

    const name2 = event.currentTarget.name;
    console.log(name, name2);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
    </li>
  );
}
export default ToDo;
