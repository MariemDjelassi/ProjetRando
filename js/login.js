function verifLogInOrg() {
    var verif = false;
    var log = document.getElementById("email").value;
    var pswd = document.getElementById("pwd").value;
    var tabUserOrg = JSON.parse(localStorage.getItem('tabORG'));

    for (i = 0; i < tabUserOrg.length; i++) {
        if ((tabUserOrg[i].mail == log) && (tabUserOrg[i].password == pswd)) {
            verif = true;
            break;
        }
    }
    if (verif) {
        localStorage.setItem("idOrgConnect", tabUserOrg[i].id);
        window.location.href = "profileOrg.html";
    } else {
        alert("Erreur: vous n'êtes pas inscrit! Veuillez s'inscrire d'abord!");
        window.location.href = "subscribe.html";
    }
}

function verifLogInPart() {
    var verif = false;
    var log = document.getElementById("email").value;
    var pswd = document.getElementById("pwd").value;
    var tabUserPart = JSON.parse(localStorage.getItem('tabPAR'));

    for (i = 0; i < tabUserPart.length; i++) {
        if ((tabUserPart[i].mail == log) && (tabUserPart[i].password == pswd)) {
            verif = true;
            break;
        }
    }
    if (verif) {
        localStorage.setItem("idPartConnect", tabUserPart[i].id);
        window.location.href = "profilePart.html";
    } else {
        alert("Erreur: vous n'êtes pas inscrit! Veuillez s'inscrire d'abord!");
        window.location.href = "subscribe.html";
    }
}
/* 
function verifLogInAdmin() {
    var verif = false;
    var log = document.getElementById("email").value;
    var pswd = document.getElementById("pwd").value;
    var tabAdmin = JSON.parse(localStorage.getItem('tabAdmin'));

}
/////////////
   Connection de l'Amin
   ///////////
function cnx() {
    var l = document.getElementById("mail1").value;
    var p = document.getElementById("password1").value;

    console.log(l);
    console.log(p);

    if ((l == "admin") && (p == "admin")) {
        console.log("ok");
        location.href = "admin_user.html";
    }


*/
