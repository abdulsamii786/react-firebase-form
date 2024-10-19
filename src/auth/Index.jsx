import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const Index = () => [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <SignIn /> },
  { path: "/dashboard", element: <Dashboard /> },
];

export default Index;
