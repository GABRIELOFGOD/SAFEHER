import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const UserContext = createContext(null)

const url = 'http://localhost:3000'

export const UserContextProvider = ({children}) => {
    const [username, setUsername] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const [loginMsg, setLoginMsg] = useState(null);
    const [blog, setBlog] = useState(null);

    const logout = async() => {
        console.log('clicked')
        const res = await fetch('http://localhost:3000/admin/logout', {credentials: 'include'})
        const response = await res.json()
        console.log(response)
        setUsername(null)
    }

    const postBlog = async (e, file, title, body) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', title)
        formData.append('body', body)
        const res = await fetch(`${url}/blog/post`, {
            method: 'POST',
            body: formData,
            // headers: {'Content-Type': 'multipart/form-data'},
            credentials: 'include'
        })

        const response = await res.json()
        if(!res.ok) {
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '300'
            })
        }

        if(res.ok){
            toast.success(response.message, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '300'
            })
            location.reload()
        }
    }

    const fetchBlog = async () => {
        const res = await fetch(`${url}/blog/get`)
        const response = await res.json()
        if(!res.ok){
            setLoginError(response.error)
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '300'
            })
        }
        if(res.ok){
            console.log(response)
        }
    }

    const getAdmin = async () => {
        const res = await fetch('http://localhost:3000/admin/login', { credentials: 'include' })
        const response = await res.json()
        if(!res.ok){
            setLoginError(response.error)
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '300'
            })
        }
        if(res.ok){
            setLoginMsg(response.message)
            setUsername(response.data.name)
        }
    }


    const adminLogin = async (e, email, password) => {
        e.preventDefault()
        const res = await fetch('http://localhost:3000/admin/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        // const res = await fetch('https://webjs-nine.vercel.app/admin/login', {
        //     method: 'POST',
        //     body: JSON.stringify({email, password}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include'
        // })

        const response = await res.json()
        if(!res.ok) {
            setLoginError(response.error)
            toast.error(response.error, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '300'
            })
        }
        if(res.ok){
            setLoginMsg(response.message)
            toast.success(response.message, {
                position: 'top-right',
                className: 'text-[12px]',
                duration: '300'
            })
            location.assign('/')
        }
    }

    return(
        <UserContext.Provider
            value={{
                username,
                loginError,
                loginMsg,
                adminLogin,
                getAdmin,
                setUsername,
                logout,
                postBlog,
                fetchBlog
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