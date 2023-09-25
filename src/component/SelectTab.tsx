import { styled } from "styled-components";
import { Categories, allCategoryState, categoryState } from "../atoms";
import { useRecoilState } from "recoil";

const SelectContainer = styled.div`
  background-color: #ecf0f1;
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  gap: 30px 4%;
  & :last-child {
    color: black;
    background-color: #d1d1d19f;
  }
`;
const CategoryTab = styled.button<{ $isSelected?: boolean }>`
  /* margin: 10px;
  padding: 10px; */
  width: 22%;
  height: 50px;
  border: ${(props) => (props.$isSelected ? "3px solid black" : "none")};
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => (props.$isSelected ? "red" : "blue")};
  background-color: white;
  &:hover {
    border: 1px solid black;
  }
`;

function SelectTab() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [allCategories, setAllCategories] = useRecoilState(allCategoryState);
  function categoryClicked(event: React.MouseEvent<HTMLButtonElement>) {
    setCategory(event.currentTarget.value as Categories);
  }
  function addClicked(event: React.MouseEvent<HTMLButtonElement>) {
    const newCategory = prompt("새로운 카테고리를 입력하세요");
    if (newCategory === null) {
      return;
    }
    if (allCategories.includes(newCategory)) {
      alert("이미 존재하는 카테고리 입니다.");
      return;
    }

    setAllCategories((curr) => [...curr, newCategory]);
  }

  return (
    <SelectContainer>
      {allCategories.map((oneCategory) => (
        <CategoryTab
          key={oneCategory}
          $isSelected={category == oneCategory}
          value={oneCategory}
          onClick={categoryClicked}
        >
          {oneCategory}
        </CategoryTab>
      ))}

      <CategoryTab onClick={addClicked}>추가</CategoryTab>
    </SelectContainer>
  );
}

export default SelectTab;
