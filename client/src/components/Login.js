import React from "react";
import { withFormik, Form, Field, yupToFormErrors } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const Login = ({ values, errors, touched }) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <Form>
        <div>
          <Field
            type="text" name="username" placeholder="enter username..."
          />
          {touched.username && errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <Field
            type="password" name="password" placeholder="enter password..."
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        <button>Kenny Log-in!</button>
      </Form>
    </>
  );
};
const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    }
  },
  validationSchema: yupToFormErrors.object().shape({
    username: Yup.string().required('username is a required field, bruh.'),
    password: Yup.string().required('not getting very far without a password tho.')
  }),
  handleSubmit(values) {
    axios.post('http://localhost:5000/api/login', values)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
      })
      .catch(err => console.log('Danger Will Robinson: ,', err))
  }
})(Login)
export default FormikLogin;
