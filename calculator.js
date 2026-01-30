<!DOCTYPE html>
<html>
<head>
  <title>Simple Calculator</title>
</head>
<body>

  <h2>Calculator</h2>

  <input type="number" id="num1" placeholder="First number">
  <input type="number" id="num2" placeholder="Second number">

  <br><br>

  <button onclick="calculate('+')">+</button>
  <button onclick="calculate('-')">−</button>
  <button onclick="calculate('*')">×</button>
  <button onclick="calculate('/')">÷</button>

  <h3>Result: <span id="result">0</span></h3>

  <script>
    function calculate(operator) {
      const a = Number(document.getElementById("num1").value);
      const b = Number(document.getElementById("num2").value);
      let result;

      if (operator === '+') result = a + b;
      else if (operator === '-') result = a - b;
      else if (operator === '*') result = a * b;
      else if (operator === '/') {
        if (b === 0) {
          alert("Cannot divide by zero");
          return;
        }
        result = a / b;
      }

      document.getElementById("result").innerText = result;
    }
  </script>

</body>
</html>
