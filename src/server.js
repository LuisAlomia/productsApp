const config = require("./config/env.config");
const app = require("./app");
const dbSequelize = require("./config/db.config");
const initModels = require("./models/initModels");

const server = async () => {
  try {
    await dbSequelize.authenticate();
    await dbSequelize.sync();

    console.log("init dbSequelize");

    initModels();

    app.listen(config.port, () => {
      console.log(`server in port: ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

server();
