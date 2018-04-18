var express=require("express");
var querystring=require("querystring");
var mysql=require("mysql");
var multer = require('multer');
var router = express.Router();
var bodyParser = require('body-parser');
var connection=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"pianke"
});
connection.connect();
router.use(bodyParser.urlencoded({
	extended: false
}))
router.use(bodyParser.json())
router.use(express.static('upimg'));

var imgname
var storage = multer.diskStorage({
	// 上传文件夹
	destination: function (req, file, cb) {
		cb(null, './upimg')
	},
	// 保存的文件名字
	filename: function (req, file, cb) {
		console.log(file)
		imgname=Date.now() + "-" + file.originalname
		cb(null, imgname)
	}
})
var upimg = multer({
	storage: storage
})
//logo 对应file的name值
router.post('/getimg', upimg.single('logo'), function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "text/plain;charset=UTF-8");
	res.send(imgname);
});

router.post('/set', upimg.single('logo'), function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "text/plain;charset=UTF-8");
	res.send(imgname);
});

module.exports = router;






