const routesAdm = require("express").Router();

routesAdm.get("/adm", (_req, res) =>
  res.status(200).send({ message: "Adm route" })
);

module.exports = routesAdm;
