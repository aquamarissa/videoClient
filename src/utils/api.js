import axios from "axios";

// const serverApi = "http://localhost:5002/api";
const serverApi = "https://annavideoserver.herokuapp.com/api";
export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return response.data;
};
