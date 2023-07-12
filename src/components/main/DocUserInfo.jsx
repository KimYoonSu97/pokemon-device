import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const DocUserInfo = () => {
  const { pokemon, user } = useSelector((state) => ({
    user: state.userReducer,
    pokemon: state.pokemonReducer,
  }));
  return (
    <div>
      {
        <InfoContainer>
          <ProfileImgBox>
            <ProfileImg src={user.profileImg}></ProfileImg>
          </ProfileImgBox>
          <ProfileTextBox>
            <ProfileText>{user.nickname}님의 포켓몬 도감</ProfileText>
            <ProfileText>{user.signDate} 부터 모험중입니다.</ProfileText>
            <ProfileText>함께하는 포켓몬 : {pokemon.length}마리</ProfileText>
            <ProfileText>
              도감완성도 : {(pokemon.length / 1000).toFixed(2)}%
            </ProfileText>
          </ProfileTextBox>
        </InfoContainer>
      }
    </div>
  );
};

export default DocUserInfo;

const InfoContainer = styled.div`
  /* width: 600px; */
  display: flex;
`;

const ProfileImgBox = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid black;
  overflow: hidden;
  background-color: white;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const ProfileTextBox = styled.div`
  margin-left: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const ProfileText = styled.p`
  font-size: 24px;
  color: white;
  flex-grow: 1;
  line-height: 45px;
`;
