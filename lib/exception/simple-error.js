
module.exports = class SimpleError extends Error {
  constructor ({ message = 'Something went wrong...', code = 500 }) {
    super(message)
    this.code = code
  }
}
