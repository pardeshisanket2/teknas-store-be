const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      minlength: [
        3,
        'Username must contain at least 3 characters, got {VALUE}',
      ],
      maxlength: [
        100,
        'Username cannot contain at more than 100 characters, got {VALUE}',
      ],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      unique: true,
      minlength: [3, 'Email must contain at least 3 characters, got {VALUE}'],
      maxlength: [
        100,
        'Email cannot contain at more than 100 characters, got {VALUE}',
      ],
      validate: {
        validator: function (v) {
          const re =
            /^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
          return !v || !v.trim().length || re.test(v);
        },
        message: 'Provided email is invalid',
      },
    },
    password: {
      type: String,
    },
    mobileNumber: {
      type: Number,
      required: [true, 'Mobile Number is required'],
      unique: true,
    },
    isPrime: {
      type: Boolean,
      default: false,
    },
    userType: {
      type: String,
      default: 'buyer',
    },
    orders: [
      {
        orderId: {
          type: Schema.Types.ObjectId,
          ref: 'Orders',
        },
      },
    ],
    wishlist: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Products',
        },
      },
    ],
    addresses: [
      {
        addressLine1: {
          type: String,
          maxlength: [
            100,
            'Address Line 1 cannot contain at more than 100 characters, got {VALUE}',
          ],
        },
        addressLine2: {
          type: String,
          maxlength: [
            100,
            'Address Line 2 cannot contain at more than 100 characters, got {VALUE}',
          ],
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
        pincode: {
          type: Number,
        },
      },
    ],
    paymentMethod: [
      {
        paymentMode: {
          type: String,
        },
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
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
  UsersSchema,
};
