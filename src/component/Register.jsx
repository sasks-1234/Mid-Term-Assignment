
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import '../Style/userForm.css';
// import { useNavigate } from "react-router-dom";
// import * as yup from "yup";
// // import { Link } from "react-router-dom";

// const signUp = yup.object().shape({
//   firstname: yup.string().required(" firstname is required"),
//   lastname: yup.string().required(" lastname is required"),
//   email: yup
//     .string()
//     .required("Enter invalid email"),
//     // .required("Email is necessary to be filled"),
//   Password: yup.string().required("Password is necessary to be filled"),
// });

// function Register() {
//   const initialValues = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     Password: "",
//   };

//   const navigate = useNavigate();

//   const handleSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <div className="div">
//       <Formik
//         validationSchema={signUp}
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//       >
//         {(formik) => {
//           return (
//             <Form className="setForm">
//               <h2>Sign up</h2>
//               <div className="name">
//                 <div>
//                   <label>FirstName:</label>
//                   <Field
//                     type="text"
//                     name="firstname"
//                     className={
//                       formik.touched.firstname && formik.errors.firstname
//                         ? "form-control is-invalid"
//                         : "form-control"
//                     }
//                   />
//                   <ErrorMessage name="firstname" />
//                 </div>
//                 <div>
//                   <label>LastName:</label>
//                   <Field
//                     type="text"
//                     name="lastname"
//                     className={
//                       formik.touched.lastname && formik.errors.lastname
//                         ? "form-control is-invalid"
//                         : "form-control"
//                     }
//                   />
//                   <ErrorMessage name="lastname" />
//                 </div>
//                 <div>
//                   <label>Email:</label>
//                   <Field
//                     type="email"
//                     name="email"
//                     className={
//                       formik.touched.email && formik.errors.email
//                         ? "form-control is-invalid"
//                         : "form-control"
//                     }
//                   />
//                   <ErrorMessage name="email" />
//                 </div>
//                 <div>
//                   <label>Password:</label>
//                   <Field type="password" name="Password" />
//                   <ErrorMessage name="Password" />
//                 </div>
//                 <div className="btn" type="submit">
//                   <button type="submit" className="btn btn-primary">
//                     <Link to="/login">Submit</Link>
//                   </button>
//                 </div>
//               </div>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// }

// export default Register;

import { useEffect, useState } from "react";

import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Navbar } from "../component/Navbar";


const SignUpPage = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordconfirm: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("first name is required"),
    lastname: Yup.string().required("last name is required"),
    email: Yup.string()
      .required("emil is srequired")
      .email("email should be valid email"),

    password: Yup.string()
      .required("password is required")
      .min(6, "passwrd must be 6 character long"),
    passwordconfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,

    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
     
      <div className="row">
        <div className="col-md-3"></div>

        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "30px 40px",
              marginTop: "60px",
              borderRadius: "10px",
              boxShadow: "10px 5px #888",
              marginBottom: "40px",
              backgroundImage:"linear-gradient(to bottom right, #f8f9fa, #c3cfe2)"
            }}
          >
            <h2 className="text-center">Sign Up</h2>
            <hr />

            <form onSubmit={formik.handleSubmit}>
              {/* <h1>hello</h1> */}
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.firstname && formik.errors.firstname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.firstname && formik.errors.firstname ? (
                  <small className="text-danger">
                    {formik.errors.firstname}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.lastname && formik.errors.lastname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.lastname && formik.errors.lastname ? (
                  <small className="text-danger">
                    {formik.errors.lastname}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>

              <div className="form-group">
                <label>Password Confirm</label>
                <input
                  type="text"
                  name="passwordconfirm"
                  value={formik.values.passwordconfirm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.passwordconfirm &&
                    formik.errors.passwordconfirm
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />

                {formik.touched.passwordconfirm &&
                formik.errors.passwordconfirm ? (
                  <small className="text-danger">
                    {formik.errors.passwordconfirm}
                  </small>
                ) : null}
              </div>

              <p className="text-center mt-3">
                Already have an account?Login<Link to="/login"> here</Link>
              </p>

              <div className="buttons">
                <button className="btn">
                  <a href="/login" className="btn btn-outline-dark text-center">
                   Sign Up
                  </a>
                </button>
              </div>

              <br />
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default SignUpPage;