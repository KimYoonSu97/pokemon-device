export const getDate = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let dateString = year + "-" + month + "-" + day;

  return dateString;
};

export const getDayCount = (catchDate) => {
  const d1 = new Date(catchDate);
  const nowDate = getDate();
  const d2 = new Date(nowDate);
  const date = Math.abs(d2 - d1);
  const msPerDay = 24 * 60 * 60 * 1000;
  const DayCount = Math.floor(date / msPerDay);
  return DayCount + 1;
};
