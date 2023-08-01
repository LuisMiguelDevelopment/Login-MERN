import {z} from 'zod';


export const registerSchema = z.object({
    username : z.string({
        required_error:"Username is a required field"
    }),
    email : z.string({
        required_error:"Email address is a required field"
    }).email({
        message:"Invalid Email Address"
    }),
    password: z.string({
        required_error:'Password is requiered field '
    }).min(6,{
        message: 'Password must be at least  6characters long'
    })
})


export const loginSchema = z.object({
    email : z.string({
        required_error:"Email address is a required field"
    }).email({
        message:"Invalid Email Address"
    }),
    password: z.string({
        required_error:'Password is requiered field '
    }).min(6,{
        message: 'Password must be at least  6characters long'
    })
})
