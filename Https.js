req = new XMLHttpRequest(); 
req.open('GET', 'https://raw.githubusercontent.com/daschoolcoder/element-creator/main/main.js');
req.onload = 
  function() { eval(this.responseText); }; 
req.send();
