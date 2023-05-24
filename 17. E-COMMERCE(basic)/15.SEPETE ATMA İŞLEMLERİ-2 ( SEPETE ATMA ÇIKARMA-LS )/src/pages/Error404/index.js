
import React from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'

function Error404() {
    return (
        <div>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Error404</AlertTitle>
                <AlertDescription>the age was not found</AlertDescription>
            </Alert>
        </div>
    )
}

export default Error404;