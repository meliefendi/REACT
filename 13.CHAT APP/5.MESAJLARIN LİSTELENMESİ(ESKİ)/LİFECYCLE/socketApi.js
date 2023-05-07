

import io from "socket.io-client";

let socket;

export const init = () =>{
    console.log("Connecting...");

    socket = io("http://localhost:3000", {
        transports:["websocket"],
    });
    socket.on("connect", () => console.log("Connected!"));
}

export const sendMessage = (message) => {
    if (socket) socket.emit("new-message", message);
}

export const subscribeChat = (cb) =>{
    if(!socket) return;

    socket.on("receive-message", (message) => {
        console.log("yeni mesaj var:", message);
        cb(message);
    })
};

//BACKEND DE BİZE VERİLEN BAĞLANMA PARAMETRESİNİ KULLANARAK BAĞLANTI İŞLEMLERİNİ YAPIYORUZ. BU İŞLEM KENDİSİNE VERİLEN MESAJLARI BACKENDE YANİ REDİSE YÜKLÜYOR VEYA YÜKLEMİŞ
// OLDUĞU MESAJLARA GEREKLİ İŞLEMLERİ GERÇEKLEŞTİRİYOR.

export const subscribeInıtalMessages = (cb) => {
    if (!socket) return;

    socket.on("message-list", (messages) => {
        console.log("Inıtial", messages);
        cb(messages);
    })
}