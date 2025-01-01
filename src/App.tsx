import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 onClick={handleIncrement}>Counter with Redux</h1>
      <button>Increment</button>
      <div>0</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
