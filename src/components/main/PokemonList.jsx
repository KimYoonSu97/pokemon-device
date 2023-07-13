import React from "react";
import { styled } from "styled-components";
import PokemonCard from "./PokemonCard";
import useLoginUserId from "../../hooks/useGetUserId";
import { getPokemonsData } from "../../api/fetchData";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const PokemonList = () => {
  const param = useParams();
  const { loginUserId } = useLoginUserId();
  let id;
  if (param.id) {
    id = param.id;
  } else {
    id = loginUserId;
  }

  const { isLoading, isError, data } = useQuery(["getPokemonsData", id], () =>
    getPokemonsData(id)
  );

  if (isLoading) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <p>에러남.. 새로고침 하세요..</p>;
  }

  return (
    <Inner>
      {data.map((pokemon) => {
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
