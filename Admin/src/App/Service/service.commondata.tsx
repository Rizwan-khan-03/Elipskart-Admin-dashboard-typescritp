import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,deleteRequest,getRequest, getRequestForData, postRequest, putRequest} from "./axios/axios";
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
  export const getProductList = createAsyncThunk(
    "get product list ",
    (payload: any) => {
      return  getRequestForData(apiEndPoints.groceryList, payload).then(
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
      return  postRequest(apiEndPoints.addProduct, payload).then(
        (response:any) => response
      );
    }
  );

  // delete product
  export const deleteProduct = createAsyncThunk(
    "addd Product    ",
    (payload: any) => {
      return  deleteRequest(apiEndPoints.Product, payload).then(
        (response:any) => response
      );
    }
  );