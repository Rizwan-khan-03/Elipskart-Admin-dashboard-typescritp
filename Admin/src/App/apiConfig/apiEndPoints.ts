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

     /// order
     order:"order",

  // fasoin
  fashion:"fashion",
  fashionList:"fashion/adminList",
  updateFashoinProduct:"fashion/update",
  addFashoinProduct:"fashion/addproduct",

  //buety
  buety:"buety",
  buetyList:"buety/adminList",
  updateBuetyProduct:"buety/update",
  addbuetyProduct:"buety/addproduct",

  // electronics
  electronics:"electronics",
  electronicsList:"electronics/adminList",
  updateElectronicsProduct:"electronics/update",
  addElectronicsProduct:"electronics/addproduct",


  // appliances
  appliances:"appliances",
  appliancesList:"appliances/adminList",
  updateAppliancesProduct:"appliances/update",
  addAppliancesProduct:"appliances/addproduct",
    

};

export default apiEndPoints;
