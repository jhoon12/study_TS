import React, { useState } from "react";
import { addToDo } from "./action/action.";
import { useSelector, useDispatch } from "react-redux";
import reducer, {ReducerState} from './stores/reducer';
function App() {
  const [text, setText] = useState<string>("");
  const store = useSelector((store : ReducerState[]) => store);
  const dispatch = useDispatch();
  console.log(store)
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
            setText('');
          }}
        >
          입력
        </button>
      </div>
      <ul>
       {
         store.map(ele =>(
           <li>{ele.text}</li>
         ))
       }
      </ul>
    </>
  );
}

export default App;
