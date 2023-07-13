import { useState } from "react";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr></hr>
      <CreateToDo></CreateToDo>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
