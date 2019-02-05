// se déconnecter de la plateform
function signUp() {
    localStorage.removeItem("idOrgConnect");
    window.location.href = "home.html";
}


function test(){
    var tabORG= JSON.parse(localStorage.getItem("tabORG"));
    var connect  = JSON.parse(localStorage.getItem("idOrgConnect"));
    var nom;
    for ( let i=0; i<tabPAR.length; i++){
    var tabORG= JSON.parse(localStorage.getItem("tabORG"));
        if(connect == tabORG[i].id){
            nom = tabPAR[i].nom;
        }
    }
    console.log(nom);
     document.getElementById("msg").innerHTML += nom;
}
//              ************************* 
/*
function search() {

}
*/