import { createStore } from "redux";

export const store = createStore(reducers, {},applyMiddleware(thunk));
