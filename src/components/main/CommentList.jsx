import React from "react";
import CommentCard from "./CommentCard";
import CommentInputForm from "./CommentInputForm";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const CommentList = () => {
  const { diarys, loginUserId } = useSelector((state) => ({
    diarys: state.diaryReducer,
    loginUserId: state.loginUserReducer.id,
  }));

  return (
    <Inner>
      {diarys[0]?.userId === loginUserId ? (
        <>
          <Title>일기쓰기</Title>
          <CommentInputForm></CommentInputForm>
        </>
      ) : (
        ""
      )}
      <Title>지난 일기</Title>
      {diarys?.map((diary) => {
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
