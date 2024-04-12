const router = require('./Simulator')

const send = (app) => {
  app.use("/api/test", router);

}

module.exports = send;
