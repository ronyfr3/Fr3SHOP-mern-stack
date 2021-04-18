import React from "react";
import useForm from "./useForm";
import { Link } from "react-router-dom";
import "./Auth.css";
import axios from "axios";

const Registration = (props) => {
  // const [error,setError]=useState('')
  const { values, errors, handleChange, handleSubmit } = useForm();
  
    const handleSignUpClick = (e) => {
      e.preventDefault();
      axios({
          url: "http://localhost:5000/auth/signup",
          method: "POST",
          data: {
            email: values.email,
            password: values.password
          },
        })
        .then((response) => {
         props.history.push('/login')
          // setInfo('registration-->',response.data)
          // console.log(response.data)
        })
        .catch((error) => {
          console.log("login error response->", error);
          // setError(error.response.data.messgae)
        });
    };
  return (
    <div className="form_section">
      <form onSubmit={handleSubmit} noValidate>
        <p className="heading">Register your account</p>
        {/* <div className="field">
          <label className="label">Username</label>
          <input
            autoComplete="off"
            className="input"
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username || ""}
            required
          />
          {errors.username && (
            <p className="help is-danger">{errors.username}</p>
          )}
        </div> */}

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

        {/* <div className="field">
          <label className="label">Confirm Password</label>

          <input
            autoComplete="off"
            className="input"
            type="password"
            name="password2"
            onChange={handleChange}
            value={values.password2 || ""}
            required
          />
          {errors.password2 && (
            <p className="help is-danger">{errors.password2}</p>
          )}
        </div> */}
        <button className="form_btn" onClick={handleSignUpClick}>
          Register
        </button>
        <p className="alreadyacc">
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
