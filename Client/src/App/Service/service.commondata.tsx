import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,getRequest, getRequestForData, putRequest} from "./axios/axios";
import apiEndPoints from "../apiConfig/apiEndPoints";


// login  
  export const loginUser = createAsyncThunk(
    "use login ",
    (payload: any) => {
      return  commonPostRequest(apiEndPoints.Login, payload).then(
        (response:any) => response
      );
    }
  );
  // get product list  
  export const getUserList = createAsyncThunk(
    "get product list ",
    (payload: any) => {
      return  getRequestForData(apiEndPoints.GetList, payload).then(
        (response:any) => response
      );
    }
  );
   //  update Product  ById  
   export const updateProductById = createAsyncThunk(
    "update Product  ById  ",
    (payload: any) => {
      return  putRequest(apiEndPoints.updateProduct, payload).then(
        (response:any) => response
      );
    }
  );
  export const addProduct = createAsyncThunk(
    "addd Product    ",
    (payload: any) => {
      return  putRequest(apiEndPoints.addProduct, payload).then(
        (response:any) => response
      );
    }
  );