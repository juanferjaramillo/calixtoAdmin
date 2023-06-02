import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthUser } from '../../redux/actions'
import axios from 'axios'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup.string().required('The e-mail is required.'),
  password: Yup.string().required('The password is required.')
})

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.authUser)

  const submitHandler = async ({ email, password }) => {
    try {
      await axios.post(`/session`, { email, password });
      dispatch(getAuthUser(email))
      navigate('/dashboard')
    } catch ({ response }) {
      alert('User or Password is Incorrect! Please try again.')
    }
  }

  return (
    <Box sx={{ width: "25vw", border: "1px solid", height: " 70%", borderRadius: "10px" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => {
          const { errors, touched, isSubmitting } = formik;
          return (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", margin: "20px" }}>
                <Field
                  placeholder='E-mail'
                  name='email'
                  as={TextField}
                  error={errors.email && touched.email}
                  helperText={(errors.email && touched.email) ? errors.email : null}
                />
                <Field
                  placeholder='Password'
                  type="password"
                  name='password'
                  as={TextField}
                  error={errors.password && touched.password}
                  helperText={(errors.password && touched.password) ? errors.password : null}
                />
                <Button type="submit" variant='contained' disabled={isSubmitting}>
                  Log In
                </Button>
              </Box>
            </Form>
          )
        }}
      </Formik>
    </Box>
  )
}
