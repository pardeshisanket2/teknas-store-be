const { ProductsSchema } = require('../models/products/products.model');
const { UsersSchema } = require('../models/users/users.model');
const { OrdersSchema } = require('../models/orders/orders.model');
const { ReviewsSchema } = require('../models/reviews/reviews.model');

module.exports = {
  ProductsSchema,
  UsersSchema,
  OrdersSchema,
  ReviewsSchema,
};
