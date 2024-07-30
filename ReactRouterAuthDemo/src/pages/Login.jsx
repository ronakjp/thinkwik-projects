import { Form } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import React from "react";
const Login = () => {
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    console.log("Logigng IN....");
    login("ronak");
    console.log(data.get("email"));
    console.log(data.get("password"));
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" /> <br />
        <label>Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

export function loginLoader({ request, params }) {
  console.log("loader request ,", request);
  console.log("loader params ,", params);

  return null;
}

export async function loginAction({ request }) {
  const data = await request.formData();

  const userLoginData = {
    email: data.get("email"),
    password: data.get("password"),
  };
}
