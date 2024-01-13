import { getRequest, getRequestByID,getRequestByQuery } from "./axios/axios";

export const getAllMobileList = async (payload: any) => {
  try {
    console.log('payload',payload.payload);
    
    if (payload.payload.data) {
      const response = await getRequestByQuery(payload);
      if (response) {
        return response;
      } else {
        throw new Error('get req error');
      }
    }else{
      const response = await getRequest(payload.payload.url);
      if (response) {
        return response;
      } else {
        throw new Error('get req error');
      }
    }

  } catch (error) {
    return console.error(error);
  }
}
export const getMobileDetails = async (url: any) => {
  try {
    const response = await getRequestByID(`product/${url}`);
    if (response) {
      return response;
    } else {
      throw new Error('get req error');
    }
  } catch (error) {
    return console.error(error);
  }
}