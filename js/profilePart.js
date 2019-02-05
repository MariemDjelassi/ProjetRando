// se déconnecter de la plateform
function signUp() {
    localStorage.removeItem("idPartConnect");
    window.location.href = "home.html";
}
//



function getConnectedUserId(){
    return JSON.parse(localStorage.getItem("tabPAR"))[0].id;
}
//   affichage du nom du participant connecté
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

function consulte(){
   var tabPAR = JSON.parse(localStorage.getItem("tabPAR"))|| [];
    var userId  = getConnectedUserId(); 
    console.log(userId);
        for( let i=0; i<tabPAR.length; i++){
            if(tabPAR[i].id === userId){
            var html = '<table><tr><td>Nom</td>';
            html += '<td>'+tabPAR[i].nom+'</td></tr>';
            html += '<tr><td>Age</td>';
            html += '<td>'+tabPAR[i].age+'</td></tr>';
            html += '<tr><td>Mail</td>';
            html += '<td>'+tabPAR[i].mail+'</td></tr>';
            html += '<tr><td>Password</td>';
            html += '<td>'+tabPAR[i].password+'</td></tr>';
            html += '<tr><td>Adresse</td>';
            html += '<td>'+tabPAR[i].adresse+'</td></tr>'
            html += '<tr><td>Role</td>';
            html += '<td>'+tabPAR[i].role+'</td></tr>';
            html += '<tr><td>Telephone</td>';
            html += '<td>'+tabPAR[i].tel+'</td></tr>'
            html += '<tr><td>Image</td>';
            html += '<td>'+tabPAR[i].img+'</td></tr>';
            }
        }
            html += '</table>';
            html += `<input type="button" id="btnmodiofier" value="Modifier" onclick="modifier()">`;

    document.getElementById("msg").innerHTML = html;
  
}
 
function modifier(){
    document.getElementById("form-user").style.display = 'block';
    var tabPAR = JSON.parse(localStorage.getItem("tabPAR"));
    var userId  = getConnectedUserId();
    console.log(userId);
    for ( let i =0 ; i<tabPAR.length; i++)
    {
        if(tabPAR[i].id == userId){ 
           document.getElementById("nom").value = tabPAR[i].nom;
            document.getElementById("age").value = tabPAR[i].age;
             document.getElementById("mail").value =tabPAR[i].mail;
            document.getElementById("password").value =tabPAR[i].password;
            document.getElementById("telphone").value = tabPAR[i].tel;
            document.getElementById("adresse").value = tabPAR[i].adresse;
            // document.getElementById("image").value = tabPAR[i].image;   
    }

}
}
    function confirme(){
        var tabPAR = JSON.parse(localStorage.getItem("tabPAR"));
        var userId  = getConnectedUserId();
        console.log(userId);
        for( let i=0; i<tabPAR.length; i++){
            if(tabPAR[i].id == userId){ 
            var nom = document.getElementById("nom").value;
            var age = document.getElementById("age").value;
            var mail = document.getElementById("mail").value;
            var password = document.getElementById("password").value;
            var telephone = document.getElementById("telphone").value;
            var adresse = document.getElementById("adresse").value;
            var image = document.getElementById("image").value;
            tabPAR[i].nom = nom;
            tabPAR[i].age = age;
            tabPAR[i].mail = mail;
            tabPAR[i].password = password;
            tabPAR[i].telphone = telephone;
            tabPAR[i].adresse = adresse;
            tabPAR[i].image = image;
            localStorage.setItem("tabPAR",JSON.stringify(tabPAR));
            
        }
        }
    }
