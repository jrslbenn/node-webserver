const express = require("express");

var app = express();

app.get('/', (req, res) => {
  // res.send("<h1>Hello from Express!</h1>");
  res.send({
    name: "James",
    likes: ['Compupu', 'Food']
  });
});

app.get('/about', (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "Unable to fulfill this request"
  });
});

app.listen(3000);
