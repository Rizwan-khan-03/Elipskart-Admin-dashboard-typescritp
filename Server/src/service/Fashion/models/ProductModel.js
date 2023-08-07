
const mongoose = require('mongoose');
const ProductModal = new mongoose.Schema(
  {

    isAdmin: {
      type: Boolean,
      default: false
    },
    userId: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    brand: { type: String, required: true },
    available: { type: Boolean, required: true },
    img: { type: String, required: true },
    categories: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, required: true },
    productCode: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Fashion', ProductModal);
