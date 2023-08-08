import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonPostRequest ,deleteRequest,getRequest, getRequestForData, postRequest, putRequest} from "./axios/axios";
import apiEndPoints from "../apiConfig/apiEndPoints";

 /// grocery
//  category: "category",
//  categoryList: "category/adminList",
//  addcategoryProduct: 'category/addproduct',
//  updatecategoryProduct: "category/update",
export const addCategoryProduct = createAsyncThunk(
  "addd Product    ",
  (payload: any) => {
    return  postRequest(apiEndPoints.addcategoryProduct, payload).then(
      (response:any) => response
    );
  }
)
  // get product list  
  export const getCategoryList = createAsyncThunk(
    "get product list ",
    (payload: any) => {
      return  getRequestForData(apiEndPoints.categoryList, payload).then(
        (response:any) => response
      );
    }
  );
   //  update Product  ById  
   export const updateCategoryProductById = createAsyncThunk(
    "update Product  ById  ",
    (payload: any) => {
      return  putRequest(apiEndPoints.updatecategoryProduct, payload).then(
        (response:any) => response
      );
    }
  );
  // delete product
  export const deleteCategoryProduct = createAsyncThunk(
    "delete Product    ",
    (payload: any) => {
      return  deleteRequest(apiEndPoints.category, payload).then(
        (response:any) => response
      );
    }
  );