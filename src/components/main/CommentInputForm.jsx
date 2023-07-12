import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addDiary, updateDiary } from "../../redux/modules/diarySlice";
import { getDate } from "../../fucntions/getDate";
import useInput from "../../hooks/useInput";

const CommentInputForm = ({ editDiary }) => {
  const [diary, diaryHandler, setDiary] = useInput();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => ({
    userId: state.userReducer.id,
  }));

  useEffect(() => {
    if (editDiary) {
      setDiary(editDiary.text);
    }
  }, []);

  const PostDiary = async () => {
    let newDiary = {
      id: editDiary ? editDiary.id : uuid(),
      userId: editDiary ? editDiary.userId : userId,
      text: diary,
      postDate: editDiary ? editDiary.postDate : getDate(),
    };
    if (editDiary) {
      if (editDiary?.text === diary) {
        alert("변경할 내용을 입력하세요.");
        return;
      }
      dispatch(updateDiary(newDiary));
      await axios.put(
        `${process.env.REACT_APP_AXIOS_URL}/diary/${editDiary.id}`,
        newDiary
      );
    } else {
      dispatch(addDiary(newDiary));
      setDiary("");
      await axios.post(`${process.env.REACT_APP_AXIOS_URL}/diary`, newDiary);
    }
  };
  const textChanger = () => {
    if (editDiary) {
      return "EDIT";
    } else {
      return "POST";
    }
  };
  const BtnChanger = () => {
    if (editDiary) {
      if (editDiary.text === diary) {
        return <FakeBtn>{textChanger()}</FakeBtn>;
      } else if (diary.length < 10) {
        return <FakeBtn>{textChanger()}</FakeBtn>;
      } else {
        return <TextBtn type="submit">{textChanger()}</TextBtn>;
      }
    } else if (diary.length < 10) {
      return <FakeBtn>{textChanger()}</FakeBtn>;
    } else {
      return <TextBtn type="submit">{textChanger()}</TextBtn>;
    }
  };

  return (
    <CommentBox
      onSubmit={(e) => {
        e.preventDefault();

        PostDiary();
      }}
    >
      <CommentText
        type="text"
        value={diary}
        onChange={diaryHandler}
        placeholder="공백 포함 10자 이상을 쓰세요. 오늘 잡은 포켓몬에 대한 이야기를 해도 좋습니다."
      ></CommentText>
      {BtnChanger()}
    </CommentBox>
  );
};

export default CommentInputForm;

const CommentBox = styled.form`
  width: 800px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
  gap: 20px;
  padding: 0px 10px;
  background-color: white;
  margin-bottom: 30px;
`;

const CommentText = styled.textarea`
  width: 580px;
  font-size: 18px;
  margin: 20px 0;
  line-height: 1.2;
  border: 3px solid black;
  padding: 10px;
  resize: none;
  &:focus {
    &::placeholder {
      color: white;
    }
  }
`;

const TextBtn = styled.button`
  outline: none;
  border: none;
  margin-left: auto;
  background-color: transparent;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 3px solid black;
  &:hover {
    background-color: #26407d;
    color: #ffff00;
  }
`;

const FakeBtn = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 50px;
  height: 50px;
  border: 3px solid black;
`;
