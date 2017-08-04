var express = require('express');

var app = express();

app.use(express.static('../public/client'));

app.listen(3000);