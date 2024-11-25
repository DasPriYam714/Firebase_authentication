import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [successReg, setSuccessReg] = useState("");
  const [errorMess, setErrorMess] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    if (password.length < 6) {
      setErrorMess("Password should be at least 6 characters");
      return;
    } else if (!/(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/.test(password)) {
      setErrorMess("You need to use at least one special character.");
      return;
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <input type="checkbox" name="terms" />
                  <p className="ml-2">I have read and agree to the Terms</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-4">
                Already have an account? Please{" "}
                <span className="text-blue-800">
                  <Link to={"/login"}>Login</Link>
                </span>
              </div>
            </form>
          </div>
          {
                errorMess && <p className="text-lg text-red-700">{errorMess}</p>
            }
        </div>
      </div>
    </div>
  );
};

export default Register;
