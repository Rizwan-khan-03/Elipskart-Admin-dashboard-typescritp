import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,deleteRequest,getRequest, getRequestForData, postRequest, putRequest} from "./axios/axios";
import apiEndPoints from "../apiConfig/apiEndPoints";

// appliances:"appliances",
//   appliancesList:"appliances/adminList",
//   updateAppliancesProduct:"appliances/update",
//   addAppliancesProduct:"appliances/addproduct",
export const addAppliancesProduct = createAsyncThunk(
  "addd Product    ",
  (payload: any) => {
    return  postRequest(apiEndPoints.addAppliancesProduct, payload).then(
      (response:any) => response
    );
  }
)
  // get product list  
  export const getAppliancesList = createAsyncThunk(
    "get product list ",
    (payload: any) => {
      return  getRequestForData(apiEndPoints.appliancesList, payload).then(
        (response:any) => response
      );
    }
  );
   //  update Product  ById  
   export const updateAppliancesProductById = createAsyncThunk(
    "update Product  ById  ",
    (payload: any) => {
      return  putRequest(apiEndPoints.updateAppliancesProduct, payload).then(
        (response:any) => response
      );
    }
  );
  // delete product
  export const deleteAppliancesProduct = createAsyncThunk(
    "delete Product    ",
    (payload: any) => {
      return  deleteRequest(apiEndPoints.appliances, payload).then(
        (response:any) => response
      );
    }
  );