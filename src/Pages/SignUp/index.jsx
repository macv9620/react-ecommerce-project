import { Layout } from "../../Components/Layout";
import { useForm } from "../../hooks/useForm";
import "./SignUp.css";

function SignUp() {

  const data = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  };

  const dataTextRequiredToShow = {
    first_name: "First Name",
    last_name: "Last Name",
    email: "Email",
    password: "Password",
    gender: "Gender",
    role: "Role",
  }

  const apiPostForm = (data)=> {
    console.log('Here Post data SignUp: ', data)
  }

  const handleOnchange = (e)=>{
    setInput((previousValue) => ({...previousValue, [e.target.name]: e.target.value}))
  }

  const { input, setInput, handleSubmit, requiredMessage} = useForm(data, dataTextRequiredToShow, apiPostForm);

  return (
    <Layout>
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form
          className="flex flex-col items-center"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            value={input.first_name}
            onChange={handleOnchange}
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            value={input.last_name}
            onChange={handleOnchange}
          />
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
          <div className="flex w-60 items-center">
            <label className="label w-20" htmlFor="gender">
              Gender
            </label>
            <select 
            name="gender" 
            id="gender"
            value={input.gender}
            onChange={handleOnchange}
            >
              <option value=""></option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div className="flex w-60 items-center">
            <label className="label w-20" htmlFor="role">
              Role
            </label>
            <select 
            name="role" 
            id="role"
            value={input.role}
            onChange={handleOnchange}
            >
              <option value=""></option>
              <option value="CUSTOMER">CUSTOMER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <p className="required-message">{requiredMessage}</p>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </Layout>
  );
}

export { SignUp };
