function generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function createUser() {
    var user = {
        id: generateID(),
        nom: document.getElementById("nom").value,
        age: document.getElementById("age").value,
        mail: document.getElementById("mail").value,
        password: document.getElementById("mpass").value,
        tel: document.getElementById("tel").value,
        adresse: document.getElementById("adresse").value,
        role: document.getElementById("selct").value,
        image: document.getElementById("img").value,
        confirmation: false,
    }
    if (role == "Participant") {
        var tabPAR = JSON.parse(localStorage.getItem("tabPAR")) || [];
        tabPAR.push(user);
        localStorage.setItem("tabPAR", JSON.stringify(tabPAR));
        window.location.href = "participant.html";
    }
    else {
        var tabORG = JSON.parse(localStorage.getItem("tabORG")) || [];
        tabORG.push(user);
        localStorage.setItem("tabORG", JSON.stringify(tabORG));
        window.location.href = "organizer.html";
    }
}

function registerUser() {
    if (verifyName() && verifyAge() && verifyMail() && verifyPwd() && verifyTel() && verifyRole()) {
        createUser();
        //alert("inscription reussit");
    } else {
        alert("il faut remplire tous les champs correctement");
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

function verifyAge() {
    var n = document.getElementById("age").value;
    var r = true;
    if ((n.length = 0) || (n.length > 2)) {
        r = false;
    }
    return r;
}

function verifyMail() {
    var e = document.getElementById("mail").value;
    var r = true;
    if (((e.indexOf("@")) < 0) || (e.indexOf(".") < 0) || ((e.indexOf("@")) > (e.indexOf("."))) || (e = (""))) {
        alert("email invalide");
        r = false;
    }
    return r;
}

function verifyPwd() {
    var p = document.getElementById("mpass").value;
    var r = true;
    if (p.length < 8) {
        alert("mot de pass invalide il faut que etre >8");
        r = false;
    }
    return r;
}

function verifyTel() {
    var t = document.getElementById("tel").value;
    var r = true;
    if (t.length < 8) {
        alert("n° de tel invalide il faut que etre >8");
        r = false;
    }
    return r;
}

function verifyRole() {
    var r = document.getElementById("selct").value;
    var r = true;
    if (r == "Choose") {
        alert("il faut choisir org/par");
        r = false;
    }
    return r;
}



