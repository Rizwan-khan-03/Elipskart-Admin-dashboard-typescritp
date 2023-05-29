import { postRequest } from "./axios/axios";
export const addMobileDetails = async (url:any,paylod:any) => {
    try {
        const response = await postRequest(`product/${url}`,paylod);
     if (response) {    
      return response;
     } else {
      throw new Error('get req error');
     }
   } catch (error) {
     return   console.error(error);
   }
  }