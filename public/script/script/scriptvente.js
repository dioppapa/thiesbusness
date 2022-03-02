var tab = ["fruits et legumes","electromenager","elevage" , "bureatique", "cosmetique" , "vehecules" , "immobilier", "alimentaire" , "pièces détachées"]

clickProduit()

var vente = listerTousVente()

var fruietlegume = venteToGategori( vente , 1)
var electromenager = venteToGategori( vente , 2)

var elevage = venteToGategori( vente , 3)
var bureatique = venteToGategori( vente , 4)

var cosmetique = venteToGategori( vente , 5)

var voiture = venteToGategori( vente , 6)

var immobilier = venteToGategori( vente , 7)
var alimentaire = venteToGategori( vente , 8)
var piece = venteToGategori( vente , 9)





function createTabVenteDetail( data){
  $('#detailglobalcontact').remove()
  $('.rowb').remove()
  $('.rowb').html('')
  $('#divventeb').append( '<div class="rowb"></div>')

 for( var a = 0  ; a < data.length;a++)
  
  $('.rowb').append( createHtmlClomn(data[a]))
  
 
 if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
  cssClumnVentebResponse()
  cssClumnResponse()
 } else {
 
  cssClumnVenteb()
  cssClumn()
}
  clickContacterMoiVente()

}




function createHtmlClomn(data){

  var dir = 'dc' + data.idc

  
  var divlab = '<div class="divlab"><label class="divlaba">contacter</label><label class="divlabb">' + data.prix + ' F</label> <label class="divlabbb" style="display: none;">' + data.idc + ' </label>   </div>'
 var clonne = '<div class="columnb"> <div class="cardb"> <img class="icon-wrapperb" src ="public/image/vente/' + dir + '/' +data.image + '"></img>'+ divlab+ '</div></div>'  
    

  return clonne

    }

      
    function venteToGategori( vente , i){
      var data = []
        for( var a = 0 ; a < vente.length ; a++){
     if(vente[a].categorie.localeCompare(tab[i-1])==0)
          data.push(vente[a])
        }
 
        return data ;

    }
    function idToProduit( vente , id){
     
        for( var a = 0 ; a < vente.length ; a++){
     if(vente[a].id==id)
     return vente[a]

        }
 
       
    }

    function idToIndex( vente , id){
     
      for( var a = 0 ; a < vente.length ; a++){
   if(vente[a].id==id)
   return a

      }

     
  }

    function listerTousVente() {
      var result={};
      $.ajax({
        url:"/vente",
        async: false,  
        success:function(data) {
           result = data; 
        }
     });
     return result;
    }
   
    function createContactDetail( img , prix  , client){
      $('#detailglobalcontact').remove()
     var divdetail =  createHtmlContacDetail(img , prix , client)
      $('#divventeb').append(divdetail)
       if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
        
        cssDetailContactResponse()
       } else {
       
        cssDetailContact()
      } 
    }
    function createHtmlContacDetail(img , prix , client){
     // var divdetailimage = '<div id="imgcntactdet"> <img class="icon-wrapperb" src ="public/image/vente/' + dir + '/' +data.image + '"></img> <label id="detailpri"> 10000f</label>   </div>'
     // var clonne = '<div class="columnb"> <div class="cardb"> <img class="icon-wrapperb" src ="public/image/vente/' + dir + '/' +data.image + '"></img>'+ divlab+ '</div></div>'  
    
     var dir = 'dc' + client.id
 
    
    
    var divanonca = ' <div class="divannonceura"> <label class="contactermoi">contacter moi</label> <div id="divteletemailcontactd">   <label class="annonceurtel">  Tel  : <span class="spananonce"> '+ client.tel +' </span> </label> </br>   <label class="annonceuremail"> Email : <span class="spananonce"> '+ client.email +' </span>  </label> </div>    </div>'
   // var divanonca = ' <div class="divannonceura"> <label class="contactermoi">contacter moi</label> <div id="divteletemailcontactd">   <label class="annonceurtel">  Tel  : <span class="spananonce"> '+ client.tel +' </span> </label> </br>   <label class="annonceuremail"> Email : <span class="spananonce"> papapvjjcjeckipap@gvfgdjh.fr </span>  </label> </div>    </div>'
   
    var reseau = '<div class="reseauad" ><img class="imgrfd"  src="public/image/acceuil/facebook.png"></img><img class="imgrtd"   src="public/image/acceuil/twitter.png"></img><img class="imgrid"   src="public/image/acceuil/insta.png"></img> <img class="imgrmd"   src="public/image/acceuil/messenger.png"></img></div>'
  
    var divanoncb = '<div class="annoncpd"> <img class="imgannonced"   src="public/image/profile/' + client.img + '" ></img> </br>   <label class="annoncnomd"> '+ client.prenom +' '+  client.nom  +' </label> </div>'
   
 
 //   var divc = '<div class="divannonceurcli"> <label class="labcontactmoi"> contacter moi </label> </div>'
  
    var annonceur = '<div class="divannonceurb"> '+ divanonca + reseau + divanoncb+  ' </div>'
 
  


      var divdetailimage = '<div id="imgcntactdet"> <img id="pcontactdet" src ="' + img + '"></img>  <label id="detailpri"> prix ' + prix + '</label>   </div>'
    
      var divdetailclient = '<div id="clientctcdetail">' + annonceur + '  </div>'
    
      var divdetailglobal = '<div id="detailglobalcontact"> ' + divdetailimage + divdetailclient + ' </div>'
    
    return divdetailglobal ;
    }
  
    function clickContacterMoiVente(){
       $(".divlaba").click(function(){
      //  var a = $(this).parent().parent().parent().index()
        var a =  $(this).parent().parent().parent().index()
      
        var b = $(".divlabbb").eq(a).text()

        var imgsrc = $(".icon-wrapperb").eq(a).attr('src')
        var prix = $(".divlabb").eq(a).text()
      
        
      
        var cli = pubToIdclient( client , b)

    
        
        $(".rowb").css({
          'display': 'none',
          
               });
        
               createContactDetail(imgsrc , prix ,cli)
         
              

               if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
                cssReseaudetailResponse()

               } else {
               
                cssReseaudetail()

              }
             //  cssannoncp()
           //    cssannonceur()
      }) ;

    }

    function produiToclient( vente , id){

      var data = {}
      for( var a = 0 ; a < vente.length ; a++){
        if( vente[a].id==id)
           data = clients[a]
      }
      return data
    }
      
    

   function clickProduit(){

   





    $(".column").click(function(){
      var a = $(this).index()

      if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
        cssUpdateItemMenuResonse(a)
        } else {
        
          cssUpdateItemMenu(a)
       }
      
      if(a==0){
        createTabVenteDetail(fruietlegume)
      
      }
      else if(a==1){
        createTabVenteDetail( electromenager)

      }
      else if(a==2){
        createTabVenteDetail( elevage)

      }
      else if(a==3){
        createTabVenteDetail( bureatique)

      }
      else if(a==4){
        createTabVenteDetail( cosmetique)

      }
      else if(a==5){
        createTabVenteDetail( voiture)

      }
      else if(a==6){
        createTabVenteDetail( immobilier)
   
      }
      else if(a==7){
      
       createTabVenteDetail( alimentaire)

      }
      else if(a==8){
       createTabVenteDetail( piece)
       
      }
      

      $('#divvente').css({
        //      'border':'1px solid #00ffff',
            'display': 'none',
         

          }) ;
        
      $('#divventeb').css({
        //      'border':'1px solid #00ffff',
            'display': 'block',
         

          }) ;
        


        }) ;

      }
  
        
  
  