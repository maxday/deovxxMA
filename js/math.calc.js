document.addEventListener("DOMContentLoaded", function(event) {

  var resultSum = document.getElementById("resultSum");
  var resultMult = document.getElementById("resultMult");

  document.getElementById("btnSum").addEventListener("click", function(){
    add(document.getElementById("sumA").value, document.getElementById("sumB").value, resultSum);
  });

  document.getElementById("btnMult").addEventListener("click", function(){
    mult(document.getElementById("multA").value, document.getElementById("multB").value, resultMult);
  });

});
