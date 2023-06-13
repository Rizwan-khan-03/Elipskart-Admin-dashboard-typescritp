import { AppConfig } from "../apiConfig/apiConfig";
import apiEndPoints from "../apiConfig/apiEndPoints";

const AUTH_KEY = "jwtToken";
const PRODUCT_KEY:string = "product";
export const setToken = (Name: any) => {
  localStorage.setItem(AUTH_KEY, Name);
};
export const getToken = () => {
  let token = localStorage.getItem(AUTH_KEY)  
  if(token === "undefined" || token === null) return false;
  else return token
};
export const setUpdate = (value: any) => {
  localStorage.setItem(PRODUCT_KEY, value);
};
export const getUpdate = () => {
  let item = localStorage.getItem(PRODUCT_KEY)  
  if(item === "undefined" || item === null) return false;
  else return item
};
export const clearStorage = (key = "") => {
  if (key == "") {
    localStorage.clear();
    window.location.reload()
  }
};

/// Login API
export const loginAdmin = async ({ email, password }: any) => {
  try {
    const response = await fetch(AppConfig?.baseURL + apiEndPoints?.Login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    console.log('response', response);

    if (response) {
      return response.json();
    } else {
      // Login failed, handle error
      throw new Error('Login failed');
    }
  } catch (error) {
    // Handle network or server error
    return console.error(error);
  }
}