import {Router} from "express";
import {register , login, logout , profile} from "../controllers/auth.controller.js"
import {requireAuth} from "../middlewares/tokenValidation.js"

const  router = Router();


router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile',requireAuth, profile);


export default  router;