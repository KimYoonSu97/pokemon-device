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
import useInput from "../../hooks/useInput";
import Cookies from "universal-cookie";
import { useMutation } from "react-query";
import { createNewUser } from "../../api/fetchData";
import { getDate } from "../../function/getDate";

const SignUpForm = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [email, emailHandler] = useInput();
  const [password, passwordHandler] = useInput();
  const [checkPassword, checkPasswordHandler] = useInput();
  const createUser = useMutation(createNewUser, {
    onSuccess: () => {},
  });

  const signUpHandler = async () => {
    try {
      const newUser = {
        id: email,
        password,
      };

      const newUserForDB = {
        signID: email,
        signDate: getDate(),
      };

      await axios.post(`http://3.38.191.164/register`, newUser);
      window.alert("회원가입이 완료되었습니다.");

      createUser.mutate(newUserForDB);

      const { data } = await axios.post("http://3.38.191.164/login", newUser);
      window.alert("도감의 메세지 : 로그인 성공");
      cookies.set("jwt_token", data.token);

      navigate("/start");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          console.log("등록하기버튼 눌림");
          signUpHandler();
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
                onChange={emailHandler}
              ></Input>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordHandler}
              ></Input>
              <Input
                type="password"
                placeholder="Check Password"
                value={checkPassword}
                onChange={checkPasswordHandler}
              ></Input>
              <WarningText>이미 등록된 아이디입니다.</WarningText>
            </InputBox2>
          </InnerBox2>
        </OuterBox2>
        <Btn type="submit" width="222">
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
