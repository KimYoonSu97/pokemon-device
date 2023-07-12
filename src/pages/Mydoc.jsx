import React, { useEffect, useState } from "react";
import BackGround from "../components/BackGround";
import { styled } from "styled-components";
import { Btn } from "../components/btn.styled";
import PokemonList from "../components/main/PokemonList";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modules/modalSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setPokemons } from "../redux/modules/pokemonSlice";
import { setCurrentUser } from "../redux/modules/userSlice";
import { setDiary } from "../redux/modules/diarySlice";
import { dataFetch } from "../api-test/Pokemon";
import { setCatchPokemon } from "../redux/modules/pokemonCatchSlice";
import DocUserInfo from "../components/main/DocUserInfo";
import CommentList from "../components/main/CommentList";
import { useParams } from "react-router-dom";

const Mydoc = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUserId = useSelector((state) => {
    return state.loginUserReducer.id;
  });

  const CatchModalHandler = async () => {
    const newPokemon = await dataFetch();
    if (newPokemon) {
      dispatch(setCatchPokemon(newPokemon));
      dispatch(
        openModal({
          modalType: "CatchModal",
          isOpen: true,
        })
      );
    } else {
      CatchModalHandler();
    }
  };

  const getUserData = async (userId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_AXIOS_URL}/users?id=${userId}`
    );
    dispatch(setCurrentUser(...data));
  };

  const getPokemonsData = async (userId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_AXIOS_URL}/pokemons?userId=${userId}`
    );
    dispatch(setPokemons(data));
  };

  const getDiaryData = async (userId) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_AXIOS_URL}/diary?userId=${userId}`
    );
    dispatch(setDiary(data));
  };

  useEffect(() => {
    let userId = loginUserId;
    if (param.id) {
      userId = param.id;
    }

    const fetchDatas = async () => {
      await axios.all([
        getUserData(userId),
        getPokemonsData(userId),
        getDiaryData(userId),
      ]);
    };
    fetchDatas();
  }, [param]);

  const returnMydoc = () => {
    if (param) {
      navigate("/");
    }
  };

  const btnColor = () => {
    if (param.id) {
      return "";
    } else {
      return "red";
    }
  };

  return (
    <>
      <STLogo onClick={returnMydoc}></STLogo>
      <STInner>
        {param.id && <InfoText>내 도감으로 가려면 로고를 누르세요.</InfoText>}
        <DocUserInfo></DocUserInfo>
        <STBtnArea>
          {param.id ? (
            ""
          ) : (
            <Btn state="red" onClick={CatchModalHandler}>
              새로운 포켓몬 잡기
            </Btn>
          )}
          <Btn
            state={btnColor()}
            onClick={() => {
              navigate("/trainer");
            }}
          >
            트레이너 랭킹
          </Btn>
        </STBtnArea>
        <PokemonList></PokemonList>
        <CommentList></CommentList>
      </STInner>
      {param.id ? (
        <BackGround page="doc" user="another"></BackGround>
      ) : (
        <BackGround page="doc"></BackGround>
      )}
    </>
  );
};

export default Mydoc;

const STInner = styled.div`
  width: 800px;
  padding-top: 120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const STLogo = styled.div`
  width: 100%;
  height: 77px;
  top: 20px;
  position: fixed;
  background-image: url("https://i.ibb.co/CJXGqXr/image.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const STBtnArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const InfoText = styled.p`
  text-align: center;
  font-size: 12px;
  color: white;
  margin-bottom: 15px;
`;
