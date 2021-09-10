var box = document.getElementById("verifbox");

function alertbuatan(isi){
    document.getElementById("text").innerHTML = isi;
    document.getElementById("alertbuatan").style.display = "flex";
}

function close(){
        document.getElementById("alertbuatan").style.display = "none";
}

function checkisi(){
    if(
    document.getElementById("NIS").value == "" ||
    document.getElementById("password1").value == ""
    ){
        alertbuatan("NIS dan Password harus diisi");
    }else{
        box.style.display = "flex";
    }
}
window.onclick = function(event) {
    if (event.target == box) {
      box.style.display = "none";
      if(document.getElementById("showhide").value != null){
        document.getElementById("showhide").value = "none";
      }    
    }
  }

    
  function show() {
    document.getElementById("password2").type = "text";
  }
  function hide(){
    document.getElementById("password2").type = "password";
  }

  function showhide(){
    var x = document.getElementById("password2");
    if(x.type === "password"){
        x.type = "text";
    } else{
        x.type = "password";
    }
  }

  function musthide(){
    var x = document.getElementById("password2");
    if(x.type != "password"){
        x.type= "password";
    }
  }

  function inputsalah(){
    document.getElementById("verifbox").style.display = "none";
    document.getElementById("password2").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("NIS").value = "";
    
}