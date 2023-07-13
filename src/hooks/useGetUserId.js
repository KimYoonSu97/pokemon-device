import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useTokenCheck from "./useCheckToken";

const useLoginUserId = () => {
  const cookies = new Cookies();
  const [loginUserId, setLoginUserId] = useState();
  const [loginUserInfo, setLoginUserInfo] = useState();

  useEffect(() => {
    try {
      const fetchDatas = async () => {
        const { id } = jwtDecode(cookies.get("jwt_token"));
        const { data } = await axios.get(
          `${process.env.REACT_APP_AXIOS_URL}/users?signID=${id}`
        );
        setLoginUserId(data[0].id);
        setLoginUserInfo(data[0]);
      };
      fetchDatas();
    } catch (error) {}
  }, []);
  return { loginUserId, loginUserInfo };
};

export default useLoginUserId;
