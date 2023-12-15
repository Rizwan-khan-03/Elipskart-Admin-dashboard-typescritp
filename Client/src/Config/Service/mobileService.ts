import { getRequest, getRequestByID } from "./axios/axios";

export const getAllMobileList = async (payload:any) => {
    try {
        const response = await getRequest(payload);
     if (response) {    
      return response;
     } else {
      throw new Error('get req error');
     }
   } catch (error) {
     return   console.error(error);
   }
 }
 export const getMobileDetails = async (url:any) => {
  try {
      const response = await getRequestByID(`product/${url}`);
   if (response) {    
    return response;
   } else {
    throw new Error('get req error');
   }
 } catch (error) {
   return   console.error(error);
 }
}