import { getRequest, getRequestByID } from "./axios/axios";

export const getAllGroceryList = async (payload: any) => {
  try {
    if (payload.callback.id) {
      const response = await getRequestByID(`grocery/${payload.callback.id}`);
      if (response) {
        return response;
      } else {
        throw new Error('get req error');
      }
    } else {
      const response = await getRequest(`grocery`);
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

export const getAllGroceryItemDetails = async (url: any) => {
  try {
    const response = await getRequest(`grocery/${url}`);
    if (response) {
      return response;
    } else {
      throw new Error('get req error');
    }
  } catch (error) {
    return console.error(error);
  }
}