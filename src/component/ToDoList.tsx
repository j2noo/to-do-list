import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoState, todoSelector } from "../atoms";
import { styled } from "styled-components";
import SelectTab from "./SelectTab";

const Container = styled.div`
  max-width: 500px;
  background-color: #ecf0f1;
  margin: auto;
`;
const Header = styled.h1`
  text-align: center;
  font-size: 30px;
  padding: 30px;
`;
function ToDoList() {
  const toDos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <Container>
      <Header>진우의 To-Do list - Vercel! CI/CD!</Header>
      <hr></hr>
      <SelectTab></SelectTab>

      <CreateToDo></CreateToDo>
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo}></ToDo>
        ))}
      </ul>
      <hr></hr>
    </Container>
  );
}
export default ToDoList;
