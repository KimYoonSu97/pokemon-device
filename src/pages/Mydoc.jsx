import React from "react";
import BackGround from "../components/BackGround";
import { styled } from "styled-components";
import { Btn } from "../components/btn.styled";
import PokemonList from "../components/main/PokemonList";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modules/modalSlice";
import { useNavigate } from "react-router-dom";
import DocUserInfo from "../components/main/DocUserInfo";
import CommentList from "../components/main/CommentList";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import useTokenCheck from "../hooks/useCheckToken";

const Mydoc = () => {
  const { tokenChecker } = useTokenCheck();

  const cookies = new Cookies();

  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CatchModalHandler = async () => {
    dispatch(
      openModal({
        modalType: "CatchModal",
        isOpen: true,
      })
    );
  };

  const returnMydoc = () => {
    if (param) {
      navigate("/doc");
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
            <>
              <Btn state="red" onClick={CatchModalHandler}>
                새로운 포켓몬 잡기
              </Btn>
              <Btn
                state="disable"
                onClick={() => {
                  navigate("/");
                  cookies.remove("jwt_token");
                }}
              >
                로그아웃
              </Btn>
            </>
          )}
          <Btn
            state={btnColor()}
            onClick={() => {
              navigate("/trainer");
            }}
          >
            트레이너 목록
          </Btn>
        </STBtnArea>
        <PokemonList></PokemonList>
        <CommentList></CommentList>
      </STInner>
      {param.id ? (
        <BackGround point="doc" user="another"></BackGround>
      ) : (
        <BackGround point="doc"></BackGround>
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
