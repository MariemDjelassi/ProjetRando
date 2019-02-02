//    supprimer une randonnée existe

function removeRando(idOrgConnect) {
    var tabRando = JSON.parse(localStorage.getItem('tabRando'));
    for (i = 0; i < tabRando.length; i++) {
        var idOrgRd = tabRando[i].idUserConnect;
        if (idOrgRd == idOrgConnect) {
            tabRando.splice(idOrgRd, 1);
            localStorage.setItem("tabRando",JSON.stringify(tabRando));
            //location.href=".html";
            break;
        }
    }
}

//
/*
function upDateRd(idOrgConnect) {
    document.getElementById("formRando").style.display = "block";

    var tabRando = JSON.parse(localStorage.getItem('tabRando'));
    for ( i=0; i < tabRando.length; i++)
    {
        if (tabRando[i].idUserConnect == idOrgConnect){
            document.getElementById("name").value = tabRando[i].nameRando;
            document.getElementById("depart").value = tabRando[i].departRando;
            document.getElementById("arrivee").value = tabRando[i].arriveeRando;
            document.getElementById("periode").value = tabRando[i].periodeRando;
            document.getElementById("destination").value = tabRando[i].destRando;
            document.getElementById("prix").value = tabRando[i].prixRando;
            document.getElementById("places").value = tabRando[i].nbrPlaceRando;
            //document.getElementById("image").value = tabRando[i].imgRando;
            document.getElementById("details").value = tabRando[i].detailsRando;
            break;
        }
    }
}
*/