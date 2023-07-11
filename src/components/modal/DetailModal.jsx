import React, { useState } from "react";
import { STModalBackColor, STModalContainer, STModalBox } from "./Modal.styled";
import { styled } from "styled-components";
import { PokemonBox, PokemonImgBox, PokemonInfoBox } from "../main/PokemonCard";
import { Btn } from "../btn.styled";
import ConfirmModal from "./ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { getDayCount } from "../../fucntions/getDate";
import { closeModal } from "../../redux/modules/modalSlice";

const DetailModal = () => {
  const pokemon = useSelector((state) => state.pokemonCatchReducer);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      {isOpen && (
        <ConfirmModal
          pokemonId={pokemon.id}
          setIsOpen={setIsOpen}
        ></ConfirmModal>
      )}

      <STModalBox>
        <PokemonInfoSection>
          <PokemonPreviewBox>
            <PokemonImgBox>
              <PokemonImg
                src={pokemon.imgUrl ? pokemon.imgUrl : ""}
              ></PokemonImg>
            </PokemonImgBox>
            <PokemonNameBox>
              no.{pokemon.pokemonId} {pokemon.name}
            </PokemonNameBox>
          </PokemonPreviewBox>
          <ProfileTextBox>
            <ProfileText>
              <ProfileTextTitle>타 입 :</ProfileTextTitle>
              <ProfileTextbody>
                {pokemon.types.map((item) => {
                  return <TypeText key={item}>{item}</TypeText>;
                })}
              </ProfileTextbody>
            </ProfileText>
            <ProfileText>
              <ProfileTextTitle>함 께 :</ProfileTextTitle>
              <ProfileTextbody>
                {getDayCount(pokemon.catchDate)}일째 ({pokemon.catchDate})
              </ProfileTextbody>
            </ProfileText>
            <ProfileText>
              <ProfileTextTitle>특 징 :</ProfileTextTitle>
              <ProfileTextbody>{pokemon.flavorText}</ProfileTextbody>
            </ProfileText>
          </ProfileTextBox>
        </PokemonInfoSection>
        <InputBox></InputBox>
        <BtnArea>
          <Btn
            state="red"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            놓아주기
          </Btn>
          <Btn
            state="disable"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            닫기
          </Btn>
        </BtnArea>
      </STModalBox>
      <STModalBackColor
        onClick={() => {
          dispatch(closeModal());
        }}
      ></STModalBackColor>
    </>
  );
};

export default DetailModal;

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
  /* width: 120px */
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
