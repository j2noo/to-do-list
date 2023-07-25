import { styled } from "styled-components";
import { Categories, allCategoryState, categoryState } from "../atoms";
import { useRecoilState } from "recoil";

const CategoryTab = styled.button<{ $isSelected?: boolean }>`
  margin: 10px;
  padding: 10px;
  color: ${(props) => (props.$isSelected ? "red" : "blue")};
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
      alert("이미 존재하는 카테고리 입니다!");
      return;
    }

    setAllCategories((curr) => [...curr, newCategory]);
  }

  console.log(allCategories);
  return (
    <>
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
    </>
  );
}

export default SelectTab;
