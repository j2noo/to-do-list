import { useState } from "react";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState, todoSelector } from "../atoms";

function ToDoList() {
  const toDos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr></hr>
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo></CreateToDo>
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
}
export default ToDoList;
