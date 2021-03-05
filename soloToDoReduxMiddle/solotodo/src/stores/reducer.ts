import actionType from "../action/action.";
import { combineReducers } from "redux";
import { ADDTODOASYNC, REMOVETODOASYNC } from "../action/constant";



export interface ReducerState {
  id: number;
  text: string;
}

const initialState: ReducerState[] = [
  {
    id: 0,
    text: "test",
  },
];

const reducer = (
  state: ReducerState[] = initialState,
  action: actionType
): ReducerState[] => {
  switch (action.type) {
    case ADDTODOASYNC: {
      return state.concat({ text: action.text, id: Date.now()});
    }
    case REMOVETODOASYNC: {
      return state.filter((item) => action.id === item.id);
    }
    default:
      return state;
  }
};


export default reducer;
// export default reducer;
