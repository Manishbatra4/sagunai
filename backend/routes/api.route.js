const router = require("express").Router();
const specialController = require("../controller/SpecializationController");
const associateController = require("../controller/AssociateController");

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.use("/special", specialController);

router.use("/associate", associateController);

module.exports = router;
