var express = require('express');
var multer = require('multer');
var router= express.Router();
// var mysql = require('mysql');
// var querystring=require("querystring");
// var connection=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"pianke"
// });
// connection.connect();

router.use(express.static('uploads'));
var imgSrc;
var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
        imgSrc = 'http://localhost:8888/'+Date.now() + "-" + file.originalname;
        cb(null, Date.now() + "-" + file.originalname)
    }
})
var upload = multer({
    storage: storage
});
//logo 对应file的name值
router.post('/', upload.single('itemupload'), function (req, res) {
    console.log(111);
    //req.files
    res.append("Access-Control-Allow-Origin", "*");
    res.send('上传图片',imgSrc);

});
module.exports = router;