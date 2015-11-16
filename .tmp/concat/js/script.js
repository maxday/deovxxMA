function add(firstNumber, secondNumber) {
  return parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
}

function shouldFailsJSLint() {
  var i = 3;
  var j = 4;
  if(i == j) {
    console.log("oups");
  }
}

function div(firstNumber, secondNumber) {
  if(parseInt(secondNumber, 10) === 0) {
    throw new Error('Impossible to divide by zero');
  }
  return parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
}

document.addEventListener("DOMContentLoaded", function(event) {

  var resultSum = document.getElementById('resultSum');
  var resultMult = document.getElementById('resultMult');

  if (typeof document.getElementById('btnSum') != 'undefined') {
    document.getElementById("btnSum").addEventListener("click", function() {
      resultSum.value = add(document.getElementById("sumA").value, document.getElementById("sumB").value);
    });
  }

  if (typeof document.getElementById('btnDiv') != 'undefined') {
    document.getElementById("btnDiv").addEventListener("click", function() {
      resultDiv.value = div(document.getElementById("divA").value, document.getElementById("divB").value);
    });
  }

});
