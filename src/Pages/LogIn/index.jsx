import { Layout } from "../../Components/Layout";
import './LogIn.css'

function LogIn() {
  return (
    <Layout>
      <div className="log-in">
        <h2>Login to your account</h2>
        <form>
          <input type="email" name="field1" placeholder="Email" />
          <input type="password" name="field2" placeholder="Password" />
          <input type="button" value="Log In" />
        </form>
      </div>
    </Layout>
  );
}

export { LogIn };
