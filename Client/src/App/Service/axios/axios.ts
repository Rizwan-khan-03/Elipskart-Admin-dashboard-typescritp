import axios from "axios";
import { getToken } from "../Service";
import { AppConfig } from "../../apiConfig/apiConfig";
import querystring from 'querystring';
const axiosClient = axios.create();


const AUTH_HEADERS = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
      token: `Bearer ${getToken()}`,
    }
  }
}
const AUTH_HEADERS_MULTIPART = () => {
  return {
    headers: {
      Accept: 'multipart/form-data',
      token: `Bearer ${getToken()}`,
    },
  };
};

axiosClient.interceptors.response.use(
  (response:any) => response ,
  (error:any) =>  error
);

export function getRequest(URL:string) {
  
  return axiosClient.get(`${AppConfig?.baseURL}${URL}`, AUTH_HEADERS()).then((response:any) => response);
}


export function getRequestForData(URL: string, payload: {}) {
  const queryParams = new URLSearchParams(payload).toString();
  const fullURL = `${AppConfig?.baseURL}${URL}?${queryParams}`;

  return axiosClient.get(fullURL, AUTH_HEADERS())
    .then((response: any) => response);
}


export function commonPostRequest(URL:string, payload:{}) {
  return axiosClient
    .post(`${AppConfig?.baseURL}${URL}`, payload, AUTH_HEADERS())
    .then((response:any) => response)
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}
export function postRequest(URL:string, payload:{}) {
  return axiosClient
    .post(`${AppConfig?.baseURL}${URL}`, payload, AUTH_HEADERS_MULTIPART())
    .then((response:any) => response)
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

export function putRequest(URL:string, payload:{})  {
  return axiosClient
    .put(`${AppConfig?.baseURL}${URL}`, payload, AUTH_HEADERS())
    .then((response:any) => response);
}

export function deleteRequest(URL:string, payload:{})  {
  return axiosClient.delete(`${AppConfig?.baseURL}${URL}`, AUTH_HEADERS()).then((response:any) => response);
}

export default axiosClient;
