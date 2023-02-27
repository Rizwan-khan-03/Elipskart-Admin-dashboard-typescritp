import { getToken } from "../Service/Service";
import apiEndPoints from "./apiEndPoints";


export const AppConfig = {
  baseURL: "https://",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    "Accept-Language": "en",
  },
};
export const AuthPost = async (url: string, data: any) => {
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


export const GetApi = async (url: string) => {
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

export const loginAdmin = async ({ username, password }:any) => {
   try {
    const response = await fetch(AppConfig?.baseURL + apiEndPoints?.Login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response) {
      // Login successful, handle response
      const data = await response.json();
      console.log(data); // example response handling
    } else {
      // Login failed, handle error
      throw new Error('Login failed');
    }
  } catch (error) {
    // Handle network or server error
    console.error(error);
  }
}
