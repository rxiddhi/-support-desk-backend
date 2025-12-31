import express from "express";
import {
  signUp,
  signIn,
  logout,
  allUsers,
} from "../../controllers/users/user.controller.js"; // i have not made controller yet

const router = express.Router();

router.get("/", allUsers);
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/logout", logout);

export default router;
