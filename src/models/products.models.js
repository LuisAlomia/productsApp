const { DataTypes } = require("sequelize");
const dbSequelize = require("../config/db.config");

const Products = dbSequelize.define("products", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: "is_available",
    defaultValue: true,
  },
});

module.exports = Products;
