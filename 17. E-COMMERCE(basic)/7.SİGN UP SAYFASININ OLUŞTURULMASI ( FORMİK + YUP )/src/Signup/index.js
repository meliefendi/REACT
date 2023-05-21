
import React from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'

import { useFormik } from "formik";

import validationSchema from "./validations";

function Signup() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
         validationSchema,
        onSubmit: async (values, bag) => {
            console.log(values)
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
                    <Box my="5" textAlign="left" >
                        <form onSubmit={formik.handleSubmit} >
                            <FormControl >
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                ></Input>
                            </FormControl>
                            <FormControl mt="4" >
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password" type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                ></Input>
                            </FormControl>
                            <FormControl mt="4" >
                                <FormLabel>Password Confirm</FormLabel>
                                <Input
                                    name="passwordConfirm" type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passwordConfirm}
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