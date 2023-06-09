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
  GetList: "product/adminList",
  updateProduct: "product/update",
  addProduct:'product/addproduct'

};

export default apiEndPoints;
