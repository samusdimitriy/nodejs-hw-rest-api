const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody, authenticate, checkBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const router = express.Router();

router.post(
  "/register",
  checkBody,
  validateBody(schemas.registerSchema),
  ctrl.register
);
router.post("/login", checkBody, validateBody(schemas.loginSchema), ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/getCurrent", authenticate, ctrl.getCurrent);
router.patch("/", authenticate, ctrl.updateSubscription);
module.exports = router;
