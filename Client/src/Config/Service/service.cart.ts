import { AppConfig } from "../apiConfig/apiConfig";
import { postRequest } from "./axios/axios";
import { getToken } from "./Service";


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
export const makePayment = async (payload:any) => {
  try {
     const response = await fetch(`${AppConfig.baseURL}${"payment"}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(payload)
            });
      // const response = await postRequest(`payment`,payload);
      console.log("makePayment response",response)
   if (response) {    
    return response;
   } else {
    throw new Error('get req error');
   }
 } catch (error) {
   return   console.error(error);
 }
}