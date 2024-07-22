import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { loginActions } from "../store";
import { useDispatch } from "react-redux";
const Header = () => {
  const loginStatus = useSelector((state) => state.reducer2.logiStatus);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(loginActions.doLogout());
  }
  return (
    <>
      {loginStatus && (
        <header className={classes.header}>
          <h1>Redux Auth</h1>
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </header>
      )}

      {!loginStatus && (
        <>
          <p>Not Authorised</p>
        </>
      )}
    </>
  );
};

export default Header;
