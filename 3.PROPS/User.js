function User(props){
    return (
        <h1>{props.isLoggedIn ? `${props.name} ${props.surname} (${props.age})` : "Giriş yapmadınız."}</h1>
    )
}

export default User;

//burda da  parametreyi props girince altındaki verilere de props ekledik. eğer parametreyi veri şeklinde girersek (name, surname, age) gibi alta sadece veri isimlerini yazarsak aynı işleve sahip olur.

//////////////////////////////////////////////2
function User({ name, surname, age, isLoggedIn, friends }) {
    return (
        <>
            <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş yapmadınız."}</h1>

            {
                friends.map((friend) => (
                    <div key = {friend.id}>
                        {friend.id} - {friend.name}
                    </div>
                ))
            }
        </>
    )
}

export default User;

