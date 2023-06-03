import { Layout } from "../../Components/Layout";
import "./SignUp.css";

function SignUp() {
  return (
    <Layout>
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form className="flex flex-col items-center">
          <input type="text" name="first_name" id="first_name" placeholder="First Name" />
          <input type="text" name="last_name" id="last_name" placeholder="Last Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <div className="flex w-60 items-center">
          <label className="label w-20" htmlFor="gender">Gender</label>
          <select name="gender" id="gender" required>
            <option value=""></option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
          </div>
          <div className="flex w-60 items-center">
          <label className="label w-20" htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value=""></option>
            <option value="CUSTOMER">CUSTOMER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </Layout>
  );
}

export { SignUp };
