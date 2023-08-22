const mongoose = require('mongoose');
const ProductModal = new mongoose.Schema(
  {
    isAdmin: {
      type: Boolean,
      default: false
    },
    userId: { type: String, required: true },
    categories: [{ type: String }], 
  },
  { timestamps: true }
);

module.exports = mongoose.model('categoryList', ProductModal);
