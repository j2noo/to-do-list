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
    console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value as Categories);
  }
  
  console.log(allCategories);
  return (
    <>
      {allCategories.map((oneCategory) => (
        <CategoryTab isSelected={category == oneCategory} value={oneCategory} onClick={categoryClicked}>
          {oneCategory}
        </CategoryTab>
      ))}
      
      <CategoryTab>추가</CategoryTab>
    </>
  );
}

export default SelectTab;
