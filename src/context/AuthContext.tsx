import React, { createContext, useCallback } from "react";
import api from "../service/api";

interface AuthContextData{
    user: string;
    signIn(credentials: SignInCredentials): Promise<void>;
}

interface SignInCredentials{
    email: string;
    senha: string;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const signIn = useCallback(async({ email, senha }) => {
        const response = await api.post("authenticate", {
            email,
            senha,
        });
        console.log(response.data)
    }, []);
    
    return (
        <AuthContext.Provider value={{user: "Guilherme", signIn}}>
            {children}
        </AuthContext.Provider>
    );
}