import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,deleteRequest,getRequest, getRequestForData, postRequest, putRequest} from "./axios/axios";
import apiEndPoints from "../apiConfig/apiEndPoints";


export const addBuetyProduct = createAsyncThunk(
  "addd Product    ",
  (payload: any) => {
    return  postRequest(apiEndPoints.addbuetyProduct, payload).then(
      (response:any) => response
    );
  }
)
  // get product list  
  export const getBuetyList = createAsyncThunk(
    "get product list ",
    (payload: any) => {
      return  getRequestForData(apiEndPoints.buetyList, payload).then(
        (response:any) => response
      );
    }
  );
   //  update Product  ById  
   export const updateBuetyProductById = createAsyncThunk(
    "update Product  ById  ",
    (payload: any) => {
      return  putRequest(apiEndPoints.updateBuetyProduct, payload).then(
        (response:any) => response
      );
    }
  );
  // delete product
  export const deleteBuetyProduct = createAsyncThunk(
    "delete Product    ",
    (payload: any) => {
      return  deleteRequest(apiEndPoints.buety, payload).then(
        (response:any) => response
      );
    }
  );