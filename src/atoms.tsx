import { atom, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
export interface IToDo {
  id: number;
  text: string;
  categoty: "DONE" | "DOING" | "TO_DO";
}
export const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });
