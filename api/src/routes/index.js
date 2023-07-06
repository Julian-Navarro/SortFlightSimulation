const Router = require("express");
const router = Router();
const controllerFlights = require("./controllerFlights.js");

router.use("/flightSimulator", controllerFlights);

module.exports = router;
