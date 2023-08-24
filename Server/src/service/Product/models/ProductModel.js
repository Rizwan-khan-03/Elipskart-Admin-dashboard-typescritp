
  const mongoose = require('mongoose');
  const ProductSchema = new mongoose.Schema(
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
      features: {
        ram: { type: String, required: true },
        rom: { type: String, required: true },
        screenSize: { type: String, required: true },
        secondaryCamera: { type: String, required: true },
        primaryCamera: { type: String, required: true },
        batteryCapacity: { type: String, required: true },
        warranty: { type: String, required: true },
      },
      price: { type: Number, required: true },
      discountPercentage: { type: Number, required: true },
      productCode: { type: Number, required: true },
      ratings: {
        overallRating: { type: Number, required: true },
        totalRatings: { type: Number, required: true },
        totalReviews: { type: Number, required: true },
      },
    },
    { timestamps: true }
  );

  module.exports = mongoose.model('Product', ProductSchema);
