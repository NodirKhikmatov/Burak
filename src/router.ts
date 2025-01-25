import express from "express";
const router = express.Router();
import memberController from "./controller/member.controller";

// member

router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.get(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);
router.get("/member/detail", memberController.verifyAuth);

//product
//order

export default router;
