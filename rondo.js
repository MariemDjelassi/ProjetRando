
//function rondonnées

var chaine_img ="rivier.jpg;lac.jpg;jandouba.jpg;sidi_boussid.jpg;montagne.jpg";

var tab_img=chaine_img.split(";");
var nb_img = tab_img.length;
var chemin ="image/";
var position = 0;

document.getElementById("album").src = chemin + tab_img[position];
document.getElementById("mini1").src = chemin + tab_img[position];
document.getElementById("mini2").src = chemin + tab_img[position+1];
document.getElementById("mini3").src = chemin + tab_img[position+2];
document.getElementById("mini4").src = chemin + tab_img[position+3];

document.getElementById("mini1").style.border = "#84020b 3px solid";

traite_texte(tab_img[position]);

function traite_texte(texte)
{
   var chaine= "";
   var tab_mots = texte.replace(".jpg", "").split("-");

        for(var compteur=1; compteur<tab_mots.length; compteur++)
           {
              if(tab_mots[compteur].length>2 || compteur==1)
                chaine += tab_mots[compteur].substr(0,1).toUpperCase() + tab_mots[compteur].substr(1).toLowerCase() + " ";
              else
                chaine += tab_mots[compteur] + " ";
            }
        document.getElementById("texteph").innerText = chaine;
}



function selection(img_source)
{
var image_en_cours = document.getElementById("mini" + img_source).src;
document.getElementById("album").src = image_en_cours;
var pos_caractere = image_en_cours.lastIndexOf("/", image_en_cours);
           for(var indice=1; indice<5; indice++)
                {
             document.getElementById('mini' + indice).style.border = '#333 1pxsolid';
                }
     document.getElementById('mini' + img_source).style.border = '#84020b 3px solid';
     image_en_cours = image_en_cours.substring(pos_caractere + 1);
     for(var defil=0; defil<nb_img; defil++)
       {
            if(tab_img[defil] == image_en_cours)
                {
                   position=defil;
                    break;
                }
        }
        traite_texte(image_en_cours);
}

function defiler(comment){
    if(comment=='avant')
   { position++;}
    else
   { position--;}
    
    if(position<0)
          {
            position = nb_img-1;
            document.getElementById("mini1").src = chemin + tab_img[position-3];
            document.getElementById("mini2").src = chemin + tab_img[position-2];
            document.getElementById("mini3").src = chemin + tab_img[position-1];
            document.getElementById("mini4").src = chemin + tab_img[position];
          }

    else if(position == nb_img)
         {
           position = 0;
           document.getElementById("mini1").src = chemin + tab_img[position];
           document.getElementById("mini2").src = chemin + tab_img[position+1];
           document.getElementById("mini3").src = chemin + tab_img[position+2];
           document.getElementById("mini4").src = chemin + tab_img[position+3];
         }

         else if(position % 4 ==0 && comment=='avant')
       {
          document.getElementById("mini1").src = chemin + tab_img[position];
          document.getElementById("mini2").src = chemin + tab_img[position+1];
          document.getElementById("mini3").src = chemin + tab_img[position+2];
          document.getElementById("mini4").src = chemin + tab_img[position+3];
       }
         else if((position+1) % 4 ==0 && comment=='arriere' && position!=0)
           {
            document.getElementById("mini1").src = chemin + tab_img[position-3];
            document.getElementById("mini2").src = chemin + tab_img[position-2];
            document.getElementById("mini3").src = chemin + tab_img[position-1];
            document.getElementById("mini4").src = chemin + tab_img[position];
           }
           document.getElementById("album").src = chemin + tab_img[position];

           for(var indice=1; indice<5; indice++)
           {
           document.getElementById("mini" + indice).style.border = "#333 1pxsolid";
           if(document.getElementById("mini" + indice).src == document.getElementById("album").src)
           document.getElementById("mini" + indice).style.border = "#84020b3px solid";
           }
           traite_texte(tab_img[position]); 
}




