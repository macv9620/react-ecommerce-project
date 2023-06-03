import { Layout } from "../../Components/Layout";
import './LogIn.css'

function LogIn() {
  return (
    <Layout>
      <div className="log-in">
        <h2>Login to your account</h2>
        <form className="flex flex-col items-center">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </Layout>
  );
}

export { LogIn };
