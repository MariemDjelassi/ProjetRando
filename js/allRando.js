//
var idOrgConnect = localStorage.getItem('idOrgConnect');
function displayAllRd(idOrgConnect) {
    var tabRando = JSON.parse(localStorage.getItem('tabRando'));
    var datacount = tabRando.length;
    if (datacount > 0) {
        //document.write('vous avez pas de randonnée!!');
        var html = '<table border="1">';
        var a = '<a href = "singleRando.html" onclick = "getIdRdCurrent()">';
        html += "<tr><th>Nom</th><th>Destinations</th><th>Date</th><th>Prix</th><th>Nombre de place</th><th id = 'TH'>ID</th></tr>";
        localStorage.removeItem("tabIdRd");
        for (i = 0; i < datacount; i++) {
            var idOrgRd = tabRando[i].idUserConnect;

            if (idOrgRd == idOrgConnect) {

                html += '<tr><td>' + a + tabRando[i].nameRando + '</a></td>';
                html += '<td>' + a + tabRando[i].destRando + '</a></td>';
                html += '<td>' + a + tabRando[i].departRando + '</a></td>';
                html += '<td>' + a + tabRando[i].prixRando + '</a></td>';
                html += '<td>' + a + tabRando[i].nbrPlaceRando + '</a></td>';
                html += '<td>' + tabRando[i].idRando + '</td></tr>';


                //var tabIdRd = JSON.parse(localStorage.getItem("tabIdRd")) || [];
                //tabIdRd.push(tabRando[i].idRando);
                //localStorage.setItem("tabIdRd", JSON.stringify(tabIdRd));
                //var Rando = JSON.parse(localStorage.getItem("Rando")) || [];
                //tabIdRd.push(tabRando[i].idRando);
                sessionStorage.setItem("Rando_" + i, JSON.stringify(tabRando[i]));
                
            }

        }
        html += '</table>';
        //document.getElementById("TH").style.visibility = "hidden";  
        allRd.innerHTML = html;
    }
}
//      ****************          ??????????????????????????         *****************
function getIdRdCurrent() {
    var Rd = JSON.parse(sessionStorage.getItem('tabRando'));
}
/** 
function getIdRdCurrent() {
    var tabRando = JSON.parse(localStorage.getItem('tabRando'));
    var count = tabRando.length;
    //var verif = false;
    for (i = 0; i < localStorage.length; i++) {
        var KeyRando = window.localStorage.key(i);
        var id = JSON.parse(localStorage.getItem(KeyRando));
        for (j = 0; j < count; j++) {
            var idRd = tabRando[j].idRando;
            if (id == idRd) {
                //verif = true;
                break;
            }
        }
        break;
    }
    return id;
}*/
//
var idRdCurrent = getIdRdCurrent();
function displaySingleRd(idRdCurrent) {
    console.log(idRdCurrent);
    var tabRando = JSON.parse(localStorage.getItem('tabRando'));
    var datacount = tabRando.length;
    if (datacount > 0) {
        var html = '<table border="1">'
        //document.write('vous avez pas de randonnée!!');
        for (i = 0; i < datacount; i++) {
            var idOrgRd = tabRando[i].idUserConnect;
            var idRd = tabRando[i].idRando;
            if ((idOrgRd == idOrgConnect) && (idRdCurrent == idRd)) {
                
                html += '<tr><td>Nom</td><td>' + tabRando[i].nameRando + '</td></tr>';
                html += '<tr><td>Destinations</td><td>' + tabRando[i].destRando + '</td></tr>';
                html += '<tr><td>Date</td><td>' + tabRando[i].departRando + '</td></tr>';
                html += '<tr><td>Prix</td><td>' + tabRando[i].prixRando + '</td></tr>';
                html += '<tr><td>Nombre de place</td><td>' + tabRando[i].nbrPlaceRando + '</td></tr>';
                html += '<tr><td>Modifier</td><td> <button id="btnUpDate" onclick="upDateRd()"> Modifier </button> </td></tr>';
                html += '<tr><td>Supprimer</td><td> <button id="btnDelete" onclick="removeRando()"> Supprimer </button></td></tr>';
            }
        }
        html += '</table>';
        singleRd.innerHTML = html;
    }
}


