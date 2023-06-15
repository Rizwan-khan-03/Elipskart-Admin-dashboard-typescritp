import { getRequest } from "./axios/axios";

export const getAllGroceryList = async () => {
    try {
        const response = await getRequest("grocery");
     if (response) {    
      return response;
     } else {
      throw new Error('get req error');
     }
   } catch (error) {
     return   console.error(error);
   }
 }

 export const getAllGroceryItemDetails = async (url:any) => {
  try {
      const response = await getRequest(`grocery/${url}`);
   if (response) {    
    return response;
   } else {
    throw new Error('get req error');
   }
 } catch (error) {
   return   console.error(error);
 }
}