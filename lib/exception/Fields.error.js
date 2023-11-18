module.exports = class FieldError extends Error {
  constructor ({ message = 'Invalid fields', errors }) {
    super(message)
    this.errors = errors
  }
}
