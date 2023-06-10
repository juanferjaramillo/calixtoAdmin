import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../redux/actions";
import { Toaster, toast } from "sonner";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Por favor ingrese su indentificación"),
  password: Yup.string().required("Por favor ingrese su contraseña"),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async ({ email, password }) => {
    try {
      await axios.post(`/session`, { email, password });
      dispatch(getAuthUser(email));
      navigate("/dashboard");
    } catch ({ response }) {
      toast("La identificación o la contraseña son incorrectos 😳");
      // alert('La identificación o la contraseña son incorrectos 😳')
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {(formik) => {
        const { errors, touched, isSubmitting } = formik;
        return (
          <Form>
            <Box
              sx={{ display: "flex", flexDirection: "column", margin: "20px" }}
            >
              <Field
                sx={{ marginBottom: "20px" }}
                placeholder="E-mail"
                name="email"
                as={TextField}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : null}
              />
              <Field
                placeholder="Password"
                type="password"
                name="password"
                as={TextField}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : null
                }
              />
              {/* <Typography
                onClick={() => {
                  navigate("/password-recovery");
                }}
                sx={{
                  cursor: "pointer",
                  marginBottom: "20px",
                  "&:hover": {
                    color: "blue",
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot your password?
              </Typography> */}
              <Button type="submit" variant="contained" disabled={isSubmitting}
              sx={{mt: 3, backgroundColor: "purple"}}
              >
                Log In
              </Button>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}
