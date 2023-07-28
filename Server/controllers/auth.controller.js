import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createToeknAccess } from '../libs/jwt.js';


export const register = async (req , res)=>{
    const {email,password,username}= req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
           username,
           email,
           password:passwordHash 
        });
        const userSaved = await newUser.save();
        const token = await createToeknAccess({id:userSaved._id});
        res.cookie('token',token)
        res.status(201).json({
            id:userSaved._id,
            username:userSaved.username,
            email :userSaved.email
        });
    } catch (error) {
        res.status(500).json({message:error.message})
    }

};


export const login = async (req , res)=>{
    const {email,password}= req.body;
    try {
        const userFound = await User.findOne({email})
         if(!userFound) return res.status(400).json({message : "User not found"});

        const isMatch = await bcrypt.compare(password , userFound.password);
        if(!isMatch) return res.status(400).json({message: "Error in Credentials"});

        
        const token = await createToeknAccess({id:userFound._id});
        res.cookie('token',token)
        res.status(201).json({
            id:userFound._id,
            username:userFound.username,
            email :userFound.email
        });
    } catch (error) {
        res.status(500).json({message:error.message})
    }

};



export const logout = (req, res)=>{
    res.cookie('token','',{
        expires : new Date(0),
    });
    return res.sendStatus(200);
}


export const profile = async (req, res)=>{
    res.send("profile")
}