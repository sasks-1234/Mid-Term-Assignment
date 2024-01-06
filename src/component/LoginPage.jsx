// import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";
// import "../Style/loginform.css";
// import { Link } from "react-router-dom";

// function LoginPage() {
//   const [initialState, updateState] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     console.log(e);
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // console.log(name + " " + value);
//     updateState({
//       ...initialState,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="myform">
//       <Formik initialValues={initialState} onsubmit={handleSubmit}>
//         <Form>
//           <h3>Login</h3>
//           <div>
//             <label htmlFor="email" className="email">
//               E-mail:
//             </label>
//             <Field
//               type="text"
//               name="email"
//               value={initialState.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="block">
//             <label className="password">Password:</label>
//             <Field
//               type="password"
//               name="password"
//               value={initialState.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <button type="submit" className="button">
//               <a href ="/product">Login</a>
//             </button>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default LoginPage;

import { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {};

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email should be valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be 6 character long"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px 40px",
              marginTop: "60px",
              borderRadius: "10px",
              boxShadow: "10px 5px #888",
              marginBottom: "40px",
              backgroundImage:"linear-gradient(to bottom right, #f8f9fa, #c3cfe2)"
            }}
          >
            <h2 className="text-center">Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label>Email Address</label>
                      <Field
                        type="text"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <p className="text-center mt-3">
                      Don't have an account?Sign Up
                      <Link to="/Signup"> here</Link>
                    </p>

                    <div className="buttons text-center">
                      <button type="submit" className="btn btn-outline-dark px-4 py-2">
                        <Link to ="/product">Login</Link>
                        <i className="fa fa-sign-in me-1"></i>
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>

            <br />
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
