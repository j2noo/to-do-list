import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoState, todoSelector } from "../atoms";
import { styled } from "styled-components";
import SelectTab from "./SelectTab";

function ToDoList() {
  const toDos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr></hr>
      <SelectTab></SelectTab>

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
