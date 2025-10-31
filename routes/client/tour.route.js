const router = require("express").Router();
const tourController = require("../../controllers/client/tour.controller");

router.get("/tour-lists", tourController.list);

module.exports = router;
