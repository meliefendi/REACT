const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

const Messages = require("./lib/Messages");

app.use(cors());

app.get("/", (req, res) => {
	res.end("Merhaba Socket.IO");
});
//CONNECTİON OLDUĞU ANDA REDIS ÜZEİRNEKİ MESAJLARI ALIYORUZ(MESSAGES) VE BAĞLANMIŞ OLAN KULLANICIYA İLETİYORUZ.
io.on("connection", (socket) => {
	console.log("a user connected");

	Messages.list((data) => {
		console.log(data);
		socket.emit("message-list", data);
	});
	//DAHA SONRA HERHANGİ BİR MESAJ EMİT EDİLDİĞİNDE BACKENDE BUNU REDIS ÜZERÜNE YAZIYORUZ "MESSAGE.UPSERT" İLE BAĞLI OLAN DİĞER KULLACILARA BUNU EMİTLİYORUZ
	// "SOCKET.BROADCAST.EMİT İLE"

	socket.on("new-message", (message) => {
		console.log(message);
		Messages.upsert({ message });

		socket.broadcast.emit("receive-message", message);
	});

	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT || "3000", () => {
	console.log("listening on *:3000");
});

// Bu kodlar, Node.js tabanlı bir Socket.IO uygulamasını oluşturmak için kullanılır. Bu uygulama, bir web tarayıcısı veya bir mobil uygulama gibi bir istemci 
// tarafından kullanılabilir ve gerçek zamanlı mesajlaşma işlevselliği sağlar.

// Kodlar, Socket.IO'nun yanı sıra Express ve CORS kütüphanelerini de içerir. Ayrıca Messages adlı bir modül dosyası da kullanır.

// İlk olarak, Express ve http modülleri çağrılır ve Express uygulaması oluşturulur. Sonra, CORS kullanılarak, diğer kaynaklardan gelen istekleri kabul etmesi için sunucuya 
// izin verilir.

// Express uygulaması, bir GET isteği ile tarayıcıya "Merhaba Socket.IO" yanıtı gönderir.

// Daha sonra, Socket.IO modülü kullanılarak bir Socket.IO sunucusu oluşturulur ve bağlantı kurulduğunda 'connection' olayı tetiklenir. Bu olayda, 'a user connected' 
// mesajı konsola yazdırılır.

// Mesajların listelenmesi için, Messages modülündeki 'list' fonksiyonu kullanılarak veriler getirilir ve 'message-list' olayı üzerinden müşteriye gönderilir.

// Bir kullanıcı yeni bir mesaj gönderdiğinde, 'new-message' olayı tetiklenir. Bu mesaj, konsola yazdırılır ve Messages modülü aracılığıyla veritabanına kaydedilir.
//  Ayrıca, tüm bağlı kullanıcılara 'receive-message' olayı üzerinden gönderilir.

// Son olarak, sunucu belirtilen bağlantı noktasında dinlemeye başlar. Bu durumda, "listening on *: 3000" mesajı konsola yazdırılır. Kodlar ayrıca, ortam değişkenlerinde 
// belirtilen bir bağlantı noktasına da dinlemeyi başlatır.


//BU ARADA REDİSİ GİTHUPTAN MSİ DOSYASINI İNDİRİM C SÜRÜCÜSÜNE KURDUK VE BACKEND DOSYASI İÇERİSİNE İSİM DEĞİŞİKLİĞİ YAPTIK ARDINDAN NPM KURDUK VE NODEMOON KURDUK.
//redis i CMD DEN REDİS-CLİ YAZIP KONTROL EDİYORUZ BİZE SAYI DÖNÜYOR DAHA SONRA YARN RUS START DEYİP HOCADAN ALMIŞ OLDUĞUMUZ BACKEND DOSYALARINI
// (https://github.com/Kodluyoruz/taskforce/tree/react-patika/react-patika/realtime/chat-app) AYAĞA KALDIRIYORUZ.
// VE ENV DOSYASI BAĞLANTILARI YAPILDI.