const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/items', function(request, response) {
    response.json(storage.items);
});

var Storage = {
  add: function(name) {
    var item = {name: name, id: this.setId};
    this.items.push(item);
    this.setId += 1;
    return item;
  } 
};

var createStorage = function() {
  var storage = new Array;
  storage.items = [];
  storage.setId = 1;
  return storage;
}

var storage = new Array;

storage.push('Broad beans');
storage.push('Tomatoes');
storage.push('Peppers');

var listener = app.listen(3000);