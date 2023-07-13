import axios from "axios";

const createNewUser = async (newUser) => {
  await axios.post(`${process.env.REACT_APP_AXIOS_URL}/users`, newUser);
};

const settingUserInfo = async ({ newUser, id }) => {
  await axios.put(`${process.env.REACT_APP_AXIOS_URL}/users/${id}`, newUser);
};

const getAllUser = async () => {
  const response = await axios.get(`${process.env.REACT_APP_AXIOS_URL}/users`);
  return response;
};

const getUserData = async (loginUserId) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_AXIOS_URL}/users?id=${loginUserId}`
  );
  return data;
};

const getDiaryData = async (loginUserId) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_AXIOS_URL}/diary?userId=${loginUserId}`
  );
  return data;
};

const getPokemonsData = async (loginUserId) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_AXIOS_URL}/pokemons?userId=${loginUserId}`
  );

  return data;
};

const postDiary = async (newDiary) => {
  await axios.post(`${process.env.REACT_APP_AXIOS_URL}/diary`, newDiary);
};

const editDiary = async ({ editDiary, id }) => {
  await axios.put(`${process.env.REACT_APP_AXIOS_URL}/diary/${id}`, editDiary);
};

const deleteDiary = async (diaryId) => {
  await axios.delete(`${process.env.REACT_APP_AXIOS_URL}/diary/${diaryId}`);
};

export {
  getAllUser,
  getUserData,
  getDiaryData,
  getPokemonsData,
  postDiary,
  editDiary,
  deleteDiary,
  createNewUser,
  settingUserInfo,
};
