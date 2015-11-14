document.addEventListener("DOMContentLoaded", function(event) {

  var sumA = document.getElementById("sumA").value;
  var sumB = document.getElementById("sumB").value;
  var resultSum = document.getElementById("resultSum");

  document.getElementById("btnSum").addEventListener("click", function(){
    add(sumA, sumB, resultSum);
  });

  var multA = document.getElementById("multA").value;
  var multB = document.getElementById("multB").value;
  var resultMult = document.getElementById("resultMult");

  document.getElementById("btnMult").addEventListener("click", function(){
    mult(multA, multB, resultMult);
  });

});
