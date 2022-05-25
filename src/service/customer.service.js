/*

   O service conhece e garante que as regras de negócio da API sejam respeitadas. Faz consultas ao model
   (que trata com banco de dados) e responde as requisições de acordo com as regras. Sendo assim de fato 
   o serviço.

*/

const { loginSchema } = require("../utils/schemas");
const errorConstructor = require("../utils/errorConstructor");

const customerLoginService = async ({ email, password }) => {
  const { error } = loginSchema.validate({ email, password });

  if (error) {
    const { details } = error;

    return errorConstructor(400, details[0].message);
  }

  return { email };
};

module.exports = { customerLoginService };
