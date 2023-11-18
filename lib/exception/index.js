const PrivilegesError = require('./Privileges.error')
const SimpleError = require('./simple-error')
const UnauthorizedError = require('./Unauthorized.error')
const FieldsError = require('./Fields.error')

module.exports = {
  SimpleError,
  UnauthorizedError,
  PrivilegesError,
  FieldsError
}
