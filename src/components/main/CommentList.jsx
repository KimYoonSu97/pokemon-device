import React from "react";
import CommentCard from "./CommentCard";
import CommentInputForm from "./CommentInputForm";
import { styled } from "styled-components";
import useLoginUserId from "../../hooks/useGetUserId";
import { getDiaryData } from "../../api/fetchData";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const CommentList = () => {
  const { loginUserId } = useLoginUserId();
  const param = useParams();
  let id;
  if (param.id) {
    id = param.id;
  } else {
    id = loginUserId;
  }

  const { isLoading, isError, data } = useQuery(["getDiaryData", id], () =>
    getDiaryData(id)
  );

  if (isLoading) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러남.. 새로고침 하세요..</p>;
  }

  return (
    <Inner>
      {!param.id ? (
        <>
          <Title>일기쓰기</Title>
          <CommentInputForm></CommentInputForm>
        </>
      ) : (
        ""
      )}
      <Title>지난 일기</Title>
      {data?.map((diary) => {
        return <CommentCard key={diary.id} diary={diary}></CommentCard>;
      })}
      <EmptyBox></EmptyBox>
    </Inner>
  );
};

export default CommentList;

const Inner = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title = styled.p`
  font-size: 32px;
  text-align: center;
`;

const EmptyBox = styled.div`
  width: 10px;
  height: 200px;
`;
