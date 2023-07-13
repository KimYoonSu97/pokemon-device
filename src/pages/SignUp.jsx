import React from "react";
import { styled } from "styled-components";
import BackGround from "../components/BackGround";
import Device from "../components/login/Device";
import { useNavigate } from "react-router-dom";
import useLoginUserId from "../hooks/useGetUserId";

const SignUp = () => {
  return (
    <>
      <STContainer>
        <STLogo></STLogo>
        <Device state="signUp"></Device>

        <StEmptyBox></StEmptyBox>
      </STContainer>
      <BackGround></BackGround>
    </>
  );
};

export default SignUp;

const STContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const STLogo = styled.div`
  width: 300px;
  height: 120px;
  background-image: url("https://i.ibb.co/CJXGqXr/image.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const StEmptyBox = styled.div`
  width: 300px;
  height: 120px;
`;
