const config = require('config');
const mongoose = require('mongoose');
const { SimpleError } = require('../lib/exception');

// my cluster
const conn = mongoose.createConnection(config.get('MONGODB_URI'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class MongooseUtil {
  static getConnectionByDatabase({ database }) {
    switch (database) {
      case 'DEV':
        return conn;
      default:
        throw new SimpleError({
          message: 'Database not supported',
          code: '404',
        });
    }
  }

  static model({ database, modelName }) {
    const dbName = !database ? config.get('SERVER') : database;
    const _conn = this.getConnectionByDatabase({ database: dbName });

    const {
      ProductsSchema,
      UsersSchema,
      OrdersSchema,
      ReviewsSchema,
    } = require('../database/models');

    switch (modelName) {
      case 'Products':
        return _conn.model('Products', ProductsSchema, 'Products');
      case 'Users':
        return _conn.model('Users', UsersSchema, 'Users');
      case 'Orders':
        return _conn.model('Orders', OrdersSchema, 'Orders');
      case 'Reviews':
        return _conn.model('Reviews', ReviewsSchema, 'Reviews');
    }
  }
}

module.exports = {
  MongooseUtil,
};
