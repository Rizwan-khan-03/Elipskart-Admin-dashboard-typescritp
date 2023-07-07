import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,deleteRequest,getRequest, getRequestForData, postRequest, putRequest} from "./axios/axios";
import apiEndPoints from "../apiConfig/apiEndPoints";

// electronics:"electronics",
// electronicsList:"electronics/adminList",
// updateElectronicsProduct:"electronics/update",
// addElectronicsProduct:"electronics/addproduct",

export const addElectronicsProduct = createAsyncThunk(
  "addd Product    ",
  (payload: any) => {
    return  postRequest(apiEndPoints.addElectronicsProduct, payload).then(
      (response:any) => response
    );
  }
)
  // get product list  
  export const getElectronicsList = createAsyncThunk(
    "get product list ",
    (payload: any) => {
      return  getRequestForData(apiEndPoints.electronicsList, payload).then(
        (response:any) => response
      );
    }
  );
   //  update Product  ById  
   export const updateElectronicsProductById = createAsyncThunk(
    "update Product  ById  ",
    (payload: any) => {
      return  putRequest(apiEndPoints.updateElectronicsProduct, payload).then(
        (response:any) => response
      );
    }
  );
  // delete product
  export const deleteElectronicsProduct = createAsyncThunk(
    "delete Product    ",
    (payload: any) => {
      return  deleteRequest(apiEndPoints.electronics, payload).then(
        (response:any) => response
      );
    }
  );