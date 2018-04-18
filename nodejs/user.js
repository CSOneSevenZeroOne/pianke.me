// 公用服务器  端口
var express = require('express');
var multer = require('multer');
var mysql = require("mysql")
var bodyParser = require('body-parser');
var router = express.Router();



var app = express();
app.use('/',require('./indexread.js'))


app.listen(8888);
console.log("开启服务器");