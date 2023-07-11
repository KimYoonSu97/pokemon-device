import React, { useEffect } from "react";
import BackGround from "../components/BackGround";
import { styled } from "styled-components";
import { Btn } from "../components/btn.styled";
import PokemonList from "../components/main/PokemonList";
import { useDispatch } from "react-redux";
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

const Mydoc = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      console.log("포켓몬api오류로 다시가져오겠음");
      CatchModalHandler();
    }
  };

  const getUserData = async (userId) => {
    const { data } = await axios.get(
      `http://localhost:4000/users?id=${userId}`
    );
    dispatch(setCurrentUser(...data));
  };

  const getPokemonsData = async (userId) => {
    const { data } = await axios.get(
      `http://localhost:4000/pokemons?userId=${userId}`
    );
    dispatch(setPokemons(data));
  };

  const getDiaryData = async (userId) => {
    const { data } = await axios.get(
      `http://localhost:4000/diary?userId=${userId}`
    );
    dispatch(setDiary(data));
  };

  useEffect(() => {
    const userId = 3;
    const fetchDatas = async () => {
      await axios.all([
        getUserData(userId),
        getPokemonsData(userId),
        getDiaryData(userId),
      ]);
    };
    fetchDatas();
  }, []);

  return (
    <>
      <STLogo></STLogo>
      <STInner>
        <DocUserInfo></DocUserInfo>
        <STBtnArea>
          <Btn state="red" onClick={CatchModalHandler}>
            새로운 포켓몬 잡기
          </Btn>
          <Btn
            state="red"
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
      <BackGround page="doc"></BackGround>
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
`;
const STBtnArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
