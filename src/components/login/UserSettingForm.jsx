import React from "react";
import { Btn } from "../btn.styled";
import {
  FormContainer,
  OuterBox,
  InnerBox,
  InputBox,
  Input,
} from "./LoginForm";
import { styled } from "styled-components";

const UserSettingForm = () => {
  const startBtnHander = () => {};

  return (
    <>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          console.log("등록하기버튼 눌림");
        }}
      >
        <OuterBox2>
          <InnerBox2>
            <InputBox2>
              <ImgArea>
                {/* {profileimg ? <PreviewImg src={profileimg} color="red" alt="priview-img" /> : `클릭!`} */}
              </ImgArea>
              <Input placeholder="트레이너 이름"></Input>
              <WarningText>이미 등록된 아이디입니다.</WarningText>
            </InputBox2>
          </InnerBox2>
        </OuterBox2>
        <Btn type="submit" onClick={startBtnHander}>
          모험을 시작하자!
        </Btn>
      </FormContainer>
    </>
  );
};

export default UserSettingForm;

const OuterBox2 = styled(OuterBox)`
  height: 310px;
  margin-bottom: 15px;
`;

const InnerBox2 = styled(InnerBox)`
  height: 290px;
`;
const InputBox2 = styled(InputBox)`
  height: 250px;
`;

// const

const WarningText = styled.p`
  font-size: 12px;
  color: #ffff00;
  margin-top: 20px;
`;

const ImgArea = styled.div`
  text-align: center;
  background-color: white;
  width: 100px;
  height: 100px;
  /* border-radius: 100px; */
  /* margin: 10px 0; */
  margin-bottom: 20px;
  border: 3px solid black;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;

  &:hover {
    background-color: lightgray;
  }
`;
