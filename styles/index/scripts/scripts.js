function gantiSambutan(id){
    switch(id){
        case 1:
            document.getElementById("bu-heru").classList.remove("display-none");
            document.getElementById("pak-eka").classList.add("display-none");
            document.getElementById("pak-mustar").classList.add("display-none");
            document.getElementById("bu-heru-foto").classList.add("img-active");
            document.getElementById("pak-eka-foto").classList.remove("img-active");
            document.getElementById("pak-mustar-foto").classList.remove("img-active");
            break;
        case 2:
            document.getElementById("bu-heru").classList.add("display-none");
            document.getElementById("pak-eka").classList.remove("display-none");
            document.getElementById("pak-mustar").classList.add("display-none");
            document.getElementById("bu-heru-foto").classList.remove("img-active");
            document.getElementById("pak-eka-foto").classList.add("img-active");
            document.getElementById("pak-mustar-foto").classList.remove("img-active");
            break;
        case 3:
            document.getElementById("bu-heru").classList.add("display-none");
            document.getElementById("pak-eka").classList.add("display-none");
            document.getElementById("pak-mustar").classList.remove("display-none");
            document.getElementById("bu-heru-foto").classList.remove("img-active");
            document.getElementById("pak-eka-foto").classList.remove("img-active");
            document.getElementById("pak-mustar-foto").classList.add("img-active");
            break;
        case 4:
            document.getElementById("ariel-ketos").classList.remove("display-none");
            document.getElementById("rayhan-kordum").classList.add("display-none");
            document.getElementById("ariel-ketos-foto").classList.add("img-active");
            document.getElementById("rayhan-kordum-foto").classList.remove("img-active");
            break;
        case 5:
            document.getElementById("ariel-ketos").classList.add("display-none");
            document.getElementById("rayhan-kordum").classList.remove("display-none");
            document.getElementById("ariel-ketos-foto").classList.remove("img-active");
            document.getElementById("rayhan-kordum-foto").classList.add("img-active");
            break;
        default:
            break;
    }
}

function profilCaketos(id) {
    switch(id) {
        case 1:
            document.getElementById("background-visi-misi").classList.remove("display-none");
            document.getElementById("caketos-aulia").classList.remove("display-none");
            document.getElementById("caketos-nabiel").classList.add("display-none");
            document.getElementById("caketos-wildan").classList.add("display-none");
            break;
        case 2:
            document.getElementById("background-visi-misi").classList.remove("display-none");
            document.getElementById("caketos-aulia").classList.add("display-none");
            document.getElementById("caketos-nabiel").classList.remove("display-none");
            document.getElementById("caketos-wildan").classList.add("display-none");
            break;
        case 3:
            document.getElementById("background-visi-misi").classList.remove("display-none");
            document.getElementById("caketos-aulia").classList.add("display-none");
            document.getElementById("caketos-nabiel").classList.add("display-none");
            document.getElementById("caketos-wildan").classList.remove("display-none");
            break;
        default:
            break;
    }
}

function keluar() {
    document.getElementById("background-visi-misi").classList.add("display-none");
    document.getElementById("caketos-aulia").classList.add("display-none");
    document.getElementById("caketos-nabiel").classList.add("display-none");
    document.getElementById("caketos-wildan").classList.add("display-none");
}