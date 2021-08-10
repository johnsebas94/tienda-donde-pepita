const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product");

//http://localhost:3003/api/tienda-donde-pepita/registerProduct
router.post("/registerProduct", ProductController.registerProduct);
//http://localhost:3003/api/tienda-donde-pepita/listProduct
router.get("/listProduct", ProductController.listProduct);

module.exports = router;
