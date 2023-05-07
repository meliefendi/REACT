

import io from "socket.io-client";

let socket;

export const init = () =>{
    console.log("Connecting...");

    socket = io("http://localhost:3000", {
        transports:["websocket"],
    });
    socket.on("connect", () => console.log("Connected!"));
}

//GÖNDERİLECEK MESAJLARIN BAĞLANTILARI YAPILDI(backend).chatform sayfasına çünkü mesaj gönderme işlemleri ordan gerçekleşmekte

export const sendMessage = (message) => {
    if (socket) socket.emit("new-message", message);
}

//BURDA DA BACKEND BAĞLANTISI YAPILDI BURANIN İŞLEVİ SOCKETTEN VERİ GELDİĞİNDE BUNU BAĞLI OLAN DİĞER CLİENTLERE YAYMAK. // daha sonra callback ekledik bunu da contacts
// sayfasından alıyoruz oradaki işlemi buraya ekliyoruz.
export const subscribeChat = (cb) =>{
    if(!socket) return;

    socket.on("receive-message", (message) => {
        console.log("yeni mesaj var:", message);
        cb(message);
    })
}