
import { useRef, finalRef, useState } from "react";

import { useBasket } from "../../context/BasketContext";
import {
    Alert, Button, Image, Box, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
    ModalCloseButton, useDisclosure, FormControl, FormLabel, Textarea
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { postOrder } from "../../api";

function Basket() {
    //adress bilgisini tutan state
    const [address, setAddress] = useState();
    //chakra
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef()
    //seçilen ürünü tutan state
    const { items, removeFromBasket, emptyBasket } = useBasket();

    //fiyat toplamı
    const total = items.reduce((acc, obj) => acc + obj.price, 0)

    //orderSubmitFonksiyonu
    const handleSubmitForm = async () => {
        //seçilen ürün id bilgisi
        const itemIds = items.map((item) => item._id);

        //backende yollanacak bilgi
        const input = {
            address,
            items: JSON.stringify(itemIds)
        };
        const response = await postOrder(input);

        //sepeti boşaltma
        emptyBasket();
        //pencereyi kapatma
        onClose();
        console.log(response)
    }

    return (
        <Box p="5" >
            {
                items.length < 1 && (
                    <Alert status="warning" > You have not any items in your basket </Alert>
                )
            }
            {
                items.length > 0 && (
                    <>
                        <ul style={{ listStyleType: "decimal" }} >
                            {
                                items.map((item) => (
                                    <li key={item._id} style={{ marginBottom: 15 }} >
                                        <Link to={`/product/${item._id}`} >
                                            <Text fontSize="18" > {item.title}-{item.price} TL </Text>
                                            <Image
                                                htmlWidth={200}
                                                src={item.photos[0]}
                                                alt="basket item"
                                                loading="lazy"
                                            ></Image>
                                        </Link>
                                        <Button mt="2" size="sm" colorScheme="pink" onClick={() => removeFromBasket(item._id)} >
                                            remove from basket
                                        </Button>
                                    </li>
                                ))
                            }
                            <Box mt="10" >
                                <Text fontSize="22" > Total: {total} TL</Text>
                            </Box>
                        </ul>
                        <Box mt="10" >
                            <Button myt="2" size="sm" colorScheme="yellow" onClick={onOpen} > Order </Button>

                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Order</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <FormControl>
                                            <FormLabel> Address </FormLabel>
                                            <Textarea ref={initialRef} placeholder='address'
                                                value={address} onChange={(e) => setAddress(e.target.value)} />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={handleSubmitForm} >
                                            Save
                                        </Button>
                                        <Button onClick={onClose}>Cancel</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>

                        </Box>
                    </>
                )
            }

        </Box>
    )
};

export default Basket;