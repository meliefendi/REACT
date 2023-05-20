
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"

import { Button } from '@chakra-ui/react'

function Navbar() {
    return (
        <nav className={styles.nav}>

            <div className={styles.left}>
                <div className="log">
                    <Link to="/" >e.commerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                <Link to="/Signin" >
                    <Button colorScheme='blue'>Login</Button>
                </Link>
                <Link to="/Signup" >
                    <Button colorScheme='pink'>Register</Button>
                </Link>


            </div>
        </nav>
    )
}

export default Navbar;