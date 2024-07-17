import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

/*

{
items:[
{id: 1
quantity:2},
{id: 1
quantity:2},
{id: 1
quantity:2}

]
}
*/

/*
action = {
type:"ADD_ITEM"
payload:{item_obj}
}
*/
function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (itemIndex > -1) {
      const updatedItem = {
        ...state.items[itemIndex],
        quantity: state.items[itemIndex].quantity + 1,
      };

      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  } else if (action.type === "DELETE_ITEM") {
    //find the index
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    //action.items is array of objects. each object containing item and the added quantity value
    const item = state.items[itemIndex];
    let tempItemArr = [...state.items];
    if (item.quantity === 1) {
      tempItemArr.splice(itemIndex, 1);
    } else {
      tempItemArr[itemIndex].quantity = tempItemArr[itemIndex].quantity - 1;
    }

    return { ...state, items: tempItemArr };
  } else return state;
}

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }

  function removeItem(itemID) {
    dispatch({ type: "DELETE_ITEM", id: itemID });
  }

  let cartContext = {
    items: state.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
