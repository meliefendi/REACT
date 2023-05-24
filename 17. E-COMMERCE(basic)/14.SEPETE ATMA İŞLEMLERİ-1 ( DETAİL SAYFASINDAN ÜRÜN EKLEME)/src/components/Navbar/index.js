
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"

import { Button } from '@chakra-ui/react'

import { useAuth } from "../../context/AuthContext";
import { useBasket } from "../../context/BasketContext";

function Navbar() {
    const { loggedIn } = useAuth();
    const { items } = useBasket();

    console.log(loggedIn)
    return (
        <nav className={styles.nav}>

            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/" >e.commerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                {
                    !loggedIn &&
                    <>
                        <Link to="/Signin" >
                            <Button colorScheme='blue'>Login</Button>
                        </Link>
                        <Link to="/Signup" >
                            <Button colorScheme='pink'>Register</Button>
                        </Link>

                    </>
                }
                {
                    loggedIn &&
                    <>
                    {
                        items.length > 0 && (
                            <Link to="/basket" >
                                <Button colorScheme="pink" variant="outline" >Basket ({items.length}) </Button>
                            </Link>
                        )
                    }
                    <Link to="/Profile" >
                        <Button colorScheme='yellow'>Profile</Button>
                    </Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar;