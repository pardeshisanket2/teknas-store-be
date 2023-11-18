const { appVersionService } = require('../services/app-version.service');
const { SimpleError } = require('../../../../lib/exception/index');
exports.version = async (req, res, next) => {
  try {
    const result = await appVersionService.version();
    if (!result) throw new SimpleError('Something went wrong...');
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
