import { createContext, useState , useContext } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within on AuthProvider")
    }
    return context;
}

export const AuthProvider = ({children})=>{
    const [user , setUser]=useState(null);
    const [isAuthenticathed , setIsAuthenticathed] =useState(false);
    const [errors , setErrors] = useState([]);

    const sigup = async (user)=>{
        try {
            const res = await registerRequest(user)
            console.log(res);
            setUser(res.data);
            setIsAuthenticathed(true);
        } catch (error) {
            setErrors(error.response.data)
            console.log(error);
        }
    }
    return(
        <AuthContext.Provider value ={{
            sigup,
            user,
            isAuthenticathed,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}