import { Link } from "react-router-dom";
import Navber from "../Shared/Navbar/Navber";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefult();
    // const email = e.target.email.value;
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get("password"));
  };
  return (
    <div>
      <Navber></Navber>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-5">
          Don't have an account?
          <Link className="text-blue-500 font-bold" to="/register">
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
