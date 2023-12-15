import { createBrowserRouter } from "react-router-dom";

import { CVPage, Layout, Me } from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/cv", element: <CVPage /> },
      { path: "/me", element: <Me /> },
    ],
  },
]);

export default routes;
