import React from "react";
import UserCard from "./UserCard";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  return (
    <Inner>
      <UserCard>{/* <Link to={`/doc/${user.id}`}></Link> */}</UserCard>
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
