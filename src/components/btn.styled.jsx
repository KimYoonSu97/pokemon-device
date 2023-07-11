import { styled } from "styled-components";

export const Btn = styled.button`
  width: ${(props) => {
    return props.width ? props.width + "px" : "";
  }};
  padding: 10px 30px;
  font-size: 24px;
  background-color: ${(props) => {
    switch (props.state) {
      case "disable":
        return "rgba(0, 0, 0, 0.1)";
      case "red":
        return "#D31C29";
      default:
        return "#0997C9";
    }
  }};
  color: ${(props) => {
    switch (props.state) {
      case "disable":
        return "rgba(0, 0, 0, 0.6)";
      case "red":
        return "#FFFF00";
      default:
        return "#FFFF00";
    }
  }};
  outline: none;
  border: 3px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.5s;
    cursor: pointer;
  }
`;
