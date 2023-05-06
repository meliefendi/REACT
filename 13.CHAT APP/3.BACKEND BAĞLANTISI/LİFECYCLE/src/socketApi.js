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


//BAĞLANTI GERÇEKLEŞTİKTEN SONRA CMD ÜZERİNDE DE BAĞLANTI SAĞLANIYOR VE USER CONNECTED DİYOR [] BU BOŞ ARRAY İSE REDİS İLE ALAKALI REDİS İÇERİSİNE YOLLAYACAĞIMIZ 
// MESAJLAR BU ARRAY İÇERİSİNDE BİZE GELİYOR VE İÇERİSİNE YAZI YOLLAMAYA BAŞLAYINCA DOLU OLARAK GELECEKTİR.
