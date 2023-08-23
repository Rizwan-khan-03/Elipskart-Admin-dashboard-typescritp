const { ProductModal } = require("../models");
const CryptoJS = require("crypto-js");

module.exports = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString();
  }
  try {
    // find by product id
    const { isAdmin, title, brand, img,available, desc, categories, price, productCode, discountPercentage,userId ,weight} = req.body;
		
		let grocery = { isAdmin, title, brand,img, desc, available, categories, price, productCode, discountPercentage,userId,weight };
		
    const sameProductExist = await ProductModal.exists({title });
		if (sameProductExist) {
			throw new Error(`Product with  same title(${title}) already exists.`);
		}
    const updated_grocery = await ProductModal.findByIdAndUpdate(
      req.body.id,
      {
        $set: grocery,  
      },
      { new: true }
    );
    // let query  = {'_id' : req.body.id};
    // let updated_grocery = await ProductModal.updateOne(query, {
    //   $set: req.body.formData,
    // },
    // { new: true }).exec();
    // console.log('updated_grocery.acknowledged',updated_grocery.acknowledged);

    if (updated_grocery) res.status(200).send({
      payload: updated_grocery,
      message: "grocery update success",
      responseCode: 200
    });
    else res.status(400).send({
      payload: {},
      message: "grocery not found",
      responseCode: 400
    });

  } catch (err) {
    res.status(400).send({
      payload: {},
      message: "some thing is wrong",
      responseCode: 401,
      err:err.toString()
    });
  }
}
