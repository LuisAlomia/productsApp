const productsConstrollers = require("./products.contollers");

/**
 * Get All Products
 * @param {*} req
 * @param {[products]} resp
 */
const getAllProductsServices = (req, resp) => {
  productsConstrollers
    .getAllproducts()
    .then((data) => resp.status(200).json(data))
    .catch((err) => resp.status(400).json({ message: err.message }));
};

/**
 * Get Product By Id
 * @param {id} req
 * @param {product} resp
 */
const getProductsByIdServices = (req, resp) => {
  const { id } = req.params;

  productsConstrollers
    .getProductsById(id)
    .then((data) => {
      if (data) {
        resp.status(200).json(data);
      } else {
        resp.status(404).json({ message: `Invalid ID` });
      }
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

/**
 * Create New Product
 * @param {name, category, price} req
 * @param {New product} resp
 */
const createProductsServices = (req, resp) => {
  const { name, category, price } = req.body;

  if (name && category && price) {
    productsConstrollers
      .createProducts({ name, category, price })
      .then((data) => resp.status(201).json(data))
      .catch((err) => resp.status(400).json({ message: err.message }));
  } else {
    resp.status(400).json({ message: `Bad request, missing parameters` });
  }
};

/**
 * Delete Product By Id
 * @param {id} req
 * @param {*} resp
 */
const deleteProductsServices = (req, resp) => {
  const { id } = req.params;

  productsConstrollers
    .deleteProducts(id)
    .then((data) => {
      if (data) {
        resp.status(204).json(data);
      } else {
        resp.status(404).json({ message: `Invalid ID` });
      }
    })
    .catch((err) => resp.status(400).json({ message: err.message }));
};

/**
 * Update Product By Item
 * @param {id, price, isAvailable} req
 * @param {*} resp
 */
const patchProductsServices = (req, resp) => {
  const { id } = req.params;
  const { price, isAvailable } = req.body;

  if (price && isAvailable) {
    productsConstrollers
      .updateProducts(id, { price, isAvailable })
      .then((data) => {
        if (data[0]) {
          resp.status(200).json({ message: `Product with id ${id} updated` });
        } else {
          resp.status(404).json({ message: `Invalid ID` });
        }
      })
      .catch((err) => resp.status(400).json({ message: err.message }));
  } else {
    resp.status(400).json({ message: `Bad request, missing parameters` });
  }
};

/**
 * Update Product
 * @param {id, name, category, price, isAvailable} req
 * @param {*} resp
 */
const putProductsServices = (req, resp) => {
  const { id } = req.params;
  const { name, category, price, isAvailable } = req.body;

  if (price && isAvailable && name && category) {
    productsConstrollers
      .updateProducts(id, { name, category, price, isAvailable })
      .then((data) => {
        if (data[0]) {
          resp.status(200).json({ message: `Product with ID ${id} updated` });
        } else {
          resp.status(404).json({ message: `Invalid ID` });
        }
      })
      .catch((err) => resp.status(400).json({ message: err.message }));
  } else {
    resp.status(400).json({ message: `Bad request, missing parameters` });
  }
};

module.exports = {
  patchProductsServices,
  createProductsServices,
  deleteProductsServices,
  getAllProductsServices,
  getProductsByIdServices,
  putProductsServices,
};
