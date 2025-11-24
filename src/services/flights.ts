import axios from "axios";

const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGU5YmI4NjhiYzcyNTNkNjZjZDdjOTg3MjIwZGI4MTE1NzE5MDU2NzAzNmQ5NTk4ZWRmOWZiM2FjMjc1ZWM1NDFmZjdjZTY4MjU5NDdmYWUiLCJpYXQiOjE3NjM5NDI1NzIsIm5iZiI6MTc2Mzk0MjU3MiwiZXhwIjoxNzk1NDc4NTcyLCJzdWIiOiIyNjU1MSIsInNjb3BlcyI6W119.P4Vwy4XvHXrCfgt8x4_XbNjW3sedMnQdmvu_11f-UTN2F30FK-l3GT9B3Bv_EFK7v10J2o9e_JtvbPoAZ8x1Mw";
const BASE_URL = "https://api.goflightlabs.com";

export async function buscarPassagens(origem: string, destino: string, data: string) {
  try {
    const response = await axios.get(`${BASE_URL}/v2/flights`, {
      params: {
        access_key: API_KEY,
        dep_iata: origem,
        arr_iata: destino,
        date: data
      },
    });

    return response.data.data; // lista de voos
  } catch (err) {
    console.log("Erro ao buscar voos:", err);
    return [];
  }
}
