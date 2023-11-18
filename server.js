const express = require('express');
const cors = require('cors');
const config = require('config');
const app = express();

const chalk = require('./lib/log-color.lib');

// Middleware setup
app.use(express.json());
app.use(cors({ origin: '*' }));

require('./routes/v1/index')(app);

const PORT = process.env.PORT || config.get('PORT');
const listen = app.listen(PORT, () => {
  console.log(chalk.blue('url:'), `    http://localhost:${PORT}`);
  console.log(chalk.blue('doc:'), `    http://localhost:${PORT}/api-docs`);
  console.log(chalk.blue('server:'), ` ${config.get('SERVER')}`);
});
module.exports = app;
module.exports.port = listen.address().port;
