import React, { useState } from "react";
import { addToDo, removeToDo } from "./action/action.";
import { useSelector, useDispatch } from "react-redux";
import { ReducerState } from "./stores/reducer";
function App() {
  const [text, setText] = useState<string>("");
  const store = useSelector((store: ReducerState[]) => store);
  const dispatch = useDispatch();
  console.log(store);
  return (
    <>
      <div>
        <input
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(addToDo(text));
            setText("");
          }}
        >
          입력
        </button>
      </div>
      <ul>
        {store.map((ele) => (
          <>
            <li>{ele.text}</li>
            <div
              onClick={() => {
                console.log(ele.id)
                dispatch(removeToDo(ele.id));
              }}
            >
              X
            </div>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
