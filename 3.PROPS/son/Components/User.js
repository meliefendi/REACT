
import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
    return (
        <>
            <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız."}</h1>

            {
                friends.map((friend) => (
                    <div key={friend.name}>
                        {friend.id} - {friend.name}
                    </div>
                ))
            }
            {address.title} {address.zip}
        </>
    )
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false,
}

export default User;

