import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { useForm } from "../../hooks/useForm";
import "./LogIn.css";
import { useLoginApi } from "../../hooks/useLoginApi";

function LogIn() {
  const[postData, setPostData] = useState(null)
  const[loginResult, setLoginResult] = useState('')

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

  const {logInResponse} = useLoginApi(postData)

  useEffect(()=>{
  if(logInResponse){
    if(logInResponse.code === 'ERR_NETWORK'){
        setLoginResult('We are having problems, please try again in a moment')
    } else if(logInResponse.response?.status === 400 || logInResponse.response?.status === 401 || logInResponse.response?.status === 404){
      setLoginResult('Invalid Email or Password')
    } else if(logInResponse.status === 200){
      setLoginResult('You are successfully Logged In')
    } else {
      setLoginResult('Uncontrolled error')
    }
  }
  }, [logInResponse])
  
  

  const { input, setInput, handleSubmit, requiredMessage} = useForm(data, dataTextRequiredToShow, apiPostForm);
  
  const handleOnchange = (e) => {
    setInput((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };


  
  return (
    <Layout>
      <div className="log-in">
        <h2>Login to your account</h2>
        <form 
          className="flex flex-col items-center" 
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
          <p className="required-message">{requiredMessage}</p>
          <p className="required-message">{loginResult}</p>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </Layout>
  );
}

export { LogIn };
