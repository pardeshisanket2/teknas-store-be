const config = require('config');

class AppVersionService {
  async version() {
    const result = {
      version: config.get('VERSION') || undefined,
      server: config.get('SERVER') || undefined,
    };
    console.log('result', result);
    return result;
  }
}

const appVersionService = new AppVersionService();
module.exports = {
  appVersionService,
};
