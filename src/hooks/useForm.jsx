import { useState } from "react"

const useForm = (data, textToPrint, postFunction) => {
    const [input, setInput] = useState(data)
    const [requestResult, setRequestResult] = useState(null)

    const checkAndSendData = (objectToSend)=> {
      for(let value in objectToSend){
        if(objectToSend[value]===''){
          setRequestResult(`${textToPrint[value]} is required*`)
          return
        }
      }
      postFunction(objectToSend)
      setRequestResult(null)
    }
    
    const handleSubmit = (e)=> {
      e.preventDefault()
      checkAndSendData({...input})
    }

  return {
    input,
    setInput,
    handleSubmit,
    requestResult,
    setRequestResult,
  }
  
}

export {useForm}