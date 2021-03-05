import { ADDTODO, REMOVETODO, ADDTODOASYNC, REMOVETODOASYNC } from "./constant";

export const addToDo = (payload: string) => {
  return { type: ADDTODO, text: payload };
};
export const removeToDo = (payload: number) => {
  return { type: REMOVETODO, id: payload };
};
export const addToDoItemAsync = (payload: string) => {
  return { type: ADDTODOASYNC, text: payload };
};
export const removeToDoAsync = (payload: number) => {
  return { type: REMOVETODOASYNC, id: payload };
};
type actionType =
  | ReturnType<typeof addToDoItemAsync>
  | ReturnType<typeof removeToDoAsync>;

export default actionType;
