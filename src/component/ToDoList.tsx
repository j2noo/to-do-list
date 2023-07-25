import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoState, todoSelector } from "../atoms";
import { styled } from "styled-components";

const SelectTab = styled.div`
  display: flex;
`;
const CategoryTab = styled.button<{ isSelected: boolean }>`
  margin: 10px;
  padding: 10px;
  color: ${(props) => (props.isSelected ? "red" : "blue")};
`;

function ToDoList() {
  const toDos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  // const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
  //   setCategory(event.currentTarget.value as any);
  // };
  function categoryClicked(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value as Categories);
  }
  return (
    <div>
      <h1>To Dos</h1>
      <hr></hr>
      <SelectTab>
        <CategoryTab isSelected={category == Categories.TO_DO} value={Categories.TO_DO} onClick={categoryClicked}>
          todo
        </CategoryTab>
        <CategoryTab isSelected={category == Categories.DOING} value={Categories.DOING} onClick={categoryClicked}>
          doing
        </CategoryTab>
        <CategoryTab isSelected={category == Categories.DONE} value={Categories.DONE} onClick={categoryClicked}>
          done
        </CategoryTab>
      </SelectTab>

      {/* <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select> */}
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
