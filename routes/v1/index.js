module.exports = (app) => {
  app.use('/app-version', require('./app-version/app-version.routing'));
  app.use('/user', require('./user/user.routing'));
};
