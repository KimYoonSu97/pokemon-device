import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useTokenCheck = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [tokenChecker, setTokenChecker] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      if (!cookies.get("jwt_token")) {
        navigate("/");
        return;
      }
      try {
        await axios.get(`http://3.38.191.164/user`, {
          headers: {
            authorization: `Bearer ${cookies.get("jwt_token")}`,
          },
        });
      } catch (error) {
        console.log(error);
        navigate("/");
        cookies.remove("jwt_token");
        alert("로그인 시간이 만료되었습니다. 다시 로그인 해주세요.");
      }
    };
    checkToken();
  }, []);
  return { tokenChecker, navigate };
};

export default useTokenCheck;
