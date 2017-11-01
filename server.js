var express = require('express');
var app = express();

app.get('/calc', function(req, res) {
  console.log(req);
});

console.log('Listening on port 80');
app.listen('80');

function calc(data, firstNumber, secondNumber) {
  if(data === '*'){
    return firstNumber * secondNumber;
  } else if (data === '-') {
    return firstNumber - secondNumber;
  } else if (data === '/') {
    return firstNumber / secondNumber;
  } else if (data === '+') {
    return firstNumber + secondNumber;
  } else {
    return 'error';
  }
}