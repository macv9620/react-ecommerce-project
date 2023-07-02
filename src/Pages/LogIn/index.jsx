import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useLogInApi } from "../../services/useLoginApi";


function LogIn() {
  const[postData, setPostData] = useState(null)
  const navigate = useNavigate()
  
  //const[requestResult, setRequestResult] = useState('')

  const data = {
    email: "",
    password: ""
  };
  
  const dataTextRequiredToShow = {
    email: "Email",
    password: "Password"
  }
  
  const apiPostForm = (objectToSend)=> {
    setPostData(objectToSend)
  }

 const clearForm = ()=>{
  setInput(data)
 }

  const {logInResponse} = useLogInApi(postData, clearForm)

  useEffect(()=>{
  if(logInResponse){
    if(logInResponse.code === 'ERR_NETWORK'){
        setRequestResult('We are having problems, please try again in a moment')
    } else if(logInResponse.response?.status === 400 || logInResponse.response?.status === 401 || logInResponse.response?.status === 404){
      setRequestResult('Invalid Email or Password')
    } else if(logInResponse.status === 200){
      setRequestResult('You are successfully Logged In token: ' + logInResponse.data.token[0] + '.....')
      navigate('../')
    } else {
      setRequestResult('Uncontrolled error')
    }
  }
  }, [logInResponse])
  
  

  const { input, setInput, handleSubmit, requestResult, setRequestResult} = useForm(data, dataTextRequiredToShow, apiPostForm);
  
  const handleOnchange = (e) => {
    setInput((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="log-in">
        <h2>Login to your account</h2>
        <form 
          className="custom-form flex flex-col items-center" 
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email"
            value={input.email}
            onChange={handleOnchange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={input.password}
            onChange={handleOnchange}
          />
          {requestResult && <p className="required-message">{requestResult}</p>}
          <p className="create-account-message">¿New user? <Link className='underline font-light' to={'/sign-up'}>Create your account</Link></p>
          <button type="submit">LOGIN</button>
        </form>
      </div>
      </div>
  );
}

export { LogIn };
