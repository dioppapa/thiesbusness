
 
  
 var curpubindex  = 0 ;
 


  
 
 

 var curpubid = pub[curpubindex].id
var idpubclient
 
 var lp =  pub.length ;

 //var tab = ["fruits et legumes","electromenager","elevage" , "bureatique", "cosmetique" , "vehecules" , "immobilier", "alimentaire" , "pièces détachées"]
  

createPubTable(lp)
 
 
cleackTableLinep()
 
 updateDetailp(pub[0])
 
 validerannulerSupPub()
 //validerannulerSupCli()
 
 function validerannulerSupPub(){
  $('#inputvalidersuppub').click(function(){
  
    if(idpubclient==1){
alert('vous ne pouvez pas supprimer cette publication')
    } else {
      supprimerUnePublication()
 
      $("#divalidersuppub").css({
        'display': 'none', 
       
        }) ;
        curPubindex = 0
    }
  
   
});
  $('#inputannulersuppub').click(function(){
   
      $("#divalidersuppub").css({
        'display': 'none', 
       
        }) ;
  });
  
 }
 
 function supprimerUnePublication(){

  
  $.ajax( {
                 
    type: 'GET',
    url: '/supprimerUnePublication?idc=' + idpubclient +'&id=' + curpubid   ,
    success: function(data){
      
    
      pub = data
      lp = pub.length
      createPubTable(lp)
       updateDetailp(pub[0])
cleackTableLinep()
 cssDivClient()
    }  
       
});
}

 function updateDetailp(data) {
   var tabimg = textImgToTab( data.image)
   
 $('.pubimgadmi').eq(0).attr('src', "public/image/publication/dc" + data.idc+"/" + tabimg[0]);
 $('.pubimgadmi').eq(1).attr('src', "public/image/publication/dc" + data.idc+"/" + tabimg[1]);
 $('.pubimgadmi').eq(2).attr('src', "public/image/publication/dc" + data.idc+"/" + tabimg[2]);
 $('.pubimgadmi').eq(3).attr('src', "public/image/publication/dc" + data.idc+"/" + tabimg[3]);
 $('.pubimgadmi').eq(4).attr('src', "public/image/publication/dc" + data.idc+"/" + tabimg[4]);

 
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


 function listePublication() {
  var result={};
  $.ajax({
    url:"/publication",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}
   function publicationToid( produit , i){
    var data = []
   
      for( var a = 0 ; a < produit.length ; a++){
  if(produit[a].idc==i)
        data.push(produit[a])
      }
     
      return data ;
  
  }
 
 function chercherp() {

   
     $('#idinputsercha').off()
     $('#idinputsercha').keyup(function(event){
 
       var a = $(this).val()
       if(a.length > 0) {
        var rega = /^[a-zA-Z0-9]+$/

        if(rega.test(a))
        chercherPub( a)
       } else {
        $('#serchtableapercu').css({
           'display':  'none',
         
      });
       }
    
    
     });
   

 }

 function curClientReturn(){

   return curClientid ;
 }

 function autocomplp(data , chart){
   $('#serchtableapercu').html('')
  
   for( var a = 0 ; a < data.length ; a++){
     var client  =    '<span class="spant"> client  :</span>   <span class="spanv"> ' + textToSpan( data[a].idc.toString(), chart) +' </span> </br>'
     var categorie  =    '<span class="spant"> categorie :</span>  <span class="spanvv">' + textToSpan( data[a].categorie, chart) +'  </span> </br> '
     var titre  =     '<span class="spant"> titre :</span>  <span class="spanvv">' + textToSpan( data[a].titre , chart) +'  </span> </div>'

   
   $('#serchtableapercu').append('<div class="divserch"> ' + client + categorie + titre +  '  </div>' );
  
   }
 }
 function cssDivAutoCompl() {
   $(".divserch,.divserchp  ,.divserchc , .divserchl , .divserchpa").css({
     'border-bottom': '1px solid blue' ,
     'padding-left':'15px',
     'cursor':'pointer',

     'background-image': 'linear-gradient(#c6ffec,white)',
     
        
   }) ;
   $("#serchtableapercu").css({
     'display': 'block',
     'padding-top':'50px',
     }) ;
     $(".spant").css({
       'font-size': '8px',
       'font-style': 'normal',
       
       
     }) ;
     $(".spantv").css({
       'font-size': '9px',
       'font-style': 'normal',
       
       
     }) ;

     $(".spanv").css({
       'font-size': '10px',
       'font-style': 'italic',
       'font-weight': 'bold',
       'padding-left':'15px',
       
     }) ;
     $(".spanvv").css({
               
       'font-size': '11px',
       'font-style': 'italic',
       'font-weight': 'bold',
       'padding-left':'45px',
      
       
     }) ;
     $(".spanvc").css({
               
       'font-size': '12px',
       'font-style': 'italic',
       'font-weight': 'bold',
       'padding-left':'2px',
       'padding-right':'5px',
      
       
     }) ;
     $(".mark").css({
          'color':'blue',
      
      }) ;
    
      $('.divserch').hover(function(){
           
       var a = $(this).index()
       $(".divserch").eq(a).css({
       
         'background-image': 'linear-gradient(#87cefa,white)',
     
            
       }) ;

       },function(){
         
         $(".divserch").css({
       
           'background-image': 'linear-gradient(#c6ffec,white)',
           
              
         }) ;
     });
     
   
 }

 function textToSpan( text , chart) {
   var result
  
     result =   text.replace( chart, '<span class="mark">' + chart + '</span>')
    
    
    return result
   
 
  }
 
  function updateCssTableFromserchp( id , table) {
     
   var a = idToindex( id , table) + 1
   curpubindex = a
   curenntcsstabp( curpubindex)
       
 }

 
 
 function idToindex( id , table) {
 
   var index = 0 ;
 
   for( var a = 0 ; a < table.length ; a++){
     if( table[a].id == id)
     index = a 
 
 }
     
    return index - 1;
  
   
 }

 
 function supprimerClient() {
 
 
   $.ajax( {
                  
     type: 'GET',
     url: '/supprimerUnClient?client=' + curClientid,
     success: function(data){
       var index  = idToindex( curClientid , tableDonne)
 
       tableDonne.splice(index, 1)
       
       $('table .tableline').eq(index + 1).remove()
       curClientindex = 0

      
     }  
        
 });
 
 }
 
 

 
  function divSearchClickp(data) {

   $(".divserch").click(function(){
     curpubid = data[$(this).index()].id
 
    
   updateDetailp( data[ $(this).index() ])
   $("#serchtableapercu").css({
     'display': 'none', 
    
     }) ;
     updateCssTableFromserchp(curpubid , pub)
     $('#idinputsercha').val('')

   });
  
  }
 
  

 
 
 function chercherPub( a) {
   $.ajax( {
                
     type: 'GET',
     url: '/cherchp?p=' + a,
     success: function(data){
         autocomplp(data,a)
        cssDivAutoCompl()
        divSearchClickp(data)
     }  
        
 });
 }
 
 

 function boutonControlp() {
   $(document).off()
   $(document).keyup(function(event){
 
    var keycode = (event.keycode ? event.keycode:event.which) 
   
    if(keycode=='38'){
     if( curpubindex <=0)
     curpubindex = 0 ;
     else
     curpubindex --
   
    
     curenntcsstabp( curpubindex)
 
    updateDetailp(  pub[ curpubindex])
    curpubid =  pub[curpubindex].id
    
    idpubclient = pub[curPubindex].idc

       
      }
     else if (keycode=='40'){
       if(curpubindex>=lp-1)
       curpubindex = lp-1
         else
         curpubindex ++
         
         curenntcsstabp( curpubindex)
       
       updateDetailp( pub[ curpubindex])
       curpubid = pub[curpubindex].id
       idpubclient = pub[curPubindex].idc

   
   }
 
    });
   
   
 }

 
 
 function cleackTableLinep() {
 
   $('.tablelinep').click(function(){

    
     curPubindex = $(this).index() - 1
     
     curpubid = pub[curPubindex].id

     idpubclient = pub[curPubindex].idc

    

  updateDetailp (pub[curPubindex])
  curenntcsstabp(curPubindex)
  
 
});

   
 }




function tableDonneInitial() {
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


function curenntcsstabp(i) {

  $(".tablelinep").css({
      'background-image': '',
      'cursor':'pointer'
  }) ;

  $(".tablelinep").eq(i).css({
                  
      
          
      'background-image': 'linear-gradient(#87cefa,white)',
      'cursor':'pointer'
  }) ;

      
   
          }         

function createPubTable(lp) {

      
  $('.partimenu').eq(1).html('')
  $('.partimenu').eq(1).append('<table id="tabpub"></table>')
  $('#tabpub').append('<tr> <th>id</th> <th> categorie</th>  <th> titre </th>    <th> depuis le</th>  </tr>')
 

 for( var a = 0 ; a < lp ; a++){
   
   $('#tabpub').append('<tr class="tablelinep"> <td> ' + (a+1)+ ' </td>    <td> ' + pub[a].categorie   + ' </td>   <td> ' + pub[a].titre+ ' </td>   <td> ' + pub[a].datep+ ' </td>      </tr>' );
    
 
}   
 
curenntcsstabp(0)
 


}  


