import { styled } from "styled-components";

export const STModalBackColor = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* background-color: #d31c29; */
  position: fixed;
  top: 0;
  /* z-index: 1; */
`;

export const STModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
`;

export const STModalBox = styled.div`
  width: 800px;
  height: 450px;
  background-color: white;
  z-index: 999;
  border: 3px solid black;
  position: fixed;
  top: calc((100vh - 500px) / 2);
  left: calc((100vw - 800px) / 2);
  padding: 30px;
`;
