import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Chat from "../pages/Chat";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Chat" element={<Chat />} />
    </Routes>
  );
}

export default Router;
