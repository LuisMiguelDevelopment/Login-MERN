import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js";

export const requireAuth = (req , res , next)=>{
    const { token } = req.cookies;
    console.log(token)
    if(!token)return res.status(401).json({message:"No token , Authorization denied"})

    jwt.verify(token , TOKEN_SECRET, (err,user)=>{
        if(err) res.status(403).json({message:"Invalid token"})
        req.user = user;
        next();
    })
}