const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    productList: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Products',
        },
        orderStatus: {
          type: String,
        },
        orderedDate: {
          type: Date,
        },
        deliveryDate: {
          type: Date,
        },
        invoice: {
          type: String,
        },
        paymentMethod: {
          type: String,
        },
        address: {
          type: String,
        },
        orderPrice: {
          type: String,
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
  OrdersSchema,
};
