// SOCKET-İO-CLİENT PAKET KURULUMU LİFECYCLE İÇERİSİNE YAPILIYOR. BENDE DAHA ÖNCE KURULU OLDUĞU İÇİN YAPMIYORUM

import io from "socket.io-client";

let socket;

export const init = () =>{
    console.log("Connecting...");

    socket = io("http://localhost:3000", {
        transports:["websocket"],
    });
    socket.on("connect", () => console.log("Connected!"));
}