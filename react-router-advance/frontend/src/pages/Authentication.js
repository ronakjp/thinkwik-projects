import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";
function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  console.log("action called");
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  console.log(mode);

  if (mode !== "login" && mode !== "signup") {
    console.log("inside not login not signiup");
    throw json({ mesaage: "Unsupported mode" }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  console.log(authData);

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });

  console.log(response);
  if (response.status === 422 || response.status === 401) {
    //for showing any user side validation errors
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }

  const responseJson = await response.json();
  const token = responseJson.token;

  localStorage.setItem("token", token);
  console.log("token is ", token);

  return redirect("/");
}
