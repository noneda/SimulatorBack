import routes from './routers';


import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: "TESTING APP UDC Virtualizacion",
    author: "UDC",
    version: "0.0.1",
    description: "It´s repository is only for test Simulator",
  });
});


routes(app);

export default app;
