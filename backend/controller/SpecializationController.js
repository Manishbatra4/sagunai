const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  await prisma.specialization
    .findMany({})
    .then((response) => {
      return res.send({
        data: response,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.send({
        error,
      });
    });
});

router.post("/add", async (req, res, next) => {
  const { name } = req.body;

  await prisma.specialization
    .create({
      data: {
        name,
      },
    })
    .then((response) => {
      return res.send({
        data: response,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.send({
        error,
      });
    });
});

router.post("/s/:id", async (req, res, next) => {
  const { id } = req.params;
  await prisma.specialization
    .findUnique({
      where: {
        id: parseInt(id),
      },
    })
    .then((response) => {
      return res.send({
        data: response,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.send({
        error,
      });
    });
});

router.post("/update/:id", async (req, res, next) => {
  const { id } = req.params;

  await prisma.specialization
    .update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...req.body,
      },
    })
    .then((response) => {
      return res.send({
        data: response,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.send({
        error,
      });
    });
});

router.post("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  await prisma.specialization
    .delete({
      where: {
        id: parseInt(id),
      },
    })
    .then((response) => {
      return res.send({
        data: response,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.send({
        error,
      });
    });
});

module.exports = router;
