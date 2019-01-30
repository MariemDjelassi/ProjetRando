function cnx(){
    var l = document.getElementById("mail1").value;
    var p = document.getElementById("password1").value;

    console.log(l);
    console.log(p);

    if(( l == "admin" )&&( p == "admin"))
    {
        console.log("ok");
        location.href="admin_user.html";
    }

   /*
    if (( l == "" )&&( p == "" ))
    {
        alert("il faut remplire les champs");
    }
   /* else
    { */
        
       /*else
       {
        alert("mail ou/et mot de pass incorret");
       }*/
   
}