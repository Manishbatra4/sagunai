const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  await prisma.associate
    .findMany({
      include: {
        specials: true,
      },
    })

    .then((response) => {
      console.log(response);
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
  const { name, phone, address, skills } = req.body;

  let skillArray = [];
  for (var i = 0; i < skills.skill.length; i++) {
    skillArray.push({ id: parseInt(skills.skill[i]) });
  }

  await prisma.associate
    .create({
      data: {
        name,
        phone,
        address,
        specials: {
          connect: [...skillArray],
        },
      },
    })
    .then((response) => {
      console.log(response);
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
  await prisma.associate
    .findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        specials: {
          include: {
            special: true,
          },
        },
      },
    })
    .then((response) => {
      console.log(response);
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

  await prisma.associate
    .update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...req.body,
      },
    })
    .then((response) => {
      console.log(response);
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
  await prisma.associate
    .delete({
      where: {
        id: parseInt(id),
      },
    })
    .then((response) => {
      console.log(response);
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
