import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import PokemonCard from "./PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modules/modalSlice";
import axios from "axios";

const PokemonList = () => {
  const pokemons = useSelector((state) => state.pokemonReducer);
  return (
    <Inner>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>;
      })}
    </Inner>
  );
};

export default PokemonList;

const Inner = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
`;
