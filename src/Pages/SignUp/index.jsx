import { Layout } from "../../Components/Layout";
import "./SignUp.css";

function SignUp() {
  return (
    <Layout>
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form>
          <input type="text" name="field1" placeholder="First Name" />
          <input type="text" name="field1" placeholder="Last Name" />
          <input type="email" name="field2" placeholder="Email" />
          <input type="password" name="field3" placeholder="Password" />
          <label htmlFor="gender">Select Gender</label>
          <select name="gender" id="gender">
            <option value="--">--</option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
          <label htmlFor="role">Role</label>
          <select name="gender" id="gender">
            <option value="--">--</option>
            <option value="CUSTOMER">CUSTOMER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
          <input type="button" value="Sign Up" />
        </form>
      </div>
    </Layout>
  );
}

export { SignUp };
