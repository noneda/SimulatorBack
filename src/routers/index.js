import SimulatorPaths from './Simulator'

export default function (app) {
  app.use("/api/test", SimulatorPaths);

}
