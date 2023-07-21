import { useForm } from "react-hook-form";
import { categoryState, toDoState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
interface IForm {
  toDo: string;
}
function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const category = useRecoilValue(categoryState);
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, category: category}, ...prev]);
    setValue("toDo", ""); //toDo input의 값을 지움
    //console.log(toDos);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("toDo")} placeholder="할 일을 작성핫요"></input>
      <button>추가</button>
    </form>
  );
}
export default CreateToDo;
