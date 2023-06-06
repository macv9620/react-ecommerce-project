import { useEffect, useState } from "react"
import axios from "axios"

const BASE_URL = 'http://localhost:3000/login'

const useLoginApi = (dataToPost) => {
    const[logInResponse, setLoginResponse] = useState(null)

useEffect(()=>{
    if(dataToPost){
        console.log('Llamar a API')
        console.log(dataToPost)
        axios.post(BASE_URL, dataToPost)
        .then(res => {
            setLoginResponse(res)
            console.log('status 200', res)
        })
        .catch(err => {
            setLoginResponse(err)
            console.log(err)
        })
    }
}, [dataToPost])

return{logInResponse}

}

export {useLoginApi}