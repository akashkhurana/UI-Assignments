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

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});