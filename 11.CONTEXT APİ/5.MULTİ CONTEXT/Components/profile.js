// gerekli dosyaları aktardık 
import { useContext, useState } from "react";
import UserContext from "../Context/userContext"


function Profile() {
    // gerekli stateleri aktardık. ve daha çok contextten ziyade birden fazla context yapısını nasıl kullanacağımızı gördük.
    const { user, setUser } = useContext(UserContext);

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