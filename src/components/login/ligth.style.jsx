import React from "react";
import { styled } from "styled-components";

const STLigthArea = () => {
  return (
    <STLigthBox>
      <STLight size="L" color="white">
        <STLight size="Inner" color="#0997C9"></STLight>
      </STLight>
      <STLight color="#DA2935"></STLight>
      <STLight color="#FED717"></STLight>
      <STLight color="#405328"></STLight>
    </STLigthBox>
  );
};

export default STLigthArea;

const STLigthBox = styled.div`
  padding: 20px 0 30px 20px;
  width: 100%;
  display: flex;
  gap: 10px;
`;

const STLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => {
    switch (props.size) {
      case "L":
        return "60px";
      case "Inner":
        return "48px";
      default:
        return "30px";
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case "L":
        return "60px";
      case "Inner":
        return "48px";
      default:
        return "30px";
    }
  }};
  border-radius: 50%;
  background-color: ${(props) => {
    return props.color ? props.color : "red";
  }};
  border: 3px solid black;
`;
