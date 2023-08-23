const HttpError = require("../helpers/HttpError");

const checkBody = (req, res, next) => {
  const body = req.body;
  if (Object.keys(body).length === 0) {
    throw HttpError(400, "missing field favorite");
  }
  next();
};

module.exports = checkBody;
