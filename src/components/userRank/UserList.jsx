import React from "react";
import UserCard from "./UserCard";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import { getAllUser } from "../../api/fetchData";
import useLoginUserId from "../../hooks/useGetUserId";

const UserList = () => {
  const { loginUserId } = useLoginUserId();

  const { isLoading, isError, data } = useQuery("allUsers", getAllUser);

  if (isLoading) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러남.. 새로고침 하세요..</p>;
  }

  return (
    <Inner>
      {data.data
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
