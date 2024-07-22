import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/UserProgressContext";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const contx = useContext(UserProgressContext);
  const { items } = useContext(CartContext);
  const cartTotal = items.reduce((accum, eachItem) => {
    return accum + eachItem.price * eachItem.quantity;
  }, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  function handleClose() {
    contx.hideCheckout();
  }

  function sendOrderToBackend(custData) {
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: items,
          customer: custData,
        },
      }),
    });
  }

  return (
    <Modal open={contx.progress === "checkout"}>
      <form
        onSubmit={handleSubmit((data) => {
          sendOrderToBackend(data);
          console.log("data is ", data);
          contx.hideCheckout();
        })}
      >
        <h2>Checkout</h2>
        <p>Total Amount: {cartTotal} </p>
        <Input
          label="Full Name"
          type="text"
          id="name"
          name="name"
          register={register}
          validationRule={{
            required: "Full Name is required",
            validate: {
              minLength: (value) =>
                value.length >= 3 ||
                "Full Name must be at least 3 characters long",

              rjerror: (value) =>
                value.charAt(0) === "R" || "First Letter must be R",
              // Additional custom validations can be added here
            },
          }}
          errors={errors}
        />
        <Input
          type="email"
          label="Email"
          id="email"
          name="email"
          register={register}
          validationRule={{ required: "Email is required" }}
          errors={errors}
        />
        <Input
          type="text"
          label="Street"
          id="street"
          name="street"
          register={register}
          errors={errors}
        />

        <div className="control-row">
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            name="postal-code"
            register={register}
            errors={errors}
          />
          <Input
            label="City"
            type="text"
            id="city"
            name="city"
            register={register}
            errors={errors}
          />
        </div>
        <p className="modal-actions">
          <Button type="button" txtOnly onClick={handleClose}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
