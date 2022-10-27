const element= document.createElement("div");
element.innerHTML= ` <body style="color:red;"> <lable for="i"> enter a element to create:</lable> <input id="i" name="i" placeholder="enter a element"> <input type="submit" for="i" onclick='appendE();'>
<br>
<br>
<lable for="t"> text value:</label> <input id="t" name="t" placeholder="enter text value"> 
<br>
<br>
<lable> enter a style:</lable> <input id="s" name="s" placeholder="enter a style"> 
<br>
<br>
<lable for="src"> </lable> script (javascript) <input id="src" name="src" placeholder="enter a script">

</body>
<br>`;
document.body.appendChild(element);
function appendE () { 
var E = document.getElementById("i").value;
var ES = document.getElementById("s").value;
var txt = document.getElementById("t").value;
var src = document.getElementById("src").value;

const ce = document.createElement(E);
ce.style = ES;
ce.innerHTML  = txt;
ce.innerHTML= src;
//making it do stuff 
document.body.appendChild(ce);
//console for debug

console.log("creating element:" + E + " style:" +ES + " txt:" + txt )
      ;}
