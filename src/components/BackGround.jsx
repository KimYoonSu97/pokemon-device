import React from "react";
import { styled } from "styled-components";

const BackGround = ({ point, user }) => {
  return (
    <>
      <STMosterBallContainer point={point ? point : ""}>
        <STMonsterBall point={point ? point : ""}></STMonsterBall>
        <STMonsterBall point={point ? point : ""}></STMonsterBall>
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
  position: fixed;
  top: 0;
  z-index: -999;
`;

const STMosterBallContainer = styled.div`
  width: ${(props) => {
    switch (props.point) {
      case "doc":
        return `calc(100vw * 0.6)`;

      default:
        return `calc(100vw * 0.7) `;
    }
  }};
  height: 360px;
  position: fixed;
  top: ${(props) => {
    switch (props.point) {
      case "doc":
        return `calc(100vh / 2 - 75px)`;

      default:
        return `calc(100vh / 2 - 180px) `;
    }
  }};
  left: ${(props) => {
    switch (props.point) {
      case "doc":
        return `calc((100vw - (100vw * 0.6)) / 2)`;

      default:
        return `calc((100vw - (100vw * 0.7)) / 2)`;
    }
  }};
  display: flex;
  justify-content: space-between;
  z-index: -998;
`;

const STMonsterBall = styled.div`
  width: ${(props) => {
    switch (props.point) {
      case "doc":
        return "150px";

      default:
        return "360px";
    }
  }};
  height: ${(props) => {
    switch (props.point) {
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
