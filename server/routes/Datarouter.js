import express from "express"
import {isloggedIn} from "../middlewares/isloggedIn.js"
import {profile} from "../controllers/Authcontroller.js"


const router=express.Router();


router.get("/Data",isloggedIn,profile)

export default router