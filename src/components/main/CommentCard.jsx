import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import ConfirmModal from "../modal/ConfirmModal";
import CommentInputForm from "./CommentInputForm";

const CommentCard = ({ diary }) => {
  const { diarys, loginUserId } = useSelector((state) => ({
    diarys: state.diaryReducer,
    loginUserId: state.loginUserReducer.id,
  }));

  const [isOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);

  useEffect(() => {
    setEditIsOpen(false);
  }, [diarys]);

  if (editIsOpen) {
    return <CommentInputForm editDiary={diary}></CommentInputForm>;
  }

  return (
    <>
      {isOpen && (
        <ConfirmModal diaryId={diary.id} setIsOpen={setIsOpen}></ConfirmModal>
      )}
      <CommentBox>
        <div>
          <CommentDate>{diary.postDate}</CommentDate>
          <CommentText>{diary.text}</CommentText>
        </div>
        {diary.userId === loginUserId ? (
          <STBtnArea>
            <TextBtn
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Del
            </TextBtn>
            <TextBtn
              onClick={() => {
                setEditIsOpen(true);
              }}
            >
              Edit
            </TextBtn>
          </STBtnArea>
        ) : (
          ""
        )}
      </CommentBox>
    </>
  );
};

export default CommentCard;

const CommentBox = styled.div`
  width: 800px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
  gap: 20px;
  padding: 0px 10px;
  background-color: white;
`;

const CommentDate = styled.p`
  margin: 15px 0 5px 0;
  font-size: 20px;
`;

const CommentText = styled.p`
  width: 540px;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.2;
  word-break: keep-all;
`;

const STBtnArea = styled.div`
  margin-left: auto;
  display: flex;
  align-items: left;
  gap: 5px;
`;

const TextBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
