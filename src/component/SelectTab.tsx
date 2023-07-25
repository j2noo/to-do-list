import { styled } from "styled-components";
import { Categories, categoryState } from "../atoms";
import { useRecoilState } from "recoil";

const CategoryTab = styled.button<{ isSelected: boolean }>`
  margin: 10px;
  padding: 10px;
  color: ${(props) => (props.isSelected ? "red" : "blue")};
`;

function SelectTab() {
  const [category, setCategory] = useRecoilState(categoryState);
  function categoryClicked(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value as Categories);
  }
  return (
    <>
      <CategoryTab isSelected={category == Categories.TO_DO} value={Categories.TO_DO} onClick={categoryClicked}>
        todo
      </CategoryTab>
      <CategoryTab isSelected={category == Categories.DOING} value={Categories.DOING} onClick={categoryClicked}>
        doing
      </CategoryTab>
      <CategoryTab isSelected={category == Categories.DONE} value={Categories.DONE} onClick={categoryClicked}>
        done
      </CategoryTab>
    </>
  );
}

export default SelectTab;
