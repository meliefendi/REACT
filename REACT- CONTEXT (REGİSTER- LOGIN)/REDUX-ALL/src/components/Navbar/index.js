
import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import { Button } from '@chakra-ui/react'

//context
import { useAuth } from "../../context/AuthContext";

function Navbar() {
    const { loggedIn } = useAuth();

    console.log(loggedIn)
    return (

        <nav className={styles.nav}>
            <div className={styles.left} >
                <div className="logo" >
                    <Link to="/" > eCommerce logo </Link>
                </div>


                <ul className={styles.menu} >
                    <li>
                        <Link to="/" >Products</Link>
                    </li>

                </ul>
            </div>
            <div className="right" >
                {
                    !loggedIn && (<>
                        <Link to="/signin" >  <Button colorScheme='blue'>Login</Button> </Link>
                        <Link to="/signup" >  <Button colorScheme='blue'>Register</Button> </Link>
                    </>)
                }

                {
                    loggedIn && (<><Link to="/profile" >  <Button colorScheme='blue'>Profile</Button> </Link></>)
                }
                
            </div>
        </nav>

    )
}

export default Navbar;