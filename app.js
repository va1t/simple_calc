
var buttons = document.getElementsByClassName("buttons");

for(var i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', function(e){
    e.preventDefault();

    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.status === 200) {
        console.log( xmlhttp.response);
        //document.getElementById('output').innerHTML = firstNumber + ' ' + this.value + ' ' + secondNumber + ' = ' + result;
      }
      else{
        document.getElementById('output').innerHTML = firstNumber + ' ' + this.value + ' ' + secondNumber + ' = ' + xmlhttp.status;
      }
    };
    
    xmlhttp.open("GET", 'localhost', true);
    xmlhttp.send({
      'firstNumber': firstNumber,
      'secondNumber': secondNumber,
      'sign': this.value
    });
  });
}