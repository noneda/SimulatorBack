const SimulatorPaths = require('./Simulator')

const send = (app) => {
  app.use("/api/test", SimulatorPaths);

}

module.exports = send;
