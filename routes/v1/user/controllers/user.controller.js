const argon2 = require('argon2');
const { userService } = require('../services/user.service');
const config = require('config');
const { validationResult } = require('express-validator');
/**
 *  @desc     Teknas Store create user API
 *  @author   Sanket Pardeshi
 *  @since    Nov 19, 2023
 *  @api      /user
 *  @method   POST
 **/

exports.createUser = async (req, res, next) => {
  try {
    const userJson = req.body;
    const localUser = res.locals.user;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new FieldsError({
        errors: errors.array().map(({ msg, param, location }) => ({
          message: msg,
          path: param,
          location,
        })),
      });
    }

    let result = {};
    if (userJson) {
      result = await userService.createOrganizationUser({
        userJson,
        localUser,
      });
    }

    const httpCode = req.method === 'POST' ? 201 : 200;
    const successMessage =
      req.method === 'POST'
        ? 'User created successfully!'
        : 'User updated successfully!';
    return res.status(httpCode).json({ data: result, message: successMessage });
  } catch (err) {
    next(err);
  }
};
