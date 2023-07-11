import React from "react";
import { styled } from "styled-components";

const BackGround = ({ page, user }) => {
  return (
    <>
      <STMosterBallContainer page={page ? page : ""}>
        <STMonsterBall page={page ? page : ""}></STMonsterBall>
        <STMonsterBall page={page ? page : ""}></STMonsterBall>
      </STMosterBallContainer>
      <STBackColor user={user ? user : ""}></STBackColor>
    </>
  );
};
export default BackGround;

const STBackColor = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: ${(props) => {
    switch (props.user) {
      case "another":
        return `#26407D`;

      default:
        return `#d31c29`;
    }
  }};
  /* background-color: #d31c29; */
  position: fixed;
  top: 0;
  z-index: -999;
`;

const STMosterBallContainer = styled.div`
  width: ${(props) => {
    switch (props.page) {
      case "doc":
        return `calc(100vw * 0.6)`;

      default:
        return `calc(100vw * 0.7) `;
    }
  }};
  height: 360px;
  position: fixed;
  /* top: calc(100vh / 2 - 180px); */
  top: ${(props) => {
    switch (props.page) {
      case "doc":
        return `calc(100vh / 2 - 75px)`;

      default:
        return `calc(100vh / 2 - 180px) `;
    }
  }};
  left: ${(props) => {
    switch (props.page) {
      case "doc":
        return `calc((100vw - (100vw * 0.6)) / 2)`;

      default:
        return `calc((100vw - (100vw * 0.7)) / 2)`;
    }
  }};
  /* left: calc((100vw - (100vw * 0.7)) / 2); */
  display: flex;
  justify-content: space-between;
  z-index: -998;
`;

const STMonsterBall = styled.div`
  width: ${(props) => {
    switch (props.page) {
      case "doc":
        return "150px";

      default:
        return "360px";
    }
  }};
  height: ${(props) => {
    switch (props.page) {
      case "doc":
        return "150px";

      default:
        return "360px";
    }
  }};
  background-image: url("https://i.ibb.co/NNh8H67/img.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
