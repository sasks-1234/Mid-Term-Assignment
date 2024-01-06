import { Field, Formik, Form } from "formik";
import React from "react";
import "../Style/form.css";

function UserForm() {
  const initialValues = {
    firstname: "sahil",
    lastname: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="firstname">First Name</label>
            <Field
              type="text"
              placeholder="Enter your first name"
              name="firstname"
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <Field
              type="text"
              placeholder="Enter your last name"
              name="lastname"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field type="email" placeholder="Enter your email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default UserForm;
