import axios from "axios";

// const serverApi = "http://localhost:5002/api";
const serverApi = "https://video-server-rose.vercel.app/api";
export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return response.data;
};
