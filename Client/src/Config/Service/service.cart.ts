import { postRequest } from "./axios/axios";


 export const placeOrderCall = async (payload:any) => {
  try {
      const response = await postRequest(`order/createOrder`,payload);
   if (response) {    
    return response;
   } else {
    throw new Error('get req error');
   }
 } catch (error) {
   return   console.error(error);
 }
}