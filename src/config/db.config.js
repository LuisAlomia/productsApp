const config = require("./env.config");
const { Sequelize } = require("sequelize");

const dbSequelize = new Sequelize({
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  dialect: "postgres",
  database: "products",
});

module.exports = dbSequelize;
