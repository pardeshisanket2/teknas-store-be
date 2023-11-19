const argon2 = require('argon2');
const { default: mongoose } = require('mongoose');
const config = require('config');
const { MongooseUtil } = require('../../../../util/mongoose.util');

const {
  UnauthorizedError,
  FieldsError,
  SimpleError,
} = require('../../../../lib/exception');

class UserService {
  constructor() {
    this.UsersModel = MongooseUtil.model({ modelName: 'Users' });
  }
  async createOrganizationUser({ userJson, localUser }) {
    console.log('in service');
    console.log('userJson', userJson);
    const { _id, password } = userJson;

    // userJson.updatedBy = localUser._id;

    if (!_id) {
      delete userJson._id;
    }

    if (!_id && password) {
      userJson.password = await argon2.hash(password);
    } else {
      delete userJson.password;
    }

    console.log('UsersModel', this.UsersModel);
    const user = await this.UsersModel.findOneAndUpdate(
      { _id: _id || mongoose.Types.ObjectId() },
      {
        $set: { ...userJson },
      },
      { upsert: true, new: true, runValidators: true }
    ).select({ password: 0 });

    return user;
  }
}

const userService = new UserService();
module.exports = {
  userService,
};
