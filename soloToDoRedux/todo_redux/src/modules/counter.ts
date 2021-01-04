let id = 0;

const ADD_TODO = "modules/ADD_TODO" as const;
const REMOVE_TODO = "modules/REMOVE_TODO" as const;

export const addTodo = (payload: string) => ({ type: ADD_TODO, text: payload });
export const removeTodo = (payload: number) => ({
  type: REMOVE_TODO,
  id: payload,
});

type ActionType = ReturnType<typeof addTodo> | ReturnType<typeof removeTodo>;

type Todo = {
  id: number;
  text: string;
};
type TodoStateType = Todo[];
const todoState: TodoStateType = [
  {
    id: id,
    text: "기획",
  },
];
 const todoReducer = (state: TodoStateType = todoState, action: ActionType) => {
  switch (action.type) {
    case ADD_TODO:{
        id++;
        return state.concat({ text: action.text, id: id });
    }
    case REMOVE_TODO:{
        return state.filter(item => item.id !== action.id)
    }
    default: return state;
  }
};
export default todoReducer;