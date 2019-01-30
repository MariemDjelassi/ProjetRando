// se déconnecter de la plateform

function signUp(){
    localStorage.removeItem("idUserConnect");
    localStorage.removeItem("nameUserConnect");
    window.location.href="home.html";
}