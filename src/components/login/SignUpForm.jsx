import React, { useState } from "react";
import { Btn } from "../btn.styled";
import {
  FormContainer,
  OuterBox,
  InnerBox,
  InputBox,
  Input,
} from "./LoginForm";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const signUpHandler = async () => {
    let newUser = {
      id: email,
      password,
    };
    try {
      await axios.post(`http://3.38.191.164/register`, newUser);
      window.alert("회원가입성공");
      const { data } = await axios.post("http://3.38.191.164/login", newUser);
      console.log(data);
      window.alert("로그인도 성공");
      navigate("/user");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

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
              <WelcomeTitle>포켓몬 세계에 온것을</WelcomeTitle>
              <WelcomeTitle>환영한다!</WelcomeTitle>
              <WelcomeTitle>-오박사-</WelcomeTitle>
              <Input
                placeholder="Trainer ID"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Input>
              <Input
                type="password"
                placeholder="Check Password"
                value={checkPassword}
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
              ></Input>
              <WarningText>이미 등록된 아이디입니다.</WarningText>
            </InputBox2>
          </InnerBox2>
        </OuterBox2>
        <Btn type="submit" width="222" onClick={signUpHandler}>
          등록하기
        </Btn>
      </FormContainer>
    </>
  );
};

export default SignUpForm;

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

const WelcomeTitle = styled.p`
  font-size: 19px;
  color: white;
  margin-bottom: 5px;
  text-align: center;
`;

const WarningText = styled.p`
  font-size: 12px;
  color: #ffff00;
  margin-top: 20px;
`;
