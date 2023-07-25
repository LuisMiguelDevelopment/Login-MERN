import User from '../models/user.model.js';


export const register = async (req , res)=>{
    const {email,password,username}= req.body;

    try {
        const newUser = new User({
           username,
           email,
           password 
        });
        const userSaved = await newUser.save();
        return res.status(201).json(userSaved);
    } catch (error) {
        res.status(500).json({message:error.message})
    }

};
export const login = (req , res)=> res.send("Login");