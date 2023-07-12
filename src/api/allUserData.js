import axios from "axios";

const allUserData = async () => {
  const response = await axios.get("http://localhost:4000/users");
  return response;
};

export { allUserData };
