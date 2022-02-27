
var idClient = 0




var client = listeClients()
var New = listeNew()



 var pub = listePublication()
 
 var annonce = listeAnnonce()

 
var datapub = dataPub( annonce , pub)



 
 
 
updateNew()

//var i = parseInt(New[2].texta) 
 
createPubGeneral()





clickContacterMoi()


if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
  csshidePubli()
 } else {
 
}

function csshidePubli(){
  $("#remerciment").css({
      //   'padding-left': '28%' ,
         'display':'none',
        
     }) ;
    
  
 
 $("#newb").css({
      //   'padding-left': '28%' ,
         'display':'none',
        
     }) ;

  }

function dataPub( an , pu){
  var datapub = []

  var anl = an.length
var pul = pu.length

if(anl==pul){
  for( var a = 0 , p = 0 ; (a < anl && p < pul) ; a++ , p++){
  
    datapub.push(pu[p])
    datapub.push(an[a])
   }
}
else if(anl < pul){
   for( var a = 0 , p = 0 ; (a < anl && p < anl) ; a++ , p++){
  
    datapub.push(pu[p])
    datapub.push(an[a])
   }
   for( var i = anl ; i < pul ; i++)
   datapub.push(pu[i])
}

else if(pul < anl){
  for( var a = 0 , p = 0 ; (a < pul && p < pul) ; a++ , p++){
 
   datapub.push(pu[p])
   datapub.push(an[a])
  }
  for( var i = pul ; i < anl ; i++)
  datapub.push(an[i])
}

return  datapub
}


function textImgToTab(imgg){

  var tabi = []
  
  for(var a = 0 ;a < 5 ; a++){
    var b  =  imgg.indexOf(',')

    var im = imgg.substring(0,b )
  
    tabi.push(im)

    imgg = imgg.substring(b + 1 )
  }
   
  return tabi 
}

function textImgToTabA(imgg){

  var tabi = []

  for(var a = 0 ;a < 2 ; a++){
    var b  =  imgg.indexOf(',')

    var im = imgg.substring(0,b )
  
    tabi.push(im)

    imgg = imgg.substring(b + 1 )
  }
   
  return tabi 
}

function pubToIdclient( clients , id){

  var data = {}
  for( var a = 0 ; a < clients.length ; a++){
    if( clients[a].id==id)
       data = clients[a]
  }
  return data
}

function createAnnonce(i){
  var text  = datapub[i].texta
  var tabimagea = [] 
  var avec  = false
  if(datapub[i].image.length>=3 )
   tabimagea =  textImgToTabA(datapub[i].image) 
   else
   tabimagea = []
  var theme = datapub[i].theme + '.jpg'
  
  if(tabimagea.length==0)
   avec = false
   else
   avec = true
  
  
  var htmlA =  htmlannonce(text , tabimagea[0] , tabimagea[1] , theme , datapub[i].idc , avec)
  
  
  $('#divpubglobale').append(  htmlA )
 // $('#divpubglobale').append(  'htmlA' )
  
}



function createPubGeneral(){

  
  for( var a = 0 ; a < datapub.length ; a++ ){
  
  if(datapub[a].texta==undefined)
 createPublication(a)
 else 
createAnnonce(a)



  }
  
  
  
 
   
  }

  function createPublication(i){

   
  
  var  pubimage = textImgToTab(datapub[i].image)
 
  
 var id = datapub[i].idc
 
  
  
  var cli = pubToIdclient( client , id)
 
 
  var pubb = htmlpublication(  pubimage , cli)
  
  $('#divpubglobale').append(   pubb )
 //$('#divpubglobale').append( ' pubb' )

 
   
  }
function htmlpublication(image  , client){
 var dir = 'dc' + client.id
 
    var entr = '<div class="divpublication">'
    var diva = ' <div class="divpublimage"> <img class="tabpubimga" src ="public/image/publication/' + dir +'/' + image[0] + '"></img>  <img class="tabpubimgb" src ="public/image/publication/'+ dir +'/' + image[1] + '"></img> <img class="tabpubimgc" src ="public/image/publication/'+ dir +'/' + image[2] + '"></img></div>'
  
 //   var diva = ' <div class="divpublimage"> <img class="tabpubimga" src ="public/image/publication/' + dir +'/' + image[0] + '"></div>'
  
  
    var divanonca = ' <div class="divannonceura"> <label class="contactermoi">contacter moi</label> </br>  <label class="annonceurtel">  Tel  : <span class="spananonce"> '+ client.tel +' </span> </label> </br>   <label class="annonceuremail"> Email : <span class="spananonce"> '+ client.email +' </span>  </label>    </div>'
   
    var reseau = '<div class="reseaua" ><img class="imgrf"  src="public/image/acceuil/facebook.png"></img><img class="imgrt"   src="public/image/acceuil/twitter.png"></img><img class="imgri"   src="public/image/acceuil/insta.png"></img> <img class="imgrm"   src="public/image/acceuil/messenger.png"></img></div>'
   
    var divanoncb = '<div class="annoncp"> <img class="imgannonce"   src="public/image/acceuil/profile/' + client.img + '" ></img> </br>   <label class="annoncnom"> '+ client.prenom +' '+ client.nom +' </label> </div>'
   
    var divb = ' <div class="divpublimageb"> <img class="tabpubimgd" src ="public/image/publication/'+ dir +'/' + image[3] + '"></img>  <img class="tabpubimge" src ="public/image/publication/'+ dir +'/' + image[4] + '"></img> </div>'
 
    
  
    var divc = '<div class="divannonceurcli"> <label class="labcontactmoi"> contacter moi </label> </div>'
  
    var divd = '<div class="divannonceurb"> '+ divanonca + reseau + divanoncb+  ' </div>'
 
    var sorti = '</div>'

  var html = entr + diva  +   divb+  divc+ divd+ sorti 
  //var html = entr + diva  + divb   + sorti 

  
  return html ;

 

}

