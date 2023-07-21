import { useState } from "react";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoState, todoSelector } from "../atoms";

function ToDoList() {
  const [toDos, doing, done] = useRecoilValue(todoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr></hr>
      <CreateToDo></CreateToDo>
      <h2>To Do</h2>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>{" "}
      <hr></hr>
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>{" "}
      <hr></hr>
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
