
var imga = "chaussurea.jpg"
var imgb = "chaussureb.jpg"

var imgc = "chaussurec.jpg"


var produit = []

var donne = {}

donne.imga = imga
donne.imgb = imgb
donne.imgc = imgc


produit.push(donne)
produit.push(donne)
produit.push(donne)

var pub = htmlpublication(produit[0].imga , produit[0].imgb , produit[0].imgc)
var annonce = htmlannonce()

$('#divpubglobale').append( '<table> <tr> <td>'  +  pub + '</td> </tr> </table>')
$('#divpubglobale').append( '<table> <tr> <td>'  +  annonce + '</td> </tr> </table>')


//createPublication()
 

  function createPublication(){


    for(var i = 0 ; i < produit.length ; i++) {
      var pub = htmlpublication(produit[i].imga , produit[i].imgb , produit[i].imgc)

      $('#divpubglobale').append( '<table> <tr> <td>'  +  pub + '</td> </tr> </table>')
  
    }
   
  }
function htmlpublication(imga , imgb , imgc){

    var entr = '<div class="divpublication">'
    var diva = ' <div class="divpublimage"> <img class="tabpubimga" src ="public/image/acceuil/produit/' + imga + '"></img>  <img class="tabpubimgb" src ="public/image/acceuil/produit/' + imgb + '"></img> <img class="tabpubimgc" src ="public/image/acceuil/produit/' + imgc + '"></img></div>'
    
    var divanonca = ' <div class="divannonceura"> <label class="contactermoi">contacter moi</label> </br>  <label class="annonceurtel">  Tel  : <span class="spananonce">22177455426  </span> </label> </br>   <label class="annonceuremail"> Email : <span class="spananonce"> annonceurannonceur@gmail.com  </span>  </label>    </div>'
   
    var reseau = '<div class="reseaua" ><img class="imgrf"  src="public/image/acceuil/facebook.png"></img><img class="imgrt"   src="public/image/acceuil/twitter.png"></img><img class="imgri"   src="public/image/acceuil/insta.png"></img> <img class="imgrm"   src="public/image/acceuil/messenger.png"></img></div>'
   
    var divanoncb = '<div class="annoncp"> <img class="imgannonce"   src="public/image/acceuil/profile/profile.jpg"></img> </br>   <label class="annoncnom"> Ma penda Samb</label> </div>'
    var divb = '<div class="divannonceur">' + divanonca + reseau + divanoncb + ' </div>'
  

    var sorti = '</div>'

  var html = entr + diva + divb + sorti 

  
  return html ;

 

}

function htmlannonce(){

  var imgana = '<img class="imganna" src ="public/image/acceuil/produit/evenement.jpg"> '  
  var imganb = '<img class="imgannb" src ="public/image/acceuil/produit/evenementb.jpg"> '  
  

  var annont  = '<div class="annoncet"><label class="annonceslab"> cette parti est pour les annonce evenement et autre de la part des clients des gens qui font confiances aux services de thies busness et annonces </label> </div>'
  
  var a = '<div class="annonces">' + annont + imgana + imganb + ' </div>'
   
 return a ;



}