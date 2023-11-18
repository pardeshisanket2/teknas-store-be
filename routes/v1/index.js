module.exports = (app) => {
  app.use('/app-version', require('./app-version/app-version.routing'));
};
