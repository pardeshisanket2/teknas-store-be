const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, 'Product Name is required'],
      maxlength: [
        255,
        'Product Name cannot contain at more than 255 characters, got {VALUE}',
      ],
    },
    productPrice: {
      type: Number,
      required: [true, 'Product Price is required'],
    },
    isPrime: {
      type: Boolean,
      default: false,
    },
    productBrand: {
      type: String,
      required: [true, 'Product Brand is required'],
    },
    productDescription: {
      type: String,
      required: [true, 'Product Description is required'],
    },
    productRating: {
      type: Number,
    },
    productReviews: [
      {
        reviewId: {
          type: Schema.Types.ObjectId,
          ref: 'Reviews',
        },
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

module.exports = {
  ProductsSchema,
};
