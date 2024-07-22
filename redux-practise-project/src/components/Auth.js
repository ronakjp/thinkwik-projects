import classes from "./Auth.module.css";
import { loginActions } from "../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.reducer2.logiStatus);
  function handleLogin() {
    dispatch(loginActions.doLogin());
  }
  return (
    <main className={classes.auth}>
      <section>
        {!loginStatus && (
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button onClick={handleLogin}>Login</button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Auth;
