import { createContext, useContext, useState } from "react";

const UserContext = createContext(null)

export const UserContextProvider = ({children}) => {
    const [username, setUsername] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const [loginMsg, setLoginMsg] = useState(null);


    const adminLogin = async (e, email, password) => {
        e.preventDefault()
        const res = await fetch('http://localhost:3000/admin/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true'
            },
            credentials: 'include'
        })
        // const res = await fetch('https://webjs-nine.vercel.app/admin/login', {
        //     method: 'POST',
        //     body: JSON.stringify({email, password}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     // credentials: 'include'
        // })

        const response = await res.json()
        if(!res.ok) return setLoginError(res.error)
        setLoginMsg(response.message)

    }

    return(
        <UserContext.Provider
            value={{
                username,
                loginError,
                loginMsg,
                adminLogin
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext)
    return context;
}