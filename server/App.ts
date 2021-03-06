const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const path = require("path");
require("dotenv").config();

const middlewares = require("./src/middlewares");
const api = require("./src/api/api");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (_req: any, res: any) => {
  res.json({
    message: "Hello!🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
