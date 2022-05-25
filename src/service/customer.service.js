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
