import { createStore } from "redux";
import tasksReducer from "./Reducer";
import { loadState,saveState } from "./localstorage";

const persistedState = loadState();

const store = createStore(tasksReducer,persistedState);

store.subscribe(()=>{
    saveState({
        items: store.getState().items
    })
  })

export default store;