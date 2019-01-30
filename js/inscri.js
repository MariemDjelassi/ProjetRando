
function inscription(){
    if ( nom() && age() && mail() && mot_pass() && tel() && role() ){
        ajouter ();
        alert ("inscription reussit");
        location.href="login.html";
    }
    else { alert("il faut remplire tous les champs correctement" );}
}

function nom(){
    var n = document.getElementById("nom").value;
    var c ="0,1,2,3,4,5,6,7,8,9,*,/,-,+,=,],),},[,{,(,&"
    var r=true;
    if ( n.length != 0){
    for(i=0;i<n.length;i++){
        if(c.indexOf(n[i])>-1){
            alert( " le nom ne contient que des lettres")
             r = false ;
             break;
           }
       }
   }
    return r;   
}

function age(){
    var n = document.getElementById("age").value;
    var r=true;
    if (( n.length = 0)|| ( n.length >2)){
             r = false ;
           }
    return r;
}

function mail(){
    var e=document.getElementById("mail").value;
    var r = true;
    if(((e.indexOf("@"))<0) || (e.indexOf(".")<0) || ((e.indexOf("@"))>(e.indexOf("."))) || (e=("")))
    {
        alert ("email invalide");
        r=false;
    }
    return r;
}

function mot_pass(){
    var p = document.getElementById("mpass").value;
    var r=true;
    if (p.length<8){ 
        alert("mot de pass invalide il faut que etre >8");
        r = false;
    }
    return r;
}

function tel(){
    var t = document.getElementById("tel").value;
    var r=true;
    if (t.length<8){ 
        alert("n° de tel invalide il faut que etre >8");
        r = false;
    }
    return r;
}

function role(){
    var r = document.getElementById("selct").value;
    var r=true;
    if (r == "Choose"){ 
        alert("il faut choisir org/par");
        r = false;
    }
    return r;
}

function ajouter (){
    var n = document.getElementById("nom").value;
    var age = document.getElementById("age").value;
    var m=document.getElementById("mail").value;
    var mp=document.getElementById("mpass").value;
    var t=document.getElementById("tel").value;
    var a=document.getElementById("adresse").value;
    var r=document.getElementById("selct").value;
    var img=document.getElementById("img").value;
    user= {
        id : generetID(),
        role : r,
        nom :n,
        age : age,
        mail:m,
        adresse :a,
        password:mp,
        tel:t,
        image:img,
        confirmation :false,
    }
    if ( r == "Participant"){
    var TAB = JSON.parse(localStorage.getItem("tabPAR"))||[];
   /* if (TAB == null ) {TAB=[];}*/
    TAB.push(user);
    localStorage.setItem("tabPAR",JSON.stringify(TAB));
    }
    else {
        var TAB = JSON.parse(localStorage.getItem("tabORG"))||[];
       /* if (TAB == null ) {TAB=[];}*/
        TAB.push(user);
        localStorage.setItem("tabORG",JSON.stringify(TAB));
    }
}

function generetID()
{
    return '_' + Math.random().toString(36).substr(2, 9);
}
