import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Box, Button, Menu, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const validationSchema = Yup.object({
    precioBase: Yup.number(),
    stateId: Yup.number()
})

export default function EditForm({ id }) {

    const product = useSelector(state => state.filteredProducts).find((product) => product.codigo === id)
    const states = useSelector(state => state.authUser.states)
    const selectedStateName = states.find((state) => state.id === product.stateId).name

    const initialValues = {
        precioBase: product.precioBase,
        stateId: selectedStateName
    }

    const submitHandler = async ({ precioBase, stateId }) => {
        console.log(precioBase, stateId);
    }

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
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography>Price</Typography>
                            <Field
                                sx={{ marginBottom: "20px" }}
                                placeholder='Price'
                                name='precioBase'
                                as={TextField}
                                type="number"
                                error={errors.email && touched.email}
                                helpertext={(errors.email && touched.email) ? errors.email : null}
                            />
                            <Typography>State</Typography>
                            <Field
                                placeholder='State'
                                name='stateId'
                                sx={{ marginBottom: "20px" }}
                                as={Select}
                                error={errors.password && touched.password}
                                helpertext={(errors.password && touched.password) ? errors.password : null}
                            >
                                {states.map((state) => {
                                    return (
                                    <MenuItem key={state.id} value={state.name}>
                                        {state.name}
                                    </MenuItem>
                                    )
                                })}
                            </Field>
                            <Button type="submit" variant='contained' disabled={isSubmitting} sx={{ marginBottom: "20px" }}>
                                Confirm Changes
                            </Button>
                        </Box>
                    </Form>
                )
            }}
        </Formik>
    )
}

