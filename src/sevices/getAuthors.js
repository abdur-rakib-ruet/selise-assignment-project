import axios from "axios";
import { baseUrl } from "../config/urls";

export const getAuthors = async (page) => {
  try {
    const response = await axios.get(`${baseUrl}/authors?limit=9&page=${page}`);
    return response.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: getAuthors.js ~ line 9 ~ getAuthors ~ error",
      error
    );
  }
};
