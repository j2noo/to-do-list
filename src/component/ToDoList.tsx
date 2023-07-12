import { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

interface IForm {
  toDo: string;
}
interface IToDo {
  id: number;
  text: string;
  categoty: "DONE" | "DOING" | "TO_DO";
}
const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });
function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, categoty: "TO_DO" }, ...prev]);
    setValue("toDo", ""); //toDo input의 값을 지움
    console.log(toDos);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo")} placeholder="할 일을 작성핫요"></input>
        <button>추가</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
