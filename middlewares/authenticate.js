const jwt = require("jsonwebtoken");

const { User } = require("../models/user");

const { HttpError } = require("../helpers");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const authenticate = async (req, _, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new HttpError(401, "Not authorized");
  }

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw new HttpError(401, "Not authorized");
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || user.token !== token || user.token === null) {
      throw new HttpError(401, "Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new HttpError(401, "Not authorized");
  }
};

module.exports = {
  authenticate,
};
