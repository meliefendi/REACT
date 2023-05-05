//YÜKLEMİŞ OLDUĞUMUZ SOCKET.İO İÇİN BAĞLANTI AYARLARINI YAPIYORUZ. VE APP ÜZERİNDEN EXPORT EDİYORUZ.


import io from 'socket.io-client';

let socket;

export const init = () => {
    console.log("Socket.io bağlanılıyor...");

  socket = io("http://localhost:3001",{
    transports: ['websocket'],
  });

  socket.on("connect", () =>
  console.log("Socket.io bağlantısı sağlandı.")
  );

};

//SEND FONKSİYONU
export const send = (color) =>{
    socket.emit("newColor", color);
};

//SUBSCRİBE FONKSİYONU
export const subscribe = (cb) =>{
    socket.on("receive", (color)=>{
        console.log(color)
cb(color)
    })
}