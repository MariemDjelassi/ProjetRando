var idOrgConnect = localStorage.getItem('idOrgConnect');

function displayAllRd(idOrgConnect) {
    var tabRando = JSON.parse(localStorage.getItem('tabRando'));
    var datacount = tabRando.length;
    if (datacount > 0) {
        //document.write('vous avez pas de randonnée!!');
        var html = '<table border="1">';
        html += "<tr><th>Nom</th><th>Destinations</th><th>Date</th><th>Prix</th><th>Nombre de place</th></tr>";
        for (i = 0; i < datacount; i++) {
            var idOrgRd = tabRando[i].idUserConnect;
            if (idOrgRd == idOrgConnect) {
            
                html += '<tr><td>' + tabRando[i].nameRando + '</td>';
                html += '<td>' + tabRando[i].destRando + '</td>';
                html += '<td>' + tabRando[i].departRando + '</td>';
                html += '<td>' + tabRando[i].prixRando + '</td>';
                html += '<td>' + tabRando[i].nbrPlaceRando + '</td></tr>';

                //html += '<td> <button id="btnUpDate" onclick="upDateRd()"> Modifier </button>';
                //html += ' ' + '<button id="btnUpDate" onclick="removeRando()"> Supprimer </button></td></tr>';

                //html += '<tr><td> Image </td>';
                //html += '<td>' + tabRando[i].imgRando + '</td></tr>';
            }
        }
        html += '</table>';
        allRd.innerHTML = html;
    }
}

/**
function displaySingleRd(idOrgConnect) {
    var tabRando = JSON.parse(localStorage.getItem('tabRando'));
    for ( i = 0; i < tabRando.length; i++ ) {
        var idOrgRd = tabRando[i].idUserConnect;
        if ( idOrgRd == idOrgConnect ) {
            var html = '<table border="1"><tr><td> Nom </td><td> Destinations </td><td> Date </td><td> Prix </td><td> Nombre de place </td><td></td></tr>'
            html += '<tr><td>' + tabRando[i].nameRando + '</td>';
            html += '<td>' + tabRando[i].destRando + '</td>';
            html += '<td>' + tabRando[i].departRando + '</td>';
            html += '<td>' + tabRando[i].prixRando + '</td>';
            html += '<td>' + tabRando[i].nbrPlaceRando + '</td>';
            html += '<td> <button id="btnUpDate" onclick="upDateRd()"> Modifier </button>';
            html += ' '+'<button id="btnUpDate" onclick="removeRando()"> Supprimer </button></td></tr>';

            //html += '<tr><td> Image </td>';
            //html += '<td>' + tabRando[i].imgRando + '</td></tr>';
        }
    }
    html += '</table><br>';
    document.getElementById("singleRd").innerHTML = html;
}
*/