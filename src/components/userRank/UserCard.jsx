import React from "react";
import { styled } from "styled-components";

const UserCard = () => {
  return (
    <UserBox>
      <UserInfoBox>
        <UserImgBox></UserImgBox>
        <ProfileTextBox>
          <ProfileText>000님의 포켓몬 도감</ProfileText>
          <ProfileText>0000.00.00 부터 모험중입니다.</ProfileText>
          <ProfileText>도감을 00% 채웠습니다.</ProfileText>
          <ProfileText>♥ 00개의 좋아요 ♥</ProfileText>
        </ProfileTextBox>
      </UserInfoBox>
      <DocPercentBox>
        <PercentTitle>
          도감
          <br />
          완성도
        </PercentTitle>
        <PercentText>100%</PercentText>
      </DocPercentBox>
    </UserBox>
  );
};

export default UserCard;

const UserBox = styled.div`
  width: 800px;
  height: 200px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  overflow: hidden;
`;

const UserInfoBox = styled.div`
  width: 600px;
  height: 200px;
  padding: 20px;
  display: flex;
`;

const UserImgBox = styled.div`
  width: 160px;
  height: 160px;
  border: 3px solid black;
`;

const ProfileTextBox = styled.div`
  margin-left: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const ProfileText = styled.p`
  font-size: 20px;
  flex-grow: 1;
  line-height: 40px;
`;

const DocPercentBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: #d31c29;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PercentTitle = styled.p`
  font-size: 32px;
  color: white;
  text-align: center;
  line-height: 1.2;
`;
const PercentText = styled.p`
  font-size: 50px;
  color: white;
`;
