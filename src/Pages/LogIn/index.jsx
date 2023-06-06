import { Layout } from "../../Components/Layout";
import { useForm } from "../../hooks/useForm";
import "./LogIn.css";

function LogIn() {
  const data = {
    email: "",
    password: ""
  };

  const dataTextRequiredToShow = {
    email: "Email",
    password: "Password"
  }

  const handleOnchange = (e) => {
    setInput((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const apiPostForm = (data)=> {
    console.log('Here Post data LogIn: ', data)
  }


  const { input, setInput, handleSubmit, requiredMessage} = useForm(data, dataTextRequiredToShow, apiPostForm);

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
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </Layout>
  );
}

export { LogIn };
