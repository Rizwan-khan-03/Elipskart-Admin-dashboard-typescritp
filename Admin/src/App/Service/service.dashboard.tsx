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
  