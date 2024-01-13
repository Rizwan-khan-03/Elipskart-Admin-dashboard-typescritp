import axios from "axios";
import { getToken } from "../Service";
import { AppConfig } from "../../apiConfig/apiConfig";
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

axiosClient.interceptors.response.use(
  (response:any) => response ,
  (error:any) =>  error
);

// export function getRequest(URL:string) {
  
//   return axiosClient.get(`${AppConfig?.baseURL}${URL}`, AUTH_HEADERS()).then((response:any) => response);
// }
// export function getRequest(payload: any) {
//   if (!AppConfig?.baseURL || !payload?.payload?.url) {
//     throw new Error("Base URL or URL in payload is missing.");
//   }
//   console.log('payload?.payload?.data',payload?.payload?.data)
//   const url = `${AppConfig?.baseURL}${payload?.payload?.url}`;
//   const options = {
//     ...payload?.payload?.data,
//     ...AUTH_HEADERS(),
//   };

//   return axiosClient.get(url, options).then((response: any) => response);
// }

export function getRequest(url: any) {
  // if (!AppConfig?.baseURL || !payload?.payload?.url){
  //   throw new Error("Base URL or URL in payload is missing.");
  // }
  const URL = `${AppConfig?.baseURL}${url}`;
  // const queryParams = new URLSearchParams(payload?.payload);
  // const urlWithParams = `${url}?${queryParams?.toString()}`;
  return axiosClient.get(URL, AUTH_HEADERS()).then((response: any) => response);
}
export function getRequestByQuery(payload: any) {
  if (!AppConfig || !payload?.payload?.url) {
    throw new Error("Base URL or URL in payload is missing.");
  }

  const queryParams = new URLSearchParams(payload.payload.data);  // Removed optional chaining here
  const urlWithParams = `${AppConfig?.baseURL}${payload.payload.url}?${queryParams.toString()}`;
  
  return axiosClient.get(urlWithParams, AUTH_HEADERS()).then((response: any) => response);
}

export function getRequestByID(URL:string) {
  return axiosClient
    .get(`${AppConfig?.baseURL}${URL}`, AUTH_HEADERS())
    .then((response:any) => response);  
}

export function postRequest(URL:string, payload:{}) {
  return axiosClient
    .post(`${AppConfig?.baseURL}${URL}`, payload, AUTH_HEADERS())
    .then((response:any) => response);
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
