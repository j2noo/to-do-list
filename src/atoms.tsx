import { atom, selector } from "recoil";
export enum Categories {
  "TO_DO" = "할 일",
  "DOING" = "하는 중",
  "DONE" = "완료",
}
export interface IToDo {
  id: number;
  text: string;
  category: string;
}
export const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });
export const categoryState = atom<Categories>({ key: "category", default: Categories.TO_DO });
export const todoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    console.log(category);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

export const allCategoryState = atom<string[]>({
  key: "allCategory",
  default: [Categories.TO_DO, Categories.DOING, Categories.DONE],
});
