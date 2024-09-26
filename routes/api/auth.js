const express = require("express");
const ctrl = require("../../controllers/auth");
const {
  authenticate,
  checkBody,
  upload,
  validateBody,
} = require("../../middlewares");
const { schemas } = require("../../models/user");
const router = express.Router();

router.post(
  "/register",
  checkBody,
  validateBody(schemas.registerSchema),
  ctrl.register
);
router.post("/login", checkBody, validateBody(schemas.loginSchema), ctrl.login);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);
router.patch("/", authenticate, ctrl.updateSubscription);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);
module.exports = router;
