import { createContext, useState } from "react";

export const AutoContext = createContext();

export function AutoProvider({ children }){
    const [user, setUser] = useState(null);

    const login = async (username , password)=>{
        try{
            const response = await fetch('https://029a920a991f.ngrok-free.app/auth/jwt/create/',{
                method:"POST",
                headers:{
                    'Content-Type' : 'application/json',
                },
                body:JSON.stringify({username , password})
            })
            // ____Check______Response______
            if(!response.ok){
                throw new Error('Login faild')
            }

            const data=await response.json()

            console.log(data)
            return false;
        } catch (error){
            console.error('login faild' , error)
            return false;
        }
    }

    return (
        <AutoContext.Provider value={{ user, setUser , login }}>
          {children}
        </AutoContext.Provider>
    );
}