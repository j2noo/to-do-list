import { useForm } from "react-hook-form";
import { categoryState, toDoState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "styled-components";
interface IForm {
  toDo: string;
}
const FormComponent = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const InputComponent = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 10px;
`;
const BtnComponent = styled.button`
  height: 40px;
  width: 10%;
  border-radius: 8px;
`;
function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const category = useRecoilValue(categoryState);
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, category: category }, ...prev]);
    setValue("toDo", ""); //toDo input의 값을 지움
    //console.log(toDos);
  };
  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <InputComponent {...register("toDo")} placeholder={`'${category}' 내용을 작성하세요.`}></InputComponent>
      <BtnComponent>추가</BtnComponent>
    </FormComponent>
  );
}
export default CreateToDo;
