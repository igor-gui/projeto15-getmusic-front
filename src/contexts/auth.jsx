import { createContext, useState } from "react";

const AuthContext = createContext()

export default function AuthContextProvider({children}){

    const [user, setUser] = useState({})

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}