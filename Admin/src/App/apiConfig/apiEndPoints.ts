const apiEndPoints = {
  methodType: {
    PUT: "put",
    GET: "get",
    POST: "post",
    DELETE: "delete",
    PATCH: "patch",
  },

  //OnBoarding-------
  Login: "user/login",

  /// product
  Product:'product',
  GetList: "product/adminList",
  updateProduct: "product/update",
  addProduct:'product/addproduct',
  //
   /// grocery
   grocery:"grocery",
   groceryList: "grocery/adminList",
   updateGroceryProduct: "grocery/update",
   addGroceryProduct:'grocery/addproduct',
     /// grocery
     order:"order",
    

};

export default apiEndPoints;
