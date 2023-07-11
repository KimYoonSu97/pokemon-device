import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mydoc from "../pages/Mydoc";
import GlobalModal from "../components/modal/GlobalModal";
import Test from "../Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
        {/* <Route path="/user" element={<UserSetting />}></Route> */}
        <Route path="/" element={<Mydoc />}></Route>
        {/* <Route path="/trainer" element={<UserRank />}></Route> */}
        {/* <Route path="/doc/:id" element={<AnotherUserDoc />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
