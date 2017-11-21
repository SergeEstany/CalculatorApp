document.getElementsByTagName("button")[0].onclick = add;
document.getElementsByTagName("button")[1].onclick = subtract;
document.getElementsByTagName("button")[2].onclick = multiply;
document.getElementsByTagName("button")[3].onclick = divide;

function add(){
  var stringFirst = document.getElementById("firstNumber").value,
      stringSecond = document.getElementById("secondNumber").value,
      firstNumber = parseFloat(stringFirst),
      secondNumber = parseFloat(stringSecond);

  document.getElementsByTagName("label")[0].innerHTML = firstNumber + secondNumber;

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}

function subtract(){
  var stringFirst = document.getElementById("firstNumber").value,
      stringSecond = document.getElementById("secondNumber").value,
      firstNumber = parseFloat(stringFirst),
      secondNumber = parseFloat(stringSecond);

  document.getElementsByTagName("label")[0].innerHTML = firstNumber - secondNumber;

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}

function multiply(){
  var stringFirst = document.getElementById("firstNumber").value;
  var stringSecond = document.getElementById("secondNumber").value;
  var firstNumber = parseFloat(stringFirst);
  var secondNumber = parseFloat(stringSecond);

  document.getElementsByTagName("label")[0].innerHTML = firstNumber * secondNumber;

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}

function divide(){
  var stringFirst = document.getElementById("firstNumber").value;
  var stringSecond = document.getElementById("secondNumber").value;
  var firstNumber = parseFloat(stringFirst);
  var secondNumber = parseFloat(stringSecond);

  document.getElementsByTagName("label")[0].innerHTML = firstNumber / secondNumber;

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}
