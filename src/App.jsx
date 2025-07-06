import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.StrictMode>
      <ToastContainer />
      <RouterProvider router={AppRoutes} />
    </React.StrictMode>
  );
}

export default App;
