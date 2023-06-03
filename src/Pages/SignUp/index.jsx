import { Layout } from "../../Components/Layout";
import "./SignUp.css";

function SignUp() {
  return (
    <Layout>
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form className="flex flex-col items-center">
          <input type="text" name="field1" placeholder="First Name" />
          <input type="text" name="field1" placeholder="Last Name" />
          <input type="email" name="field2" placeholder="Email" />
          <input type="password" name="field3" placeholder="Password" />
          <div className="flex w-60 items-center">
          <label className="label w-20" htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="--">--</option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
          </div>
          <div className="flex w-60 items-center">
          <label className="label w-20" htmlFor="role">Role</label>
          <select name="gender" id="gender">
            <option value="--">--</option>
            <option value="CUSTOMER">CUSTOMER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
          </div>
          <input type="button" value="Sign Up" />
        </form>
      </div>
    </Layout>
  );
}

export { SignUp };
