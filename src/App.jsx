import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./auth/Index";
import { ToastContainer } from "react-toastify";

const App = () => {
  const routes = Index();
  return (
    <div>
      <Routes>
        {routes.map((item, key) => {
          return <Route key={key} element={item.element} path={item.path} />;
        })}
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
