import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup.string().email("The e-mail is invalid").required('The e-mail is required.'),
  password: Yup.string().required('The password is required.')
})

export default function Login() {
  const navigate = useNavigate();
  const submitHandler = (values) => {
    navigate('/dashboard')
  }
  return (
    <Box sx={{ width: "25vw", border: "1px solid", height: " 70%" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => {
          const { errors, touched, isSubmitting } = formik;
          return (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
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
