
htmlpublication()
htmlannonce()
function htmlpublication(){

    var entr = '<div class="divpublication">'
    var diva = ' <div class="divpublimage"> <img class="tabpubimga" src ="public/image/acceuil/chaussurea.jpg"></img>  <img class="tabpubimgb" src ="public/image/acceuil/chaussureb.jpg"></img> <img class="tabpubimgc" src ="public/image/acceuil/chaussurec.jpg"></img></div>'
    
    var divanonca = ' <div class="divannonceura"> <label class="contactermoi">contacter moi</label> </br>  <label class="annonceurtel">  Tel  : <span class="spananonce">22177455426  </span> </label> </br>   <label class="annonceuremail"> Email : <span class="spananonce"> annonceurannonceur@gmail.com  </span>  </label>    </div>'
   
    var reseau = '<div class="reseaua" ><img class="imgrf"  src="public/image/acceuil/facebook.png"></img><img class="imgrt"   src="public/image/acceuil/twitter.png"></img><img class="imgri"   src="public/image/acceuil/insta.png"></img> <img class="imgrm"   src="public/image/acceuil/messenger.png"></img></div>'
   
    var divanoncb = '<div class="annoncp"> <img class="imgannonce"   src="public/image/acceuil/profile.jpg"></img> </br>   <label class="annoncnom"> Ma penda Samb</label> </div>'
    var divb = '<div class="divannonceur">' + divanonca + reseau + divanoncb + ' </div>'
  

    var sorti = '</div>'

  var html = entr + diva + divb + sorti 

  //for(var a = 0 ; a < 5 ; a++)


  var a = '<div class="annonces"> <label class="annonceslab"> cette parti est pour les annonce evenement et autre de la part des clients des gens qui font confiances aux services de thies busness et annonces </label></div>'
   
  $('#divpubglobale').append(html)

  $('#divpubglobale').append(a)
  $('#divpubglobale').append(html)

  $('#divpubglobale').append(a)
  $('#divpubglobale').append(html)

  $('#divpubglobale').append(a)


}

function htmlannonce(){

    


}