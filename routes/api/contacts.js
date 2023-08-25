const express = require("express");

const ctrl = require("../../controllers/contacts");

const { isValidId } = require("../../middlewares");

const { validateBody } = require("../../middlewares");

const checkBody = require("../../middlewares/checkBody");

//
const router = express.Router();

const { schemas } = require("../../models/contacts");
const authenticate = require("../../middlewares/authenticate");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete("/:id", authenticate, isValidId, ctrl.removeContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  checkBody,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
