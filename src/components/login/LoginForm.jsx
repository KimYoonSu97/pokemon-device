import React from "react";
import { styled } from "styled-components";
import { Btn } from "../btn.styled";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          console.log("로그인버튼 눌림");
        }}
      >
        <OuterBox>
          <InnerBox>
            <InputBox>
              <Title>도감 로그인</Title>
              <Input placeholder="Trainer ID"></Input>
              <Input placeholder="Password"></Input>
            </InputBox>
          </InnerBox>
        </OuterBox>
        <Btn type="submit" width="222">
          로그~인!
        </Btn>
        <Btn
          type="button"
          width="222"
          onClick={() => {
            navigate("/signup");
          }}
        >
          트레이너 등록
        </Btn>
      </FormContainer>
    </>
  );
};

export default LoginForm;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const OuterBox = styled.div`
  width: 310px;
  height: 250px;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const InnerBox = styled.div`
  width: 290px;
  height: 230px;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputBox = styled.div`
  width: 250px;
  height: 180px;
  background-color: #3d2e28;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 32px;
  color: white;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-top: 10px;
  text-align: center;
  width: 200px;
  border: none;
  padding-bottom: 9px;
  outline: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: lightgray;
  font-size: 16px;

  &:focus {
    color: white;
    &::placeholder {
      color: #3d2e28;
    }
  }
`;
