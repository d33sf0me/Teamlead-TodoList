import { combineReducers, createStore } from "redux";
import getTasks from './getTasks'


const TodoList1 = [
  { name: 'walk the dog', isChecked: false },
  { name: 'finish the project', isChecked: false },
  { name: 'go to the gym', isChecked: false },
]

const tasks = getTasks()
console.log(tasks)


const reducerTodoList = (state = TodoList1, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = { name: action.payload, isChecked: false };
      return [newTask, ...state];

    case "MOVING_TASK":
      const index = state.findIndex(task => task.name === action.payload.name);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state, action.payload];

    case "DELETE_TASK":
      let NewState = state.filter(function(task) { return task.name !== action.payload })
      return NewState;

    case "FILTER_TASKS":
      const FiltredList = state.filter(function(task) { return task.isChecked === action.payload })
      if (FiltredList.length === 0){
        return state; 
      } else return FiltredList; 
       
    
    case "UNFILTER_TASKS":
      return  action.payload

    default:
      return state;
  }
};

const reducers = combineReducers({
  TodoList: reducerTodoList,
});

export const store = createStore(reducers);