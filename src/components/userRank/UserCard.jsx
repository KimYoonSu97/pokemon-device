import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Link to={`/${user.id}`}>
      <UserBox>
        <UserInfoBox>
          <UserImgBox>
            <ProfileImg src={user.profileImg}></ProfileImg>
          </UserImgBox>
          <ProfileTextBox>
            <Nickname>{user.nickname}</Nickname>
            <ProfileText>{user.signID}</ProfileText>
            <ProfileText>{user.signDate} 부터 모험중입니다.</ProfileText>
          </ProfileTextBox>
        </UserInfoBox>
      </UserBox>
    </Link>
  );
};

export default UserCard;

const UserBox = styled.div`
  width: 600px;
  height: 200px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  overflow: hidden;
  cursor: pointer;
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
  margin-top: 10px;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const Nickname = styled.p`
  font-size: 32px;
  line-height: 1.2;
`;
