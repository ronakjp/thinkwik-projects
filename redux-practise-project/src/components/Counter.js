import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store";
const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector((state) => state.reducer1.counter);

  const toggle = useSelector((state) => state.reducer1.toggle);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  function handleToggle() {
    dispatch(counterActions.toggle());
  }

  return (
    <main className={classes.counter}>
      <h1> Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={handleIncrement}> Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
