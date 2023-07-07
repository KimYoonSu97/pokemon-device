import React from "react";
import { styled } from "styled-components";

const Login = () => {
  return (
    <STContainer>
      <STLogo></STLogo>
      <STDevice> 로그인</STDevice>
      <StEmptyBox></StEmptyBox>
      <STMosterBallContainer>
        <STMonsterBall></STMonsterBall>
        <STMonsterBall></STMonsterBall>
      </STMosterBallContainer>
      <STBackColor></STBackColor>
    </STContainer>
  );
};

export default Login;

const STDevice = styled.div`
  width: 400px;
  height: 530px;
  background-color: #d31c29;
  border-radius: 35px;
  border: 7px solid black;
`;

const STContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const STBackColor = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #d31c29;
  position: absolute;
  top: 0;
  z-index: -999;
`;

const STMosterBallContainer = styled.div`
  width: calc(100vw * 0.7);
  height: 360px;
  /* margin: calc(100vh / 2 - 180px) auto; */
  position: fixed;
  top: calc(100vh / 2 - 180px);
  left: calc((100vw - (100vw * 0.7)) / 2);
  display: flex;
  justify-content: space-between;
  z-index: -998;
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

const STMonsterBall = styled.div`
  width: 360px;
  height: 360px;
  background-image: url("https://i.ibb.co/NNh8H67/img.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
