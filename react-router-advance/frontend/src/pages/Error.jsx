import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error.status);
  let title = "";
  let message = "";

  if (error.status === 404) {
    title = "not found ";
    message = "Not found the resource";
  }
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  return <PageContent title={title}>{message}</PageContent>;
};

export default Error;
