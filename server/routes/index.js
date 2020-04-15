const express = require("express");
const app = express();

app.use(require("./productos"));

module.exports = app;
