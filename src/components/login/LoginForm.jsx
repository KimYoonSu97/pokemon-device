import React from "react";
import { styled } from "styled-components";
import { Btn } from "../btn.styled";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import axios from "axios";
import Cookies from "universal-cookie";

const LoginForm = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [id, idHandler] = useInput();
  const [password, passwordHandler] = useInput();

  const setCookies = (jwt_token) => {
    cookies.set("jwt_token", jwt_token);
  };

  const loginHandler = async () => {
    const user = {
      id,
      password,
    };
    try {
      const response = await axios.post("http://3.38.191.164/login", user);
      window.alert("로그인 성공");

      //jwt토큰을 쿠키에 저장함.
      setCookies(response.data.token);

      navigate("/doc");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler();
        }}
      >
        <OuterBox>
          <InnerBox>
            <InputBox>
              <Title>도감 로그인</Title>
              <Input
                type="text"
                value={id}
                onChange={idHandler}
                placeholder="Trainer ID"
              ></Input>
              <Input
                type="password"
                value={password}
                onChange={passwordHandler}
                placeholder="Password"
              ></Input>
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
