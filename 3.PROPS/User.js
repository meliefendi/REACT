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

//////////////////////////////////////////////3

import PropTypes from "prop-types";
//React PropTypes, bir React bileşeninin özelliklerinin doğru bir şekilde tanımlanmasını sağlamak için kullanılan bir özelliktir. Bu özellik, bir bileşenin hangi türden özelliklere ihtiyaç duyduğunu ve her bir özelliğin nasıl görünmesi gerektiğini tanımlar. PropTypes, bileşenlerin doğru bir şekilde kullanılmasına yardımcı olur ve kodun daha anlaşılır ve sürdürülebilir olmasını sağlar.

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
};

User.propTypes = {
    name:PropTypes.string,
    surname:PropTypes.string,
    age:PropTypes.number,
    isLoggedIn:PropTypes.bool,
    friends:PropTypes.array,
}

export default User;

//////////////////////////////////////////////4
//zorunlu olduğunu belirtmek isteğimiz propsTypes kısmına isRequired ekliyoruz. eğer tamamlanmazsa o kısım hata verir.

User.propTypes = {
    name:PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    friends:PropTypes.array,
}

//////////////////////////////////////////////5



