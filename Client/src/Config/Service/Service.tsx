import { AppConfig } from "../apiConfig/apiConfig";
import apiEndPoints from "../apiConfig/apiEndPoints";

const AUTH_KEY = "jwtToken";
export const setToken = (Name: any) => {
    localStorage.setItem(AUTH_KEY, Name);
  };
  export const getToken  = () => localStorage.getItem(AUTH_KEY);
  
  export const clearStorage = (key = "") => {
    if (key == "") {
      localStorage.clear();
      window.location.reload();
    }
  };

  /// Login API ////
  export const loginUser = async (data:any) => {
    try {
      console.log('Login API service data',data.payload.googleToken);
      if (data.payload.googleToken) {
        const response = await fetch(AppConfig?.baseURL + 'user/googleLogin', {
          method: apiEndPoints?.methodType?.POST,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data?.payload)
        });
        if (response) {
          console.log('Login API service response',response);
         return response.json();
        } else {
         throw new Error('Login failed');
        }
      } else {
        const response = await fetch(AppConfig?.baseURL + apiEndPoints?.Login, {
          method: apiEndPoints?.methodType?.POST,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data?.payload)
        });
        if (response) {
         return response.json();
        } else {
         throw new Error('Login failed');
        }
      }
   
   } catch (error) {
     return   console.error(error);
   }
 }

 //register
 export const RegisterUser = async ({ email,firstName,lastName,password,isAdmin }:any) => {
  try {
   const response = await fetch(AppConfig?.baseURL + apiEndPoints?.Register, {
     method: apiEndPoints?.methodType?.POST,
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ email, firstName, lastName,password,isAdmin})
   });
   if (response) {
    return response.json();
   } else {
    throw new Error('Login failed');
   }
 } catch (error) {
   return   console.error(error);
 }
}


