import React from "react";
import UserCard from "./UserCard";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const UserList = () => {
  const { alluser, loginUserId } = useSelector((state) => ({
    alluser: state.allUserReducer,
    loginUserId: state.loginUserReducer.id,
  }));

  return (
    <Inner>
      {alluser
        .filter((item) => {
          return item.id !== loginUserId;
        })
        .map((user) => {
          return <UserCard key={user.id} user={user}></UserCard>;
        })}
    </Inner>
  );
};

export default UserList;

const Inner = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
