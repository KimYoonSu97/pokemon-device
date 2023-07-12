import React, { useEffect } from "react";
import BackGround from "../components/BackGround";
import { styled } from "styled-components";
import UserList from "../components/userRank/UserList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllUser } from "../redux/modules/allUserSlice";

const UserRank = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAllUser = async () => {
    const { data } = await axios.get("http://localhost:4000/users");
    dispatch(setAllUser(data));
  };
  useEffect(() => {
    const fetchDatas = async () => {
      await getAllUser();
    };
    fetchDatas();
  }, []);

  return (
    <>
      <STLogo
        onClick={() => {
          navigate("/");
        }}
      ></STLogo>
      <STInner>
        <UserList></UserList>;
      </STInner>
      <BackGround page="doc"></BackGround>
    </>
  );
};

export default UserRank;

const STInner = styled.div`
  width: 800px;
  padding-top: 120px;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
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
const STBtnArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
