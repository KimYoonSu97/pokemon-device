import React from "react";
import { styled } from "styled-components";
import LoginForm from "./LoginForm";
import STLigthArea from "./ligth.style";
import SignUpForm from "./SignUpForm";
import UserSettingForm from "./UserSettingForm";

const Device = ({ state }) => {
  // console.log(state);
  const RenderFilter = (state) => {
    switch (state) {
      case "login":
        return <LoginForm></LoginForm>;
      case "signUp":
        return <SignUpForm></SignUpForm>;
      case "setting":
        return <UserSettingForm></UserSettingForm>;
      default:
        break;
    }
  };

  return (
    <STDevice>
      <STLigthArea></STLigthArea>
      <STContainer>{RenderFilter(state)}</STContainer>
    </STDevice>
  );
};

export default Device;

const STDevice = styled.div`
  width: 400px;
  height: 530px;
  background-color: #d31c29;
  border-radius: 35px;
  border: 7px solid black;
  overflow: hidden;
`;
const STContainer = styled.div`
  display: flex;
  justify-content: center;
`;
