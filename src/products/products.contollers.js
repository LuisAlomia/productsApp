const uuid = require("uuid");
const Products = require("../models/products.models");

const getAllproducts = async () => {
  const data = await Products.findAll();
  return data;
};

const getProductsById = async (id) => {
  const data = await Products.findOne({ where: { id } });
  return data;
};

const createProducts = async (data) => {
  const newData = await Products.create({
    id: uuid.v4(),
    ...data,
  });
  return newData;
};

const deleteProducts = async (id) => {
  const data = await Products.destroy({ where: { id } });
  return data;
};

const updateProducts = async (id, data) => {
  const updateData = await Products.update(data, { where: { id: id } });
  return updateData;
};

module.exports = {
  getAllproducts,
  getProductsById,
  createProducts,
  deleteProducts,
  updateProducts,
};
