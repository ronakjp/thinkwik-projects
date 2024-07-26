import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
const EditEventPage = () => {
  const data = useRouteLoaderData("event-data-loader");
  console.log("got in edit event", data);
  return (
    <>
      <h1>EditEventPage</h1>
      <EventForm event={data} />
    </>
  );
};

export default EditEventPage;
