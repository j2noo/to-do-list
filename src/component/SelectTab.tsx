import { styled } from "styled-components";
import { Categories, allCategoryState, categoryState } from "../atoms";
import { useRecoilState } from "recoil";

const CategoryTab = styled.button<{ isSelected?: boolean }>`
  margin: 10px;
  padding: 10px;
  color: ${(props) => (props.isSelected ? "red" : "blue")};
`;

function SelectTab() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [allCategories, setAllCategories] = useRecoilState(allCategoryState);
  function categoryClicked(event: React.MouseEvent<HTMLButtonElement>) {
    setCategory(event.currentTarget.value as Categories);
  }
  function addClicked(event: React.MouseEvent<HTMLButtonElement>) {
    const newCategory = prompt("새로운 카테고리를 입력하세요");
    setAllCategories((curr) => [...curr, newCategory as string]);
  }

  console.log(allCategories);
  return (
    <>
      {allCategories.map((oneCategory) => (
        <CategoryTab
          key={oneCategory}
          isSelected={category == oneCategory}
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
