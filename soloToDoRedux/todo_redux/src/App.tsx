import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./modules/counter";
import { RootState } from "./modules/index";

function App() {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const list = useSelector((store: RootState) => store.todoReducer);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const addInput = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  const remove = (id: number) => {
    dispatch(removeTodo(id));
  } 
  return (
    <div>
      <input onChange={changeInput} value={input} />
      <button onClick={addInput}>입력</button>
      <ul>
        {list.map((item) => {
          console.log(item);
          return (
            <>
              <li>
                {item.text}
                <button onClick={()=>remove(item.id)}>삭제</button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
