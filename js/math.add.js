function add(firstNumber, secondNumber) {
  return parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
}

function shouldFailJSHint() {
  var i = 3;
  var j = 4;
  if(i == j)
    console.log("oups")
}
