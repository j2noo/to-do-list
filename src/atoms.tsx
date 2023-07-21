import { atom, selector } from "recoil";
export enum Categories {
  "TO_DO"="TO_DO",
  "DOING"="DOING",
  "DONE"="DONE",
}
export interface IToDo {
  id: number;
  text: string;
  category: Categories;
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
