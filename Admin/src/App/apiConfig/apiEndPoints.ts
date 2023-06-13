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
   /// product
   grocery:"grocery",
   groceryList: "grocery/adminList",
   updateGroceryProduct: "grocery/update",
   addGroceryProduct:'grocery/addproduct'

};

export default apiEndPoints;
