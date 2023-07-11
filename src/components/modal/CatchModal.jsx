import React, { useEffect, useState } from "react";
import { STModalBackColor, STModalBox } from "./Modal.styled";
import { styled } from "styled-components";
import { PokemonBox, PokemonImgBox, PokemonInfoBox } from "../main/PokemonCard";
import { Btn } from "../btn.styled";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "./ConfirmModal";
import axios from "axios";
import { closeModal } from "../../redux/modules/modalSlice";
import uuid from "react-uuid";
import { catchPokemon } from "../../redux/modules/pokemonSlice";

const CatchModal = () => {
  const dispatch = useDispatch();

  const { pokemon, userId } = useSelector((state) => ({
    pokemon: state.pokemonCatchReducer,
    userId: state.userReducer.id,
  }));
  const [isOpen, setIsOpen] = useState(false);
  console.log(userId);
  console.log(pokemon);
  const { pokemonId, types, imgUrl, flavorText, name, catchDate } = pokemon;

  const catchPokemonBtnHandler = async () => {
    const newPokemon = {
      userId,
      id: uuid(),
      ...pokemon,
    };
    try {
      await axios.post("http://localhost:4000/pokemons", newPokemon);
      dispatch(catchPokemon(newPokemon));
      dispatch(closeModal());
    } catch (error) {}
  };

  return (
    <>
      {isOpen && <ConfirmModal setIsOpen={setIsOpen}></ConfirmModal>}
      <STModalBox>
        <PokemonInfoSection>
          <PokemonPreviewBox>
            <PokemonImgBox>
              <PokemonImg src={imgUrl ? imgUrl : ""}></PokemonImg>
            </PokemonImgBox>
            <PokemonNameBox>
              no.{pokemonId} {name}
            </PokemonNameBox>
          </PokemonPreviewBox>
          <ProfileTextBox>
            <ProfileText>
              <ProfileTextTitle>타 입 :</ProfileTextTitle>
              <ProfileTextbody>
                {types?.map((item) => {
                  return <TypeText key={item}>{item}</TypeText>;
                })}
              </ProfileTextbody>
            </ProfileText>
            <ProfileText>
              <ProfileTextTitle>잡은날: </ProfileTextTitle>
              <ProfileTextbody>{catchDate}</ProfileTextbody>
            </ProfileText>
            <ProfileText>
              <ProfileTextTitle>특 징 :</ProfileTextTitle>
              <ProfileTextbody>{flavorText}</ProfileTextbody>
            </ProfileText>
          </ProfileTextBox>
        </PokemonInfoSection>
        <InputBox></InputBox>
        <BtnArea>
          <Btn state="red" onClick={catchPokemonBtnHandler}>
            {name} 넌 내꺼야!
          </Btn>
          <Btn
            state="red"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            놓아주기
          </Btn>
        </BtnArea>
      </STModalBox>
      <STModalBackColor
        onClick={() => {
          alert(`${name}를 놓아주거나 잡아주세요!`);
        }}
      ></STModalBackColor>
    </>
  );
};

export default CatchModal;

const PokemonInfoSection = styled.div`
  display: flex;
`;

const PokemonPreviewBox = styled(PokemonBox)`
  height: 265px;
`;

const PokemonNameBox = styled(PokemonInfoBox)`
  height: 65px;
  font-size: 24px;
  color: white;
`;

const ProfileTextBox = styled.div`
  margin-left: 20px;
  width: 464px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;

const ProfileText = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
`;
const ProfileTextTitle = styled.p`
  width: 90px;
  text-align: justify;
  display: block;
  /* display: inline; */
`;
const ProfileTextbody = styled.div`
  width: 370px;
  line-height: 1.5;
  font-size: 18px;
  /* display: inline; */
`;

const InputBox = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 26px;
  padding: 30px 0;
`;

const PokemonNickname = styled.input`
  width: 250px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  border: 3px solid black;
  box-sizing: border-box;
  outline: none;
`;

const PokemonComment = styled(PokemonNickname)`
  width: 464px;
`;

const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const TypeText = styled.p`
  font-size: 18px;
  text-align: center;
  display: inline;
  padding: 8px;
  border: 3px solid black;
  border-radius: 5px;
  margin-right: 8px;
`;
const PokemonImg = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;
