//    générer un identifiant automatique pour chaque randonnée ajoutée

function generateID() {
    var id = Math.random().toString(36).substr(2, 9);
    return id;
}

//    Création de la table des Randonnées

function createRando() {
    var rando = {
        idRando : generateID(),
        nameRando : document.getElementById("name").value,
        departRando : document.getElementById("depart").value,
        arriveeRando : document.getElementById("arrivee").value,
        periodeRando : document.getElementById("periode").value,
        destRando : document.getElementById("destination").value,
        prixRando : document.getElementById("prix").value,
        nbrPlaceRando : document.getElementById("places").value,
        imgRando : document.getElementById("image").value,
        detailsRando : document.getElementById("details").value,
    }
    var tabRando = JSON.parse(localStorage.getItem('randoTab')) || [];

    tabRando.push(rando);
    localStorage.setItem("randoTab", JSON.stringify(tabRando));
}

//    supprimer une rondonnée existe
/*

function removeRando(idRd) {
    var tabRando = JSON.parse(localStorage.getItem('randoTab'));
    for (i = 0; i <= tabRando.length; i++) {
        if (tabRando[i].idRando == idRd) {
            tabRando.splice(i,1);  
        }
    }
}

function name(params) {
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
}
 */