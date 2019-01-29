function consulter_user(){
   document.getElementById("bloc_user").style.display = "block";
    var tab = JSON.parse(localStorage.getItem("tabR"));
       for(i=0;i<tab.length;i++){
        var j = tab[i].id;
        var r = tab[i].role;
        var n=tab[i].nom;
        var p = tab[i].prénom;
        var t= tab[i].tel;
        var m = tab[i].mail;
        var fb = tab[i].facebook;
        var insta = tab[i].instagrame;
        doc = document.getElementById("aa");
        doc.innerHTML+=`
        <table border="2px" id="${j}">
                  <tr>
            <td >${r}                                 </td>
            <td >${n}                               </td>
            <td >${p}                            </td>
            <td >${t}                            </td>
            <td >${m}                            </td>
            <td >${fb}                            </td>
            <td >${insta}                            </td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ><button onclick="confirmer('${j}')">M</button>              </td>
            <td ></td>
            <td ><button onclick="supprimer('${j}')">X</button>              </td>
            
                   </tr>
        </table>`;
       }
}


function consulter_rondo(){
    document.getElementById("bloc_rondo").style.display = "block";
     var tab = JSON.parse(localStorage.getItem("tabRondo"));
        for(i=0;i<tab.length;i++){
         var j = tab[i].id;
         var r = tab[i].role;
         var n=tab[i].nom;
         var p = tab[i].prénom;
         var t= tab[i].tel;
         var m = tab[i].mail;
         var fb = tab[i].facebook;
         var insta = tab[i].instagrame;
         doc = document.getElementById("aa");
         doc.innerHTML+=`
         <table id="${j}">
                   <tr>
             <td >${r}                                 </td>
             <td >${n}                               </td>
             <td >${p}                            </td>
             <td >${t}                            </td>
             <td >${m}                            </td>
             <td >${fb}                            </td>
             <td >${insta}                            </td>
             <td ></td>
             <td ></td>
             <td ></td>
             <td ></td>
             <td ><button onclick="confirmer('${j}')">M</button>              </td>
             <td ></td>
             <td ><button onclick="supprimer('${j}')">X</button>              </td>
             
                    </tr>
         </table>`;
        }
 }
 function boutique(){
       document.getElementById("bloc_boutique").style.display = "block";
 }

function ajouter_boutique(){
 var b = document.getElementById("boutique").value;
 var tel = document.getElementById("telb").value;
 var ads = document.getElementById("adrs").value;
 var m = document.getElementById("email").value;
 var face = document.getElementById("faceb").value;
 var inst = document.getElementById("insta").value;
 var a1 = document.getElementById("art1").value;
 var img1= document.getElementById("image1").value;
 var a2 = document.getElementById("art2").value;
 var img2= document.getElementById("image2").value;
 var a3 = document.getElementById("art3").value;
 var img3= document.getElementById("image3").value;
 console.log("hhhhhh");
 if( (b !="") && (tel !="") && (ads !="") && mail() && (a1 !="") &&  (img1 !="")){
        console.log("ok");
 var boutique={
        id:generetID(),
        nom : b,
        tele : tel,
        mail : m,
        adresse : ads,
        facebook : face,
        instagrame :inst,
        article1 : a1,
        image1 : image1,
        article2 : a2,
        image2 : image2,
        article3 : a3,
        image3 : image3,
 }
 var TAB = JSON.parse(localStorage.getItem("tabboutique"))||[];
     if (TAB == null ) {TAB=[];}
 TAB.push(boutique);
 localStorage.setItem("tabboutique",JSON.stringify(TAB));
}
    else { alert("il faut remplire les champs correctement");}
}

function mail(){
       var e=document.getElementById("email").value;
       var r = true;
       if(((e.indexOf("@"))<0) || (e.indexOf(".")<0) || ((e.indexOf("@"))>(e.indexOf("."))) || (e=("")))
       {
           alert ("email invalide");
           r=false;
       }
       return r;
   }

function generetID()
{
    return '_' + Math.random().toString(36).substr(2, 9);
}

function consulter_boutique(){
       document.getElementById("liste_boutique").style.display = "block";
       var tab = JSON.parse(localStorage.getItem("tabboutique"));
          for(i=0;i<tab.length;i++){
           var j = tab[i].id;
           var n = tab[i].nom;
           var t = tab[i].tele;
           var m = tab[i].mail;
           var d=  tab[i].adresse;
           var f = tab[i].facebook;
           var s = tab[i].instagrame;
           var a1 = tab[i].article1;
           var m1 = tab[i].image1;
           var a2 = tab[i].article2;
           var m2 = tab[i].image2;
           var a3 = tab[i].article3;
           var m3 = tab[i].image3;
           doc = document.getElementById("bb");
           doc.innerHTML+=`
           <table border="2px" id="${j}">
                     <tr>
               <td >${n}                            </td>
               <td >${t}                            </td>
               <td >${m}                            </td>
               <td >${d}                            </td>
               <td >${f}                            </td>
               <td >${s}                            </td>
               <td >${a1}                            </td>
               <td >${m1}                            </td>
               <td >${a2}                            </td>
               <td >${m2}                            </td>
               <td >${a3}                            </td>
               <td >${m3}                            </td>
               <td ></td>
               <td ></td>
               <td ></td>
               <td ></td>
               <td ><button onclick="confirmer('${j}')">M</button>              </td>
               <td ></td>
               <td ><button onclick="supprimer('${j}')">X</button>              </td>
               
                      </tr>
           </table>`;
          }
}
