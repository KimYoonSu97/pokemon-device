import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addDiary, updateDiary } from "../../redux/modules/diarySlice";
import { getDate } from "../../fucntions/getDate";

const CommentInputForm = ({ editDiary }) => {
  const dispatch = useDispatch();
  const [diary, setDiary] = useState("");
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
      dispatch(updateDiary(newDiary));
      await axios.put(`http://localhost:4000/diary/${editDiary.id}`, newDiary);
    } else {
      dispatch(addDiary(newDiary));
      setDiary("");
      await axios.post("http://localhost:4000/diary", newDiary);
    }
  };

  const text = () => {
    if (editDiary) {
      return "EDIT";
    } else {
      return "POST";
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
        onChange={(e) => {
          setDiary(e.target.value);
        }}
      ></CommentText>
      <TextBtn type="submit">{text()}</TextBtn>
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
