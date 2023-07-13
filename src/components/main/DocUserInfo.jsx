import React from "react";
import { styled } from "styled-components";
import { getUserData, getPokemonsData } from "../../api/fetchData";
import { useQueries } from "react-query";
import useLoginUserId from "../../hooks/useGetUserId";
import { useParams } from "react-router-dom";

const DocUserInfo = () => {
  const { loginUserId } = useLoginUserId();
  const param = useParams();
  let id;
  if (param.id) {
    id = param.id;
  } else {
    id = loginUserId;
  }

  const [userData, pokemonData] = useQueries([
    { queryKey: ["getUserData", id], queryFn: () => getUserData(id) },
    { queryKey: ["getPokemonsData", id], queryFn: () => getPokemonsData(id) },
  ]);

  if (userData.isFetching) {
    return <p>로딩중</p>;
  }
  if (userData.isLoading) {
    return <p>로딩중</p>;
  }
  if (userData.isError) {
    return <p>에러남.. 새로고침 하세요..</p>;
  }
  if (pokemonData.isFetching) {
    return <p>로딩중</p>;
  }

  if (pokemonData.isLoading) {
    return <p>로딩중</p>;
  }
  if (pokemonData.isError) {
    return <p>에러남.. 새로고침 하세요..</p>;
  }

  return (
    <div>
      {
        <InfoContainer>
          <ProfileImgBox>
            <ProfileImg src={userData.data[0].profileImg}></ProfileImg>
          </ProfileImgBox>
          <ProfileTextBox>
            <ProfileText>
              {userData.data[0].nickname}님의 포켓몬 도감
            </ProfileText>
            <ProfileText>
              {userData.data[0].signDate} 부터 모험중입니다.
            </ProfileText>
            <ProfileText>
              함께하는 포켓몬 : {pokemonData.data.length}마리
            </ProfileText>
            <ProfileText>
              도감완성도 : {(pokemonData.data.length / 1000).toFixed(2)}%
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
