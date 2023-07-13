import React, { useEffect, useState } from "react";
import { Btn } from "../btn.styled";
import {
  FormContainer,
  OuterBox,
  InnerBox,
  InputBox,
  Input,
} from "./LoginForm";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import useLoginUserId from "../../hooks/useGetUserId";
import { useMutation } from "react-query";
import useInput from "../../hooks/useInput";
import { getAllUser } from "../../api/fetchData";
import { useQuery } from "react-query";
import { settingUserInfo } from "../../api/fetchData";

const UserSettingForm = () => {
  useEffect(() => {
    alert("내가 자네를 뭐라고 부르면 되겠나? \n -오박사-");
  }, []);
  const [nickname, nicknameHandler, setNickname] = useInput();
  const { loginUserInfo } = useLoginUserId();
  const { data } = useQuery("allUsers", getAllUser);
  const [helpText, setHelpText] = useState(false);
  const settingUser = useMutation(settingUserInfo, {
    onSuccess: () => {},
  });
  const navigate = useNavigate();
  const startBtnHander = () => {
    const currentNickname = data.data.map((item) => {
      return item.nickname;
    });

    if (currentNickname.indexOf(nickname) >= 0) {
      setHelpText(true);
      setNickname("");
      return;
    }

    const newUser = {
      nickname: nickname,
      profileImg:
        "https://i.namu.wiki/i/8hp6dfFKbD-q2Fe01Bm6ll2OEgFsq-q1O2RJ0_ybX67rfIUiLNadOpl3Ej17on3V6VzOqhyv-7HDb-UkTt7UzaVn-i_QFjf7bDgDJ4G5oPLNka4wO-K1P1Bmz3Kpfro4NgjNMxMOVUyagjeyogxrzg.webp",
      ...loginUserInfo,
    };

    settingUser.mutate({ newUser, id: loginUserInfo.id });

    navigate("/doc");
  };

  return (
    <>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          console.log("등록하기버튼 눌림");
          startBtnHander();
        }}
      >
        <OuterBox2>
          <InnerBox2>
            <InputBox2>
              <ImgArea>
                <ProfileImg
                  src={
                    "https://i.namu.wiki/i/8hp6dfFKbD-q2Fe01Bm6ll2OEgFsq-q1O2RJ0_ybX67rfIUiLNadOpl3Ej17on3V6VzOqhyv-7HDb-UkTt7UzaVn-i_QFjf7bDgDJ4G5oPLNka4wO-K1P1Bmz3Kpfro4NgjNMxMOVUyagjeyogxrzg.webp"
                  }
                ></ProfileImg>
              </ImgArea>
              <input
                style={{
                  visibility: "hidden",
                }}
              />
              <Input
                type="text"
                placeholder="이름 (3자 이상)"
                value={nickname}
                onChange={nicknameHandler}
              ></Input>
              {helpText && (
                <WarningText>유감이지만..이미 있는 이름이군...</WarningText>
              )}
            </InputBox2>
          </InnerBox2>
        </OuterBox2>

        {nickname.length < 3 ? (
          <Btn as="div" type="submit" state="disable">
            모험을 시작하자!
          </Btn>
        ) : (
          <Btn type="submit">모험을 시작하자!</Btn>
        )}
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

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;
