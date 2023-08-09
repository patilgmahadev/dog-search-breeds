import axios from "axios";

const AxiosGatewayInstance = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    "x-api-key": process.env.REACT_APP_DOG_API_KEY,
    "Content-Type": "application/json",
  },
});

export const getBreeds = (searchTxt) => {
  return AxiosGatewayInstance.get("/breeds/search?q=" + searchTxt);
};
