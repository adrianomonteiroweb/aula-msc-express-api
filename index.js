const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", (_request, response) =>
  response.status(200).send({ message: "No ar!" })
);

const { routesAdm, routesCustomer } = require("./src/routes/routes");

app.use(routesAdm, routesCustomer);

app.listen(PORT, () => console.log(`Listen on http://localhost:${PORT}`));
