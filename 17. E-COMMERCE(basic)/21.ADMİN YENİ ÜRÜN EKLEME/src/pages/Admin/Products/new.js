
import React from "react";
import { Box, FormControl, FormLabel, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { Formik, FieldArray } from "formik";
import validationSchema from "./validations";
import { message } from 'antd';
//api
import { postProduct } from "../../../api";
import { useMutation, useQueryClient } from "react-query";

function NewProduct() {

    const queryClient = useQueryClient();

	const newProductMutation = useMutation(postProduct, {
		onSuccess: () => queryClient.invalidateQueries("admin:products"),
	});
    const handleSubmit = async (values, bag) => {
      console.log(values)
      message.loading({ content: "Loading...", key: "product_update" });


      const newValues = {
        ...values,
        photos: JSON.stringify(values.photos)
      }
      newProductMutation.mutate(newValues, {
        onSuccess: () => {
            message.success({ content: "kaydetme başarılı", key: "product_update", duration: 2,  });
        
        },
    });
    }
  
    return (
        <div>
            <Text fontSize="2xl" > New Product </Text>
            <Formik initialValues={{
                title: "",
                description:"",
                price: "",
                photos: [],
            }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
                        <>
                            <Box>
                                <Box my="5" textAlign="left" >
                                    <form onSubmit={handleSubmit} >
                                        <FormControl>
                                            <FormLabel>Title</FormLabel>
                                            <Input
                                                name="title"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.title}
                                                disabled={isSubmitting}
                                                isInvalid={touched.title && errors.title}
                                            />
                                            {/* bu iki hata da varsa bu hatay yazdır */}
                                            {touched.title && errors.title && (
                                                <Text colorScheme="red.500" > {errors.title} </Text>
                                            )}
                                        </FormControl>
                                        <FormControl mt="4" >
                                            <FormLabel >Description</FormLabel>
                                            <Textarea
                                                name="description"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.description}
                                                disabled={isSubmitting}
                                                isInvalid={touched.description && errors.description}
                                            />
                                            {/* bu iki hata da varsa bu hatay yazdır */}
                                            {touched.description && errors.description && (
                                                <Text colorScheme="red.500" > {errors.description} </Text>
                                            )}
                                        </FormControl>
                                        <FormControl mt="4" >
                                            <FormLabel>Price</FormLabel>
                                            <Input
                                                name="price"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.price}
                                                disabled={isSubmitting}
                                                isInvalid={touched.price && errors.price}
                                            />
                                            {/* bu iki hata da varsa bu hatay yazdır */}
                                            {touched.price && errors.price && (
                                                <Text colorScheme="red.500" > {errors.price} </Text>
                                            )}
                                        </FormControl>
                                        <FormControl mt="4" >
                                            <FormLabel>Photos</FormLabel>
                                            <FieldArray
                                                name="photos"
                                                render={(arrayHelpers) => (
                                                    <div>
                                                        {
                                                            values.photos && values.photos.map((photo, index) => (
                                                                <div key={index} >
                                                                    <Input
                                                                        name={`photos.${index}`}
                                                                        value={photo}
                                                                        disabled={isSubmitting}
                                                                        onChange={handleChange}
                                                                        width="7xl"
                                                                    />
                                                                    <Button
                                                                        ml="4"
                                                                        type="button"
                                                                        colorScheme="red"
                                                                        onClick={() => arrayHelpers.remove(index)}
                                                                    > Remove</Button>
                                                                </div>
                                                            ))
                                                        }
                                                        <Button mt="5" onClick={() => arrayHelpers.push("")} colorScheme="green">
                                                            Add a Photo
                                                        </Button>
                                                    </div>
                                                )}
                                            ></FieldArray>
                                        </FormControl>
                                        <Button mt="4" width="full" type="submit" isLoading={isSubmitting} > Save </Button>
                                    </form>
                                </Box>
                            </Box>
                        </>
                    )
                }
            </Formik>
        </div>
    )
}

export default NewProduct;