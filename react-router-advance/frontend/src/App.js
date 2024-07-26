// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import EventDetailPage, { eachEventLoader } from "./pages/EventDetailPage";
import NewEventPage, { handleOnSubmit } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootEventLayout from "./pages/RootEventLayout";
import Error from "./pages/Error";
// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "events",
        element: <RootEventLayout />,
        errorElement: <Error />,
        children: [
          {
            path: "",
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eid",
            id: "event-data-loader",
            loader: async ({ request, params }) => {
              const response = await fetch(
                `http://localhost:8080/events/${params.eid}`
              );

              if (!response.ok) {
                throw new Response(
                  JSON.stringify({ message: "Custom Response" }),
                  {
                    status: 500,
                  }
                );
              } else {
                const resData = await response.json();

                console.log("resData.event", resData.event);
                return resData.event;
              }
            },
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },

              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: handleOnSubmit },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
