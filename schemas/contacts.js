const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing required email field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "Missing required phone field" }),
  favorite: Joi.boolean(),
});
const updateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});
const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": `Missing field favorite` }),
});

module.exports = {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
};
