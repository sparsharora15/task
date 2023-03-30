import BASE_URL from "./BASE_URL";
import axios from "axios";
export const GetData = async () => {
  return await axios.get(`${BASE_URL}todos`);
};
export const GetUserData = async (id) => {
  return await axios.get(`${BASE_URL}users/${id}`);
};
