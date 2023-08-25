const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      if (error.details[0].type === "string.pattern.base") {
        throw HttpError(401, "Email or password is wrong");
      } else {
        throw HttpError(400, error.message);
      }
    }
    next();
  };

  return func;
};

module.exports = validateBody;
