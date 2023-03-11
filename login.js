// kütüphanelerin içeri aktarılması
const express = require("express")
const bodyParser = require("body-parser")

// uygulamanın oluşturulması ve gerekli  ayarlamaların yapılması
const app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// bir kullanıcı istek yaparsa dönecek sonuç
app.get("/", (req, res)=>{
	res.render("login");
});

// kullanıcı işlem yaptığında dönecek sonuç
app.post("/", (req, res)=>{
	const userName = req.body["username"];
	const userPassword = req.body["password"];
	if(userName=="mehmetaziz" && userPassword=="2121"){
		res.render("home", {userName: userName});
	}else{
		res.send("Error")
	}
});


// internetin dinlenildiği port numarası
app.listen(3000);