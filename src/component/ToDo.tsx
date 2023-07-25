import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, allCategoryState, toDoState } from "../atoms";
import { styled } from "styled-components";
const ListComponent = styled.li`
  background-color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 0.3rem 0.5rem;
  div {
    background-color: white;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 5%; // 16*5 + 5*4 = 100, 가로 최대 5개
`;
const BtnComponent = styled.button`
  width: 16%;
  height: 30px;
  border-radius: 5px;
`;

function ToDo({ text, category, id }: IToDo) {
  //const toDos = useRecoilValue(toDoState);
  const [toDos, setToDos] = useRecoilState(toDoState);
  const allCategories = useRecoilValue(allCategoryState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    //const name2: IToDo["category"] = event.currentTarget.name;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      //oldToDos[targetIndex].category = "DONE";

      console.log(oldToDo, newToDo);
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  };
  function deleteClick(event: React.MouseEvent<HTMLButtonElement>) {
    const targetIndex = toDos.findIndex((toDo) => toDo.id === id);
    const deletedTodo = [...toDos.slice(0, targetIndex), ...toDos.slice(targetIndex + 1)];
    setToDos(deletedTodo);
  }
  return (
    <ListComponent>
      <div>{text}</div>
      <BtnContainer>
        {allCategories.map((oneCategory) => {
          if (category !== oneCategory) {
            return (
              <BtnComponent key={oneCategory} name={oneCategory} onClick={onClick}>
                {oneCategory}
              </BtnComponent>
            );
          }
        })}
      </BtnContainer>
      <button onClick={deleteClick}>삭제</button>
    </ListComponent>
  );
}
export default ToDo;
