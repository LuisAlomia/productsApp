const express = require("express");
const router = require("./products/products.routers");
const app = express();

app.use(express.json());
app.use("/products/v1", router);

module.exports = app;
