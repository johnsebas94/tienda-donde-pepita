const express = require("express");
const router = express.Router();
const StoreController = require("../controllers/store");

//http://localhost:3003/api/tienda-donde-pepita/register-Store
router.post("/register-Store", StoreController.registerStore);
//http://localhost:3003/api/tienda-donde-pepita/Store-list
router.get("/Store-list", StoreController.listStore);

module.exports = router;
