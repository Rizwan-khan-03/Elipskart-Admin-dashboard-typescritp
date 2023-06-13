import { getToken } from "../Service/Service";
import apiEndPoints from "./apiEndPoints";


export const AppConfig = {
  baseURL: "http://localhost:5000/api/",
  // baseURL: "https://elipskart-backend.onrender.com/api/",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    "Accept-Language": "en",
  },
};
export const restAuthPost = async (url: string, data: any) => {
  const token: any = getToken();
  try {
    const response = await fetch(AppConfig.baseURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Accept-Language': 'en',
        'Token': token,
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error;
  }
};


export const restGetApi = async (url: string) => {
  const token: any = getToken();
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    "Accept-Language": "en",
    Token: token,
  };
  try {
    const response = await fetch(AppConfig.baseURL + url, {
      headers,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


