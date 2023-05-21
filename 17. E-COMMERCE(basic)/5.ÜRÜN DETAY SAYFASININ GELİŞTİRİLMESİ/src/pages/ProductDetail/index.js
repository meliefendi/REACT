
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api';
import { Button, Text, Box, Flex } from '@chakra-ui/react';
import moment from "moment";
import ImageGallery from 'react-image-gallery';

function ProductDetail() {
    const { product_id } = useParams();

    const { isLoading, isError, data } = useQuery(["product", product_id], () =>
        fetchProduct(product_id));

    if (isLoading) {
        return <div> 'Loading...' </div>
    }

    if (isError) {
        return <div> error.message </div>
    }
  

    const images = data.photos.map((url) => ({ original: url }));
    return (
        <div>
            <Flex justify="center" >  <Text as="h2" fontSize="2xl" > {data.title} </Text> </Flex>


            <Text fontSize="12px" > {moment(data.createAt).format("DD/MM/YYYY")} </Text>
            <hr />
            <Text > {data.description} </Text>

            <Box margin="10">
                <ImageGallery items={images} />
            </Box>
            <Flex justify="center"> <Button colorScheme='yellow'  >
                Add to basket
            </Button> </Flex>

        </div>
    )
}

export default ProductDetail;