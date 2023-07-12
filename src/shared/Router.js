import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mydoc from "../pages/Mydoc";
import UserRank from "../pages/UserRank";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mydoc />}></Route>
        <Route path="/:id" element={<Mydoc />}></Route>
        <Route path="/trainer" element={<UserRank />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
