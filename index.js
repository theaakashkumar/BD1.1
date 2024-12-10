const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

//shout?name=john
app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

//fullName?firstName=John&lastName=Doe
app.get('/fullName', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + ', ' + year;
  res.send(formattedDate);
});

//greet?name=Tanay
app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greetingMessage = "Namaste, " + name + "!";
  res.send(greetingMessage);

});
///address?street=123+Main+St&city=Springfield&state=IL // O/P -- 123 Main St, Springfield, IL
app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ", " + city + ", " + state;
  res.send(address);
});

app.get('/email', (req, res) =>
{
let username = req.query.username;
let domain = req.query.domain;
let email = username +'@'+domain;
res.send(email);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
