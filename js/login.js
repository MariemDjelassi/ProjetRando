function verifLogIn() {
    var verif = false;
    var log = document.getElementById("email").value;
    var pswd = document.getElementById("pwd").value;
    var tabUserOrg = JSON.parse(localStorage.getItem('tabORG'));
    var tabUserPart = JSON.parse(localStorage.getItem('tabPAR'));

    for (i = 0; i < tabUserPart.length; i++) {
        if ((tabUserPart[i].mail == log) && (tabUserPart[i].password == pswd)) {
            verif = true;
            break;
        }
    }
    if (verif) {
        localStorage.setItem("idPartConnect", tabUserPart[i].id);
        window.location.href = "participant.html";
    } else {
        for (i = 0; i < tabUserOrg.length; i++) {
            if ((tabUserOrg[i].mail == log) && (tabUserOrg[i].password == pswd)) {
                verif = true;
                break;
            }
        }
        if (verif) {
            localStorage.setItem("idOrgConnect", tabUserOrg[i].id);
            window.location.href = "organizer.html";
        } else {
            alert("Erreur: vous n'êtes pas inscrit! Veuillez s'inscrire d'abord!");
            window.location.href = "inscri.html";
        }
    }
}
