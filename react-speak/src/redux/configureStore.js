<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./modules";

const store = configureStore({ reducer: rootReducer });
=======
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import speak from "./modules/speak";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares)
const rootReducer = combineReducers({ speak });
const store = createStore(rootReducer, enhancer);

export default store;
>>>>>>> main
