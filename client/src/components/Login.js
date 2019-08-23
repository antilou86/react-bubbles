import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const Login = (props) => {
  const { errors, touched } = props;
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
        <button type="submit">Kenny Log-in!</button>
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
  validationSchema: Yup.object().shape({
    username: Yup.string().required('username is a required field, bruh.'),
    password: Yup.string().required('not getting very far without a password tho.')
  }),
  handleSubmit(values, props) {
    axios
      .post('http://localhost:5000/api/login', values)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.props.props.history.push('/bubble-page')
        
      })
      .catch(err => {
        console.log('Danger Will Robinson: ,', err);
      })
  }
} )(Login)
export default FormikLogin;
