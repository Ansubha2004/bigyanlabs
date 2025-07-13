import express from "express";
import {authsignupValidation,authloginValidation} from "../middlewares/Authvalidation.js"
import {isloggedIn} from "../middlewares/isloggedIn.js"
import {logout,login,signup} from "../controllers/Authcontroller.js"

const router=express.Router();

router.post("/login",authloginValidation,login);
router.post("/register",authsignupValidation,signup);
router.get("/logout",isloggedIn,logout);

export default router;