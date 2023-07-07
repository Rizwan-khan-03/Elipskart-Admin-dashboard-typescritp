import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,deleteRequest,getRequest, getRequestForData, postRequest, putRequest} from "./axios/axios";
import apiEndPoints from "../apiConfig/apiEndPoints";


export const addFasionProduct = createAsyncThunk(
  "addd Product    ",
  (payload: any) => {
    return  postRequest(apiEndPoints.addFashoinProduct, payload).then(
      (response:any) => response
    );
  }
)
  // get product list  
  export const getFasionList = createAsyncThunk(
    "get product list ",
    (payload: any) => {
      return  getRequestForData(apiEndPoints.fashionList, payload).then(
        (response:any) => response
      );
    }
  );
   //  update Product  ById  
   export const updateFashionProductById = createAsyncThunk(
    "update Product  ById  ",
    (payload: any) => {
      return  putRequest(apiEndPoints.updateFashoinProduct, payload).then(
        (response:any) => response
      );
    }
  );
  // delete product
  export const deleteProduct = createAsyncThunk(
    "delete Product    ",
    (payload: any) => {
      return  deleteRequest(apiEndPoints.fashion, payload).then(
        (response:any) => response
      );
    }
  );