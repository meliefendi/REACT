const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
	res.send("hello");
});

//EKRANA BASILACAK RENGİN VARSAYILANI BURAYA KAYDETMİŞ BURDAN ALDIK.
let lastColor = "#282c34";

io.on("connection", (socket) => {
	console.log("bir kullanıcı bağlandı!");

	socket.emit("receive", lastColor);

	//FRONTTA İLETİLEN VERİYİ BACKENDE İLETMEK İÇİN KULLANILACAK
	socket.on("newColor", (color) => {
		console.log(color);

		//İO.EMİTİN YERİNE SOCKET.BROADCAST YAZILIYDI. VERİLEN RENGİN TÜM SAYFALARA DAĞILMASI İÇİN BU ŞEKİLDE KULLANDIK.
		lastColor = color;
		io.emit("receive", color);
	});

	socket.on("disconnect", () => {
		console.log("Bir kullanıcı ayrıldı.");
	});
});

http.listen(3001, () => console.log("Server is up 🚀 🚀"));
