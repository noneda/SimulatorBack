const router = require('./Simulator')

const send = (app) => {
  app.use("/test", router);

}

module.exports = send;
