
import styles from "./styles.module.css"

function ChatItem({ item }) {
    return (
        
        // buraya bu koşulu ekleyerek gönderenin kim olduğu doğrulamasını ve ona göre style uygulanması uyguluyoruz.
        <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""} `} >
            {
                item.message
            }
        </div>
    )
}

export default ChatItem;
