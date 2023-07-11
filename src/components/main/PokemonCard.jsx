import React from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modules/modalSlice";
import { setDetailPokemon } from "../../redux/modules/pokemonCatchSlice";
import { getDayCount } from "../../fucntions/getDate";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const DetailModalHandler = () => {
    dispatch(setDetailPokemon(pokemon));
    dispatch(
      openModal({
        modalType: "DetailModal",
        isOpen: true,
      })
    );
  };

  return (
    <PokemonBox onClick={DetailModalHandler}>
      <PokemonImgBox>
        <PokemonImg src={pokemon.imgUrl}></PokemonImg>
      </PokemonImgBox>
      <PokemonInfoBox>
        <PokemonInfoText>
          no.{pokemon.pokemonId} {pokemon.name}
        </PokemonInfoText>
        <PokemonInfoText>
          함께한날 : {getDayCount(pokemon.catchDate)}일
        </PokemonInfoText>
      </PokemonInfoBox>
    </PokemonBox>
  );
};

export default PokemonCard;

export const PokemonBox = styled.div`
  width: 250px;
  height: 300px;
  background-color: gray;
  border: 3px solid black;
  overflow: hidden;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
`;

export const PokemonImgBox = styled.div`
  width: 250px;
  height: 200px;
  background-color: white;
`;

const PokemonImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const PokemonInfoBox = styled.div`
  width: 250px;
  height: 100px;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const PokemonInfoText = styled.p`
  font-size: 24px;
  color: white;
`;
