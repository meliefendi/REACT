
import React from "react";
import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'

import { useFormik } from "formik";

import validationSchema from "./validations";

import { fetchLogin, fetchRegister } from "../../../api";

import { useAuth } from "../../../context/AuthContext";

import { useNavigate } from "react-router-dom";


function Signin() {
    const { login } = useAuth();
   
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",          
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            try {
                const loginResponse = await fetchLogin({
                    email: values.email,
                    password: values.password,
                });


                login(loginResponse);
              
                navigate("../Profile")


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
                            Sign In
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
                            <Button type="submit" width="full" mt="4" colorScheme="teal" >Sign In</Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Signin;