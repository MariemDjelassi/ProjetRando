var idOrgConnect = localStorage.getItem('idOrgConnect');
var tabRando = JSON.parse(localStorage.getItem('tabRando'));
var datacount = tabRando.length;

//  show all of rando
function displayAllRd(idOrgConnect) {
    document.getElementById("formRd").style.display= "none";
    if (datacount > 0) {
        //document.write('vous avez pas de randonnée!!');
        var html = '<table border="1">';
        html += "<tr><th>Nom</th><th>Destinations</th><th>Date</th><th>Prix</th><th>Nombre de place</th><th id = 'TH'>ID</th></tr>";
        for (i = 0; i < datacount; i++) {
            var idOrgRd = tabRando[i].idUserConnect;
            var idRd = tabRando[i].idRando;
            if (idOrgRd == idOrgConnect) {
                var btnShowRd = `<button onclick = "displaySingleRd('${idRd}')">show</button>`;
                html += '<tr><td>' + tabRando[i].nameRando + '</td>';
                html += '<td>' + tabRando[i].destRando + '</td>';
                html += '<td>' + tabRando[i].departRando + '</td>';
                html += '<td>' + tabRando[i].prixRando + '</td>';
                html += '<td>' + tabRando[i].nbrPlaceRando + '</td>';
                html += '<td>' + btnShowRd + '</td></tr>';
            }
        }
        html += '</table>'; 
        allRd.innerHTML = html;
    }
}

//     display a single rando
function displaySingleRd(id) {
    var id = findIdRd(id);
    showRando(id);
}
function findIdRd(id) {
    for (let tabRd of tabRando) {
        if (tabRd.idRando === id) {
            return tabRd.idRando;
        }
    }
}
function showRando(id) {
    for (i = 0; i < datacount; i++) {
        var idRd = tabRando[i].idRando;
        //console.log(id ,idRd)
        if (idRd == id ) {
            var html = '<table border="1">'
            html += `<tr><td>Nom</td><td>${tabRando[i].nameRando}</td></tr>`;
            html += `<tr><td>Destinations</td><td>${tabRando[i].destRando}</td></tr>`;
            html += `<tr><td>Date</td><td>${tabRando[i].departRando}</td></tr>`;
            html += `<tr><td>Prix</td><td>${tabRando[i].prixRando}</td></tr>`;
            html += `<tr><td>Nombre de place</td><td>${tabRando[i].nbrPlaceRando}</td></tr>`;
            html += `<tr><td>Modifier</td><td> <button id="btnUpDate" onclick="upDateRd('${idRd}')"> Modifier </button> </td></tr>`;
            html += `<tr><td>Supprimer</td><td> <button id="btnDelete" onclick="removeRando('${idRd}')"> Supprimer </button></td></tr>`;
            html += '</table>';
        }
        allRd.innerHTML = html;
    }
}

//    supprimer une randonnée existe
function removeRando(id) {
    for (i = 0; i < datacount; i++) {
        var idRd = tabRando[i].idRando;
        if (idRd == id) {
            tabRando.splice(i, 1);
            localStorage.setItem("tabRando",JSON.stringify(tabRando));
            location.href="profileOrg.html";
            break;
        }
    }
}

//    mettre a jour une randonnée
function upDateRd(id) {
    console.log(id);
    //var id = findIdRd(id);
    //console.log(id);
    document.getElementById("allRd").style.display = "none";
    document.getElementById("formRd").style.display = "block";
    
    for ( i=0; i < datacount; i++) {
        var idRd = tabRando[i].idRando;
        if (idRd == id){
            //html += `<button type="submit" onclick="validateUpDate(idRd)">confirmer</button>`;
            document.getElementById("name").value = tabRando[i].nameRando;
            document.getElementById("depart").value = tabRando[i].departRando;
            document.getElementById("arrivee").value = tabRando[i].arriveeRando;
            document.getElementById("periode").value = tabRando[i].periodeRando;
            document.getElementById("destination").value = tabRando[i].destRando;
            document.getElementById("prix").value = tabRando[i].prixRando;
            document.getElementById("places").value = tabRando[i].nbrPlaceRando;
            document.getElementById("details").value = tabRando[i].detailsRando;
            var el = document.getElementById(btn);
            if (el) {
                el.addEventListener('click', validateUpDate(idRd));
            }
            //document.getElementById("image").value = tabRando[i].imgRando;
            break;
        }
    }
}

//

function validateUpDate(id) {
    var id = findIdRd(id);
    for (let i = 0; i < datacount; i++) {
        var idRd = tabRando[i].idRando;
        if (idRd == id) {
            console.log(id);
            console.log(idRd);
            tabRando[i].nameRando = document.getElementById("name").value;
            tabRando[i].departRando = document.getElementById("depart").value;
            tabRando[i].arriveeRando = document.getElementById("arrivee").value;
            tabRando[i].periodeRando = document.getElementById("periode").value;
            tabRando[i].destRando = document.getElementById("destination").value;
            tabRando[i].prixRando = document.getElementById("prix").value;
            tabRando[i].detailsRando = document.getElementById("details").value;
            tabRando[i].nbrPlaceRando = document.getElementById("places").value
            //tabRando[i].imgRando = document.getElementById("image").value;
            localStorage.setItem("tabRando", JSON.stringify(tabRando));
            break;
        }
    }
    //location.href = "profileOrg.html";
}
//              ********* travail de haithem ***************
/*
var tabHotels = JSON.parse(localStorage.getItem("tabH"));
var html = `<table>
<tr>
<th>Destination</th>
<th>Hotel</th>
<th>Stars</th>
<th>Room</th>
<th>Guest</th>
<th>Price</th>
<th>Select</th>
</tr>
`;
for(let tabHotelss of tabHotels) {
    html = html + `<tr>
    <td>${tabHotelss.destination}</td>
    <td>${tabHotelss.hotel}</td>
    <td>${tabHotelss.stars}</td>
    <td>${tabHotelss.room}</td>
    <td>${tabHotelss.guest}</td>
    <td>${tabHotelss.price}</td>
    <td><button type =button onclick=addToPanel("${tabHotelss.id}")>Add to panel</button></td>
    </tr>`
}
html += '</table>';
var abc = document.getElementById("tableaux").innerHTML = html;
function addToPanel(id){
    var hotelss = findIDhotel(id);
    add.push(hotelss);
    localStorage.setItem("panelhotel",JSON.stringify(add));
}
function findIDhotel(id){
    for(let tabHotelss of tabHotels) {
        if (tabHotelss.id === id) {
            return tabHotelss;
        }
    }
}
*/
