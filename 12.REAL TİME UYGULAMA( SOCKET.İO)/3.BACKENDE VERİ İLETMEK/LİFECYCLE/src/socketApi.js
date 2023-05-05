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
//socket.emit() fonksiyonu, Socket.IO istemci tarafında bir olay tetikleyerek, istemciden sunucuya mesaj göndermeyi sağlar.
// Bu fonksiyon, istemcinin sunucuya veri göndermesine ve sunucunun bu verileri işlemesine olanak tanır. 2 parametre alır.
//eventName: Gönderilecek olan mesajın ismi ya da olay adıdır. Sunucuda bu olayın dinlenmesi için de bu isim kullanılır. Bu isim bir dize (string) türündedir
 //ve isteğe bağlı olarak belirlenebilir.
//data: Sunucuya gönderilecek olan veridir. Bu veri, herhangi bir veri türünde olabilir.

export const send = (color) =>{
    socket.emit("newColor", color);
};