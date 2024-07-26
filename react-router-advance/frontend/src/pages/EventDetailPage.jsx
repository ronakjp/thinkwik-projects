import React from "react";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  const { eid } = useParams();
  const d = useRouteLoaderData('event-data-loader');
  console.log("D", d);
  return (
    <>
      <h1>EventDetailPage EId is {eid}</h1>
      <EventItem event={d} />
    </>
  );
};

export async function eachEventLoader({ request, params }) {
  console.log("REQ is ", request);
  console.log("Param is ", params);
  const response = await fetch(`http://localhost:8080/events/${params.eid}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Custom Response" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();

    return resData.event;
  }
}

export default EventDetailPage;
