import { useState } from "react"

const useForm = (data, textToPrint, postFunction) => {
    const [input, setInput] = useState(data)
    const [requiredMessage, setRequiredMessage] = useState(null)

    const checkAndSendData = (objectToSend)=> {
      for(let value in objectToSend){
        if(objectToSend[value]===''){
          setRequiredMessage(`${textToPrint[value]} is required*`)
          return
        }
      }
      postFunction(objectToSend)
      setRequiredMessage(null)
      setInput(data)
    }

    
    const handleSubmit = (e)=> {
      e.preventDefault()
      checkAndSendData(input)
    }

  return {
    input,
    setInput,
    handleSubmit,
    requiredMessage,
    setRequiredMessage,
  }
  
}

export {useForm}