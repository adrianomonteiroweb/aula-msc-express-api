const routesCustomer = require("express").Router();

const {
  customerLoginController,
} = require("../controller/customer.controller");

routesCustomer.get("/customer", (_req, res) =>
  res.status(200).send({ message: "Customer route" })
);

routesCustomer.post("/customer/login", customerLoginController);

module.exports = routesCustomer;
