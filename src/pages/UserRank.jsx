import React from "react";
import BackGround from "../components/BackGround";
import { styled } from "styled-components";
import UserList from "../components/userRank/UserList";
import { useNavigate } from "react-router-dom";
import useTokenCheck from "../hooks/useCheckToken";

const UserRank = () => {
  const { tokenChecker } = useTokenCheck();

  const navigate = useNavigate();
  const returnMydoc = () => {
    navigate("/doc");
  };

  return (
    <>
      <STLogo onClick={returnMydoc}></STLogo>
      <STInner>
        <UserList></UserList>
      </STInner>
      <BackGround point="doc"></BackGround>
    </>
  );
};

export default UserRank;

const STInner = styled.div`
  width: 800px;
  padding-top: 120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const STLogo = styled.div`
  width: 100%;
  height: 77px;
  top: 20px;
  position: fixed;
  background-image: url("https://i.ibb.co/CJXGqXr/image.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
