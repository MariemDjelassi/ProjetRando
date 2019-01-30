
function recherche(){
    var l = document.getElementById("mail").value;
    var p = document.getElementById("pwd").value;
    var tab_r = JSON.parse(localStorage.getItem("tabORG"));
    var tab_p = JSON.parse(localStorage.getItem("tabPAR"));
    var r = false;
    if (( l == "" )&&( p =="" ))
    {
        alert("il faut remplire les champs");
    }
    else
    { 
       for(i=0;i<tab_r.length;i++){
        if(( l == tab_r[i].mail)&&( p == tab_r[i].password))
        {
          location.href="";
          localStorage.setItem("iduti",tab_r[i].id);
          r = true;
          break;
        }
        if (r=false){
            for(i=0;i<tab_p.length;i++){
                if(( l == tab_p[i].mail)&&( p == tab_p[i].password))
                {
                  location.href="";
                  localStorage.setItem("iduti",tab_p[i].id);
                  r = true;
                  break;
                }
           }
        }
    }
    if ( r == false)
       {
        alert("mail ou/et mot de pass incorret");
       }
    } 
   
}
