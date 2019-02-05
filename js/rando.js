//    générer un identifiant automatique pour chaque randonnée ajoutée

function generateID() {
    var id = Math.random().toString(36).substr(2, 9);
    return id;
}

//    Création de la table des Randonnées
var idOrgConnect = localStorage.getItem('idOrgConnect');

function createRando(idOrgConnect) {
    var rando = {
        idUserConnect: JSON.parse(idOrgConnect),
        idRando: generateID(),
        nameRando: document.getElementById("name").value,
        departRando: document.getElementById("depart").value,
        arriveeRando: document.getElementById("arrivee").value,
        periodeRando: document.getElementById("periode").value,
        destRando: document.getElementById("destination").value,
        prixRando: document.getElementById("prix").value,
        nbrPlaceRando: document.getElementById("places").value,
        imgRando: document.getElementById("image").value,
        detailsRando: document.getElementById("details").value,
    }
    var tabRando = JSON.parse(localStorage.getItem('tabRando')) || [];
    tabRando.push(rando);
    localStorage.setItem("tabRando", JSON.stringify(tabRando));
}





//    

/*
function test(){
    var tabPAR= JSON.parse(localStorage.getItem("tabPAR"));
    var connect  = getConnectedUserId();
    console.log(connect);
    var nom;
    for ( let i=0; i<tabPAR.length; i++){
        if(connect == tabPAR[i].id){
            nom = tabPAR[i].nom;
        }
    }
    console.log(nom);
     document.getElementById("msg").innerHTML += nom;
}
 */

//    afficher la liste des randonnée d'un tel organisateur

