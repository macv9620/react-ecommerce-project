import { useEffect, useState } from "react"
import axios from "axios"
import { useAppContext } from "../Context/ContextAppProvider"
import { useAuthContext } from "../Context/ContextAuthProvider"

const BASE_URL = 'http://localhost:3000/login'

const useLogInApi = (dataToPost, clearForm) => {
    const[logInResponse, setLoginResponse] = useState(null)
    const{setRenderLoadingSpinner} = useAppContext()
    const{setToken} = useAuthContext()

useEffect(()=>{
    if(dataToPost){
        setRenderLoadingSpinner(true)
        console.log('API request: LogIn')
        axios.post(BASE_URL, dataToPost)
        .then(res => {
            setLoginResponse(res)
            if(res.status === 200){
                console.log(res)
                const jwt = res.data.token
                setToken(jwt)
            }
            setRenderLoadingSpinner(false)
            clearForm()
        })
        .catch(err => {
            setLoginResponse(err)
            console.log(err)
            setRenderLoadingSpinner(false)
        })
    }
}, [dataToPost])

return{logInResponse}

}

export {useLogInApi}