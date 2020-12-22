import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addToDo } from "../modules/todos";

export default function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(
    text => {
      dispatch(addToDo(text));
    },
    [dispatch]
  );
}
