import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}
function ToDoList() {
  const { register, handleSubmit } = useForm<IForm> ();
  const onSubmit = (data: IForm) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo",)} placeholder="할 일을 작성핫요"></input>
        <button>추가</button>
      </form>
    </div>
  );
}
export default ToDoList;
