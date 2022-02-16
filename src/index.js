import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NewApp from "./NewApp";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import reducers from "./reducers/index";
import { Provider } from "react-redux";

// //actions
// const petIncrement = () => {
//   return {
//     type: "PET_INCREASED",
//   };
// };
// const petDecrement = () => {
//   return {
//     type: "PET_DECREASED",
//   };
// };

// //reducer
// const petCounter = (state = 0, action) => {
//   switch (action.type) {
//     case "PET_INCREASED":
//       return state + 1;

//     case "PET_DECREASED":
//       return state - 1;

//     default:
//       return state;
//   }
// };

// let store = createStore(petCounter);
// store.subscribe(() => console.log(store.getState()));

// //Dispatch the action
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petDecrement());

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <NewApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
