const express = require('express');
const path = require("path");
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'./public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.get('/items', function(req, res){
    res.sendFile(path.join(__dirname,'./public/list.html'));
});

var price = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var list = [];
app.post('/items', function(req, res){
    list = req.body.Input;
    res.sendFile(path.join(__dirname, './public/list.html'));
});

var item = "";
app.get('/items/:id', function(req, res){
    item = "id- " + req.params.id + " :- " + list[req.params.id] + " = $" + price[req.params.id];
    res.send(item);
});

var update = "";
app.get('/items/update/:id', function(req, res){
    price[req.params.id] += 10;
    var updated = "Updated " + list[req.params.id] + " = $" + price[req.params.id];
    update = "id- " + req.params.id + " :- " + list[req.params.id] + " = $" + price[req.params.id];
    res.send(updated + "<br>" + update);
});

app.get('/items/delete/:id', function(req, res){
    var remain = "";
    var deleted = "Deleted " + list[req.params.id] + " = $" + price[req.params.id];
    list.splice(req.params.id, 1);
    price.splice(req.params.id, 1);
    for(let i = 0;i < list.length;i ++){
        remain += "id- " + i + " :- " + list[i] + " = $" + price[i] + "<br>";
    }
    res.send(deleted + "<br>" + remain);
});

app.listen(3000);