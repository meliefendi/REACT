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
// AYRICA LİSTELENME DERSİNDE İŞLEMİŞ OLDUĞUMUZ KONU İLE REDİSE AKTARILAN ESKİ MESAJLARI VE ANLIK İLETİLEN MESAJLARI REDİSTEN GETİRME İŞLEMİNİ YAPIYORUZ.
io.on("connection", (socket) => {
	console.log("REDİS user connected");

	Messages.list((data) => {
		console.log(data);
		socket.emit("message-list", data);
	});
	//DAHA SONRA HERHANGİ BİR MESAJ EMİT EDİLDİĞİNDE BACKENDE BUNU REDIS ÜZERÜNE YAZIYORUZ "MESSAGE.UPSERT" İLE. BAĞLI OLAN DİĞER KULLACILARA BUNU EMİTLİYORUZ
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

