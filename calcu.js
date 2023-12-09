function appendValue(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }
