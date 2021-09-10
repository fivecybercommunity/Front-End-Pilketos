var button = document.getElementById("verifbtn");
var box = document.getElementById("verifbox");
var span = document.getElementById("");

button.onclick = function(){
    box.style.display = "flex";
}
window.onclick = function(event) {
    if (event.target == box) {
      box.style.display = "none";
    }
  }

  function show() {
    var x = document.getElementById("password2");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }