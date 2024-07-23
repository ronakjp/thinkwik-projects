import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { userActions, fetchUsersFromAPI } from "../../store/userSlice";
const Cart = (props) => {
  const stateVar = useSelector((state) => state.uiReducer.cartIsVisible);
  const userArr = useSelector((state) => state.userReducer.users);

  const dispatch = useDispatch();
  const [listOfUser, setListOfUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsersFromAPI());
  }, []);

  function handleButtonClick(id) {
    console.log("id", id);
    dispatch(userActions.removeUser(id));
  }

  return (
    <Card className={classes.cart}>
      {stateVar && (
        <>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
            />
          </ul>
        </>
      )}

      {userArr.map((item) => (
        <button onClick={() => handleButtonClick(item.id)}>{item.name}</button>
      ))}
    </Card>
  );
};

export default Cart;
