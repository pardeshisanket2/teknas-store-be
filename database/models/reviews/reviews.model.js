const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Products',
      required: true,
    },
    productRating: {
      type: Number,
    },
    reviewHeading: {
      type: String,
      required: [true, 'Review Heading is required'],
      minlength: [
        3,
        'Review Heading must contain at least 3 characters, got {VALUE}',
      ],
      maxlength: [
        100,
        'Review Heading cannot contain at more than 100 characters, got {VALUE}',
      ],
    },
    reviewDescription: {
      type: String,
      required: [true, 'Review Description is required'],
      minlength: [
        3,
        'Review Description must contain at least 3 characters, got {VALUE}',
      ],
      maxlength: [
        255,
        'Review Description cannot contain at more than 255 characters, got {VALUE}',
      ],
    },
    reviewDate: {
      type: Date,
    },
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
  ReviewsSchema,
};
