var express = require('express');
var app = express();
var router = require('./router/rouer.js')
//模版引擎
app.set('view engine', 'ejs')
//静态页面
app.use(express.static('./public'))
//路由
app.get('/', router.showIndex);
app.listen(3000)

