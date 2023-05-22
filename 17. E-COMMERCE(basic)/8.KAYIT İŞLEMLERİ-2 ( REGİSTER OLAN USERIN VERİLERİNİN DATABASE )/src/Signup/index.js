
import React from "react";
import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'

import { useFormik } from "formik";

import validationSchema from "./validations";

import { fetchRegister } from "../../../api";

function Signup() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                const registerResponse = await fetchRegister({
                    email: values.email,
                    password: values.password,
                });
                console.log(registerResponse)
            } catch (e) {
                bag.setErrors({ general: e.response.data.message })
            }
        },

    });
    return (
        <div>
            <Flex align="center" width="full" justify="center" >
                <Box pt="10" >
                    <Box textAlign="center" >
                        <Heading>
                            Sign Up
                        </Heading>
                    </Box>
                    <Box my={5}>
                        {
                            formik.errors.general && (
                                <Alert status="error" > {formik.errors.general} </Alert>
                            )
                        }
                        {
                            formik.errors.email && formik.touched.email && (
                                <Alert status="error" > {formik.errors.email} </Alert>
                            )
                        }
                        {
                            formik.errors.password && formik.touched.password && (
                                <Alert status="error" > {formik.errors.password} </Alert>
                            )
                        }
                        {
                            formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
                                <Alert status="error" > {formik.errors.passwordConfirm} </Alert>
                            )
                        }
                    </Box>
                    <Box my="5" textAlign="left" >
                        <form onSubmit={formik.handleSubmit} >
                            <FormControl >
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    isInvalid={formik.touched.email && formik.errors.email}
                                ></Input>

                            </FormControl>
                            <FormControl mt="4" >
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password" type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    isInvalid={formik.touched.password && formik.errors.password}
                                ></Input>

                            </FormControl>
                            <FormControl mt="4" >
                                <FormLabel>Password Confirm</FormLabel>
                                <Input
                                    name="passwordConfirm" type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passwordConfirm}
                                    isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                                ></Input>

                            </FormControl>
                            <Button type="submit" width="full" mt="4" colorScheme="teal" >Sign Up</Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Signup;