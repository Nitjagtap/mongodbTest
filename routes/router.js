const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/order",controller.order);
router.get("/index",controller.index);



module.exports = router;
