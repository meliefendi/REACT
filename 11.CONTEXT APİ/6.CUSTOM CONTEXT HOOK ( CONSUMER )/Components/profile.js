
import {  useState } from "react";
import {useUserContext} from "../Context/userContext"


function Profile() {

    const { user, setUser } = useUserContext();

    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {

            setUser({ id: "", name: "Melih", bio: "lorem ipsum" })
            setLoading(false)
        }, 1500)
    }

    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            {
                !user && <button onClick={handleLogin}> {loading ? "loading..." : "Login"} </button>
            }

            <code> {JSON.stringify(user)} </code>
            <br />
            <br />

            {
                user && <button onClick={handleLogout}> Logout </button>
            }




        </div>
    )
}

export default Profile;