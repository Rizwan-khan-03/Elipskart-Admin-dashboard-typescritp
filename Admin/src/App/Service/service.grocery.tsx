import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,deleteRequest,getRequest, getRequestForData, postRequest, putRequest} from "./axios/axios";
import apiEndPoints from "../apiConfig/apiEndPoints";


export const addGroceryProduct = createAsyncThunk(
  "addd Product    ",
  (payload: any) => {
    return  postRequest(apiEndPoints.addGroceryProduct, payload).then(
      (response:any) => response
    );
  }
)
  // get product list  
  export const getGroceryList = createAsyncThunk(
    "get product list ",
    (payload: any) => {
      return  getRequestForData(apiEndPoints.groceryList, payload).then(
        (response:any) => response
      );
    }
  );
   //  update Product  ById  
   export const updateGroceryProductById = createAsyncThunk(
    "update Product  ById  ",
    (payload: any) => {
      return  putRequest(apiEndPoints.updateGroceryProduct, payload).then(
        (response:any) => response
      );
    }
  );

  // delete product
  export const deleteGroceryProduct = createAsyncThunk(
    "delete Product    ",
    (payload: any) => {
      return  deleteRequest(apiEndPoints.grocery, payload).then(
        (response:any) => response
      );
    }
  );