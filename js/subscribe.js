function generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function createUser() {
    var user = {
        id: generateID(),
        name: document.getElementById("nom").value,
        age: document.getElementById("age").value,
        mail: document.getElementById("mail").value,
        password: document.getElementById("mpass").value,
        tel: document.getElementById("tel").value,
        adress: document.getElementById("adresse").value,
        role: document.getElementById("selct").value,
        image: document.getElementById("img").value,
        //confirmation: false,
    }
    if (user.role == "Participant") {
        var tabPAR = JSON.parse(localStorage.getItem("tabPAR")) || [];
        tabPAR.push(user);
        localStorage.setItem("tabPAR", JSON.stringify(tabPAR));
        // recuperer l'id user inscrit
        var tabPartId = JSON.parse(localStorage.getItem("idPartConnect")) || [];
        tabPartId.push(user.id);
        localStorage.setItem("idPartConnect", JSON.stringify(tabPartId));
        window.location.href = "profilePart.html";
    }
    else {
        var tabORG = JSON.parse(localStorage.getItem("tabORG")) || [];
        tabORG.push(user);
        localStorage.setItem("tabORG", JSON.stringify(tabORG));
        // recuperer l'id user inscrit
        localStorage.removeItem("idOrgConnect");
        var tabOrgId = JSON.parse(localStorage.getItem("idOrgConnect")) || [];
        tabOrgId.push(user.id);
        localStorage.setItem("idOrgConnect", JSON.stringify(tabOrgId[0]));
        window.location.href = "profileOrg.html";
    }
}

function registerUser() {
    if (verifyName() && verifyMail() && verifyPwd() && verifyTel() && verifyRole()) {
        createUser();
        //alert("inscription reussit");
    } else {
        alert("remplire tous les champs");
    }
}

function verifyName() {
    var n = document.getElementById("nom").value;
    var c = "0,1,2,3,4,5,6,7,8,9,*,/,-,+,=,],),},[,{,(,&"
    var r = true;
    if (n.length != 0) {
        for (i = 0; i < n.length; i++) {
            if (c.indexOf(n[i]) > -1) {
                alert(" le nom ne contient que des lettres")
                r = false;
                break;
            }
        }
    }
    return r;
}
/*
function verifyAge() {
    var n = document.getElementById("age").value;
    var r = true;
    if ((n.length = 0) || (n.length > 2)) {
        r = false;
    }
    return r;
}
*/
function verifyMail() {
    var e = document.getElementById("mail").value;
    var verif = true;
    if (((e.indexOf("@")) < 0) || (e.indexOf(".") < 0) || ((e.indexOf("@")) > (e.indexOf("."))) || (e = (""))) {
        alert("email invalide");
        verif = false;
    }
    return verif;
}

function verifyPwd() {
    var p = document.getElementById("mpass").value;
    var verif = true;
    if (p.length < 8) {
        alert("mot de pass invalide il faut que etre >8");
        verif = false;
    }
    return verif;
}

function verifyTel() {
    var tel = document.getElementById("tel").value;
    var verif = true;
    if (tel.length < 8) {
        alert("n° de tel invalide il faut que etre >8");
        verif = false;
    }
    return verif;
}

function verifyRole() {
    var role = document.getElementById("selct").value;
    var verif = true;
    if (role == "choisir votre profil") {
        alert("il faut choisir le profil");
        verif = false;
    }
    return verif;
}



