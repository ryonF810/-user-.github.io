function hello(){
alert ("Hello world!");
document.getElementById("big").style.fontSize = "4em";
}
function change(){

    document.getElementById("big").style.fontStyle = "italic";
}

function changeBack(){

    document.getElementById("big").style.fontStyle = "normal";
}

function popsUp(){
    alert("changed the value");
    document.getElementById("big").style.fontWeight = "bold";
    document.getElementById("big").style.color = "blue";
    document.getElementById("big").style.textDecoration = "underline";

}

function normalFont(){
    document.getElementById("big").style.fontWeight = "normal";

}
function uppercase(){
   var str = document.getElementById("big").value;
  var upper = str.toUpperCase();
  document.getElementById("big").innerHTML = upper;
  var parts = str.split(".");
  str = parts.join("-Moo");
   
}
