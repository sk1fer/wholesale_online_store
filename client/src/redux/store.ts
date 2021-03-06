import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./reducers/catalogMenu.reducer";
import deliveryReducer from "./reducers/delivery.reducer";
import aboutReducer from "./reducers/about.reducer";
import contactsReducer from "./reducers/contacts.reducer";
import brandsReducer from "./reducers/brands.reducer";
import catalogMenuReducer from "./reducers/catalogMenu.reducer";

let rootReducer = combineReducers({
  catalogPage: catalogReducer,
  deliveryPage: deliveryReducer,
  aboutPage: aboutReducer,
  contactsPage: contactsReducer,
  brands: brandsReducer,
  catalogMenu: catalogMenuReducer,
});

const initialState = {};
const middleware = [thunk];

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// @ts-ignore
window.__store__ = store;

export default store;
