import {combineReducers} from 'redux';
import todoReducer from './counter';

const rootReducer = combineReducers({
    todoReducer
})
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;