function htmlannonce(text , imga , imgb , imgfond , id , avec){
   var dr = 'dc' + id
 
  var a = ''
 
  var imgana = '<img class="imganna" src ="public/image/annonce/'+ dr+'/'+ imga +'"> '  
  var imganb = '<img class="imgannb" src ="public/image/annonce/'+ dr+'/' +imgb + '"> '  
 var imgfond = '  <img class="imgfondannonce" src="public/image/decor/' + imgfond + '"></img>' 

  var annont  = '<label class="annonceslab">' +text + '</label> '
  
if(avec)
 a = '<div class="annonces">' + imgfond+imgana+imganb+annont+ ' </div>'
   else
   a = '<div class="annonces">' + imgfond+annont+ ' </div>'
 
 return a ;



}
 


function updateNew(){


  if( New[0].display){
    
    
    $("#remerciment").css({
      //   'padding-left': '28%' ,
         'display':'block',
        
     }) ;
    $("#remercimentimg").attr("src", "public/image/acceuil/remerciment/" +  New[0].image) ;
    $("#descriptionremerc").text( New[0].texta)
  
  }
  else {
    $("#remerciment").css({
      //   'padding-left': '28%' ,
         'display':'none',
        
     }) ;
    
  }
 

  if( New[1].display){
    $("#newb").css({
      //   'padding-left': '28%' ,
         'display':'block',
        
     }) ;

    var tab =  textImgToTabA(New[1].image)
  $("#imgnewb").attr("src", "public/image/acceuil/remerciment/" +  tab[0]) ;
  $("#imgnewdes").attr("src", "public/image/acceuil/remerciment/" +  tab[1]) ;

  } else {
$("#newb").css({
      //   'padding-left': '28%' ,
         'display':'none',
        
     }) ;
  }



  
 
  
}

function textImgToTabA(imgg){

  var tabi = []

  for(var a = 0 ;a < 2 ; a++){
    var b  =  imgg.indexOf(',')

    var im = imgg.substring(0,b )
  
    tabi.push(im)

    imgg = imgg.substring(b + 1 )
  }
   
  return tabi 
}
function listeNew() {
  var result={};
  $.ajax({
    url:"/new",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}
function listePublication() {
 
 var result={};
 
 //var tab = ['/publicationrescent','/publication','/publicationrand','/publication']

// var i = parseInt(New[2].texta) 

// var pub 
 
// if(i==1)
 // pub = tab[0]
//else if(i==2)
//pub = tab[1]
//else if(i==3)
//pub = tab[2]
//else if(i==4)
//pub = tab[3]

$.ajax({
  url: '/publication',
  async: false,  
  success:function(data) {
     result = data; 
  }
});
return result;


}
function listeAnnonce() {
  var result={};
  $.ajax({
    url:"/annonce",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}


function listeClients() {
  var result={};
  $.ajax({
    url:"/client",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}


function clickContacterMoi(){
 
  $(".divannonceurcli").click(function(){

  
    var a = $(this).parent().index()/2

   
    $(".tabpubimgc").eq(a).css({
          
      '-webkit-transition': '.8s ease-in-out',
      'transition': '.8s ease-in-out ', 
  
      'transform': 'rotate(0deg)',

      '-ms-transform': 'translateX(-150%)',
      'transform': 'translateX(-150%)',
    
       
      }) ;
      $(".tabpubimgb").eq(a).css({
          
        '-webkit-transition': '.8s ease-in-out',
        'transition': '.8s ease-in-out ', 
    
        'transform': 'rotate(0deg)',
  
        '-ms-transform': 'translateX(-150%)',
        'transform': 'translateX(-150%)',
      
         
        }) ;

      $(".tabpubimgd").eq(a).css({
          
        '-webkit-transition': '.8s ease-in-out',
        'transition': '.8s ease-in-out ', 
    
        
        '-ms-transform': 'translateX(-150%)',
        'transform': 'translateX(-150%)',
      
         
        }) ;
        $(".tabpubimge").eq(a).css({
          
          '-webkit-transition': '.8s ease-in-out',
          'transition': '.8s ease-in-out ', 
      
          
          '-ms-transform': 'translateX(-100%)',
          'transform': 'translateX(-114%)',
        
           
          }) ;
  

          $(".divannonceurb").eq(a).css({
          
            '-webkit-transition': '4s ease-in-out',
            'transition': '4s ease-in-out ', 
        
            'opacity': '1',
          
           
             
            }) ;


  });

  
}
