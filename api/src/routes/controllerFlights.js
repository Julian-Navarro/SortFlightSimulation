const Router = require("express");
const router = Router();
const { Flight } = require("../db");
router.get("/all", async (req, res) => {
  try {
    const allFlights = await Flight.findAll();
    allFlights.length
      ? res.status(200).send(allFlights)
      : res.status(404).send([{ msg: "There is no flights registered" }]);
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: error.msg });
  }
});

router.post("/", async (req, res) => {
  try {
    const { passengers } = req.body;
    if (!passengers || !passengers?.length) {
      return res
        .status(404)
        .send({ msg: "Missing passengers to create a flight" });
    }
    const newFlight = await Flight.create({ passengers });
    newFlight
      ? res.status(200).send({ msg: "New flight was created!", newFlight })
      : res
          .status(404)
          .send({ msg: "There was an error creating a new flight" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: error.message });
  }
});

module.exports = router;
