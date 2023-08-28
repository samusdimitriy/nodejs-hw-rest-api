const express = require("express");

const ctrl = require("../../controllers/contacts");

const { isValidId } = require("../../middlewares");

const { validateBody } = require("../../middlewares");

const checkBody = require("../../middlewares/checkBody");

//
const router = express.Router();

const schemas = require("../../schemas/contacts");

router.get("/", ctrl.listContacts);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", checkBody, validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put(
  "/:id",
  isValidId,
  checkBody,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
