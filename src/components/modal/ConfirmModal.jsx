import React from "react";
import { STModalBox } from "./Modal.styled";
import { styled } from "styled-components";
import { Btn } from "../btn.styled";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modules/modalSlice";
import { useMutation, useQueryClient } from "react-query";
import { releasePokemon } from "../../api/fetchPokemon";
import { deleteDiary } from "../../api/fetchData";

const ConfirmModal = ({ setIsOpen, pokemonId, diaryId }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const release = useMutation(releasePokemon, {
    onSuccess: () => {
      console.log("성공");
      queryClient.invalidateQueries("getPokemonsData");
    },
  });
  const deleteDiaryFunc = useMutation(deleteDiary, {
    onSuccess: () => {
      console.log("성공");
      queryClient.invalidateQueries("getDiaryData");
    },
  });

  const text = () => {
    if (pokemonId) {
      return "놓아주다";
    } else if (diaryId) {
      return "삭제하기";
    } else {
      return "놓아주다";
    }
  };

  return (
    <>
      <ConfirmModalContainer>
        <ConfirmText>정말 그렇게 하시겠습니까?</ConfirmText>
        <BtnArea>
          <Btn
            state="red"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            다시 생각해볼게요
          </Btn>
          <Btn
            state="disable"
            onClick={async () => {
              if (pokemonId) {
                release.mutate(pokemonId);
              } else if (diaryId) {
                deleteDiaryFunc.mutate(diaryId);
              }
              dispatch(closeModal());
            }}
          >
            {text()}
          </Btn>
        </BtnArea>
      </ConfirmModalContainer>
    </>
  );
};

export default ConfirmModal;

const ConfirmText = styled.p`
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
`;

const ConfirmModalContainer = styled(STModalBox)`
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: calc((100vh - 200px) / 2);
  left: calc((100vw - 600px) / 2);
  z-index: 99999;
`;

const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
