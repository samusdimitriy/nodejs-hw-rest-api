const express = require("express");

const ctrl = require("../../controllers/contacts");

const { isInvalidId } = require("../../middlewares");

// const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:id", isInvalidId, ctrl.getContactById);

router.post("/", ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", isInvalidId, ctrl.updateContact);

router.patch("/:id/favorite", isInvalidId, ctrl.updateContact);

module.exports = router;
