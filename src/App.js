import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { petDecrement, petIncrement, getUsers } from "./actions/index";

function App() {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      <h1>Welcome to react-redux-saga CC</h1>
      {loading && <h2>Loading....</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user) => <h3 key={user.id}>{user.username}</h3>)}
    </div>
  );
}

export default App;
