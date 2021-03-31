global.__basedir = __dirname;
require('dotenv').config();
const dbConnector = require('./config/db');
const apiRouter = require('./router');
const cors = require('cors');
const { errorHandler } = require('./utils');
const path = require("path");
const filesPath = path.resolve(__dirname, "./build/");

dbConnector()
  .then(() => {
    const config = require('./config/config');

    const app = require('express')();
    require('./config/express')(app);

    // app.use(cors({
    //   // credentials: true,
    //   // heroku url
    // }));

    app.use(cors(config.cors));

    app.use('/api', apiRouter);

    console.log(filesPath);
    app.all("*", (req, res) => res.sendFile(`${filesPath}/index.html`));

    app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error);