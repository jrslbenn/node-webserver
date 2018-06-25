const express = require("express");
const hbs = require("hbs");

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  // res.send("<h1>Hello from Express!</h1>");
  res.render("home.hbs", {
    pageTitle: 'Home',
    welcomeMessage: "Welcome to my homepage."
  })
});

app.get('/about', (req, res) => {
  res.render("about.hbs", {
    pageTitle: 'About page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "Unable to fulfill this request"
  });
});

app.listen(3002);
