import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,deleteRequest,getRequest, getRequestForData, postRequest, putRequest} from "./axios/axios";
import apiEndPoints from "../apiConfig/apiEndPoints";



  // get order list  
  export const getOrderList = createAsyncThunk(
    "get order list ",
    () => {
      return  getRequest(apiEndPoints.order).then(
        (response:any) => response
      );
    }
  );
  // get Categories list  
  export const getCategoriesList = createAsyncThunk(
    "get Categories list ",
    (payload: any) => {
      return  getRequest(`${apiEndPoints.categorieslist}${payload}`).then(
        (response:any) => response
      );
    }
  );
    // add Categories list  
    export const addCategoriesList = createAsyncThunk(
      "add Categories list ",
      (payload: any) => {
        console.log('payload',payload);
        return  postRequest(`${apiEndPoints.addcategorieslist}`,payload).then(
          (response:any) => response
        );
      }
    );
   // delete Categories list 
    export const deleteCategory = createAsyncThunk(
      "delete Category  ",
      (payload: any) => {
        return  deleteRequest(`${apiEndPoints.categorieslist}${payload.id}`,payload.category).then(
          (response:any) => response
        );
      }
    );