import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { petDecrement, petIncrement } from "./actions/index";

function NewApp() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavourite = useSelector((state) => state.petFavourite);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Welcome to react-redux CC</h1>
      <button onClick={() => dispatch(petIncrement())}>Add pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove pet</button>
      <h1>Pet counter = {petCounter}</h1>
      <h1>Favourite pets = {petFavourite}</h1>
    </div>
  );
}

export default NewApp;
