import React from "react";
import useForm from "./useForm";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const Login = (props) => {
  // const [error, setError] = useState("");
  const { values, errors, handleChange, handleSubmit } = useForm();
  const handleSignIn = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:5000/auth/signin",
      method: "POST",
      data: {
        email: values.email,
        password: values.password,
      },
    })
      .then((response) => {
        const isAuthenticated=response.data.isAuthenticated
        window.localStorage.setItem('isAuthenticated',isAuthenticated)
       props.history.push('/')
      })
      .catch((error) => {
        // setError(
        //   error.response.data.message === undefined
        //     ? ""
        //     : error.response.data.message
        // );
        console.log(error)
      });
  };

  return (
    <div className="form_section">
      <form onSubmit={handleSubmit} noValidate>
        <p className="heading">Login to your account</p>
        <div className="field">
          <label className="label">Email Address</label>
          <input
            autoComplete="off"
            className="input"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            required
          />

          {errors.email && <p className="help is-danger">{errors.email}</p>}
        </div>

        <div className="field">
          <label className="label">Password</label>
          <input
            autoComplete="off"
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          {errors.password && (
            <p className="help is-danger">{errors.password}</p>
          )}
        </div>

        <button className="form_btn" onClick={handleSignIn}>
          Login
        </button>
        <p className="alreadyacc">
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
