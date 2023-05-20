
import { Box, Image, Button } from '@chakra-ui/react'
import moment from "moment";
import { Link } from 'react-router-dom';



function Card( {item} ) {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3" >
            <Link to="#/" >
                <Image src={item.photos} alt='product' loading='lazy' />
                <Box p="6" >
                    <Box d="flex" alignItems="baseline" fontSize="12px" >
                       {moment(item.createdAt).format("DD/MM/YY")}
                    </Box>
                    <Box mt="1" fontWeight="semibold" as='h4' lineHeight="tight" >
                       {item.title}
                    </Box>
                    <Box>
                       {item.price} TL
                    </Box>
                </Box>
            </Link>
            <Button colorScheme='pink' >Add to basket</Button>
        </Box>
    )
}

export default Card;