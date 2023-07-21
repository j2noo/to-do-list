import { atom, selector } from "recoil";
type categories = "DONE" | "DOING" | "TO_DO";
export interface IToDo {
  id: number;
  text: string;
  category: categories;
}
export const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });
export const categoryState = atom<categories>({ key: "category", default: "TO_DO" });
export const todoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    console.log(category);
    return toDos.filter((toDo) => toDo.category === category);
    if (category === "TO_DO") return toDos.filter((toDo) => toDo.category === "TO_DO");
    if (category === "DOING") return toDos.filter((toDo) => toDo.category === "DOING");
    if (category === "DONE") return toDos.filter((toDo) => toDo.category === "DONE");
  },
});
