/* 

   Responsável por controlar requisições e respostas. Ou seja, o que é enviado a API e o que é como ela 
responde. O controller não conhece as regras de negócio da API, essas são responsabilidade do service.

*/

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
