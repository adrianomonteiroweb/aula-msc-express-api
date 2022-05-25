const { customerLoginService } = require("../service/customer.service");

const customerLoginController = async (req, res) => {
  let login;

  try {
    login = await customerLoginService(req.body);
  } catch (error) {
    return res.status(500).send({ message: "Service internal error" });
  }

  return !login.status
    ? res.status(200).send({ message: `Login efetuado para ${login.email}!` })
    : res.status(login.status).send({ message: login.message });
};

module.exports = { customerLoginController };
