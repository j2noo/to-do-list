import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, allCategoryState, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  //const toDos = useRecoilValue(toDoState);
  const [toDos, setToDos] = useRecoilState(toDoState);
  const allCategories = useRecoilValue(allCategoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    //const name2: IToDo["category"] = event.currentTarget.name;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      //oldToDos[targetIndex].category = "DONE";

      console.log(oldToDo, newToDo);
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };
  function deleteClick(event: React.MouseEvent<HTMLButtonElement>) {
    const targetIndex = toDos.findIndex((toDo) => toDo.id === id);
    const deletedTodo = [...toDos.slice(0, targetIndex), ...toDos.slice(targetIndex + 1)];
    setToDos(deletedTodo);
  }
  return (
    <li>
      <span>{text}</span>
      {allCategories.map((oneCategory) => {
        if (category !== oneCategory) {
          return (
            <button key={oneCategory} name={oneCategory} onClick={onClick}>
              {oneCategory}
            </button>
          );
        }
      })}
      <button onClick={deleteClick}>삭제</button>
    </li>
  );
}
export default ToDo;
