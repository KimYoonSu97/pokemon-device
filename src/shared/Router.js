import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mydoc from "../pages/Mydoc";
import UserRank from "../pages/UserRank";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserSetting from "../pages/UserSetting";
import GlobalModal from "../components/modal/GlobalModal";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/modal" element={}></Route> */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/start" element={<UserSetting />}></Route>
        <Route path="/doc" element={<Mydoc />}></Route>
        <Route path="/doc/:id" element={<Mydoc />}></Route>
        <Route path="/trainer" element={<UserRank />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
