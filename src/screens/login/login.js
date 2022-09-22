import "./login.scss";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { Formik } from "formik";
import * as Yup from "yup";
// import RequestUrl from "../../config/apiUrl";
// import { SignIn } from "../../../src/features/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [work_email, setwork_email] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string().required("Password is a required field"),
    // .min(8, "Password must be at least 8 characters"),
  });
  const submitHandler = async (event) => {
    //     if (work_email && password && !validated) {
    //       setLoading(true);
    //       try {
    //         await axios
    //           .post(RequestUrl + "/api/auth/login", {
    //             work_email,
    //             password,
    //           })
    //           .then((res) => {
    //             setLoading(false);
    //             // dispatch(SignIn(res.data.user));
    //             // navigate("/messenger");
    //           })
    //           .catch((error) => {
    //             setLoading(false);
    //             console.log(error);
    //           });
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     }
    //   };
    //   const navigateToSignUp = () => {
    //     navigate("/signUp");
  };
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="container">
            <div className="Login">
              <form noValidate onSubmit={handleSubmit}>
                <div className="brand">
                  {/* <img src="/icons/brand.svg" /> */}
                  <h2>POS</h2>
                </div>
                <div className="loginFOrm">
                  <div className="input">
                    <label>Email Address</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  <div className="input">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>

                  <button
                    type="submit"
                    // onClick={submitHandler}
                  >
                    {loading == true ? (
                      <SpinnerCircular size="30" color="white" />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
