const routes = require('./routers')


const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

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

module.exports = app;
