import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEventPage = () => {
  return (
    <>
      <h1>NewEventPage</h1>
      <EventForm />
    </>
  );
};

export async function handleOnSubmit({ request, params }) {
  const data = await request.formData();

  const filledFormData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  console.log("filledFormData ", filledFormData);

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(filledFormData),
  });

  console.log(response);
  if (!response.ok) {
    console.log("inside");
    throw json({ message: "Could not do it" });
  }

  console.log("Reasponse", response);

  return redirect("/events");
}

export default NewEventPage;
