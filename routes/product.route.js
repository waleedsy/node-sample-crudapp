const express = require("express");
const Product = require("../models/products.model.js")
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} /*productController*/ = require("../controllers/product.controller.js")


router.get('/', getProducts);

router.get("/:id", getProduct)

router.post("/", createProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)

module.exports = router;