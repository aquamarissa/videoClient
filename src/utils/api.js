import axios from "axios";

// const serverApi = "http://localhost:5002/api";
const serverApi = "https://04fa-37-73-103-44.eu.ngrok.io/api";
export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return response.data;
};
