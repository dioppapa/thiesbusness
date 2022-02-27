
 
  
 var curAnnonceIndex  = 0 ;
 


 
 


 var curAnnonceid = annonce[curAnnonceIndex].id

 var idannoceClient 
 
 var la =  annonce.length ;

  
 createTableAnnonce(la)
 
 cleackTableLinea()
 
 updateDetaila(annonce[0])
 

 validerannulerSupPAnnonce()
 
 //validerannulerSupCli()
 
 function validerannulerSupPAnnonce(){
  $('#inputvalidersupa').click(function(){
  
    if(curAnnonceid==1){
     alert('vous ne pouvez pas supprimer cette annonce')
    } else{
      supprimerUneAnnonce()
 
      $("#divalidersupa").css({
        'display': 'none', 
       
        }) ;
        curAnnonceIndex  = 0
    }
  
   
});
  $('#inputannulersupa').click(function(){
   
      $("#divalidersupa").css({
        'display': 'none', 
       
        }) ;
  });
  
 }
 function supprimerUneAnnonce(){

  
  $.ajax( {
                 
    type: 'GET',
    url: '/supprimerUneAnnonce?idc=' + idannoceClient +'&id=' + curAnnonceid   ,
    success: function(data){
      
    
    
      annonce = data
      la = annonce.length
   
      createTableAnnonce(la)
     
       updateDetaila(annonce [0])
cleackTableLinea()
 cssDivClient()
    }  
       
});
}

 function updateDetaila(data) {
 
  var tabi  = textImgToTabA( data.image)
  
 $('#textannonce').text(data.texta )
if(data.image.length> 3){
  $(".annimgadmi").css({
    'display': 'block',
   
    }) ;
  $('.annimgadmi').eq(0).attr('src', "public/image/annonce/dc" + data.idc +'/' +tabi[0]);
  $('.annimgadmi').eq(1).attr('src', "public/image/annonce/dc" + data.idc +'/' +tabi[1]);
  
}
else  {
  
  $(".annimgadmi").css({
    'display': 'none',
   
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
 
 function cherchera() {

   
     $('#idinputsercha').off()
     $('#idinputsercha').keyup(function(event){
 
       var a = $(this).val()
       chercherAnnonce( a)
        
    
     });
   

 }

 function curClientReturn(){

   return curClientid ;
 }

 function autocompla(data , chart){
   $('#serchtableapercu').html('')
   for( var a = 0 ; a < data.length ; a++){

var t = data[a].texta

var i = t.indexOf(chart)
var av = t.substring(i-22,i)
var ap = t.substring(i,i + 22)

    var tx = av + ap

   var client  = ' <span class="spant"> client  :</span>  <span class="spanv">' + textToSpan( data[a].idc.toString(), chart)  + ' </span>  </br>'
   
   var title = ' <span class="spant"> title :</span>  <span class="spanvv">' + textToSpan( data[a].title , chart) +'  </span> </br>'
   
   var text = '  <span class="spant"> texte :</span>  <span class="spanvv">' + textToSpan( tx , chart) +'  </span> '
   
   
   $('#serchtableapercu').append('<div class="divsercha"> ' + client + title + text +'  </div>' );
    
   }
 }
 function cssDivAutoCompla() {
   $(".divsercha").css({
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
     
     $(".divtexts").css({
   //  'position': 'relative',
     'border': '1px solid yellow',
    
    }) ;
     $(".spantt").css({
      'padding': '5%',
      'font-size': '8px',
      'font-style': 'normal',
      'float': 'left',
      'border': '1px solid red',
    //  'position': 'absolute',
      // '-ms-transform': 'translate(-50%, -50%)',
      //    'transform': 'translate(-50%, -50%)',
      
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
       'padding-left':'35px',
      
       
     }) ;
     $(".spanvvv").css({
      'border': '1px solid blue',
      'float': 'right',
    //  'width': '70%',
      'font-size': '8px',
      'font-style': 'italic',
      'font-weight': 'bold',
    //  'padding-left':'45px',
     
      
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
    
      $('.divsercha').hover(function(){
           
       var a = $(this).index()
       $(".divsercha").eq(a).css({
       
         'background-image': 'linear-gradient(#87cefa,white)',
     
            
       }) ;

       },function(){
         
         $(".divsercha").css({
       
           'background-image': 'linear-gradient(#c6ffec,white)',
           
              
         }) ;
     });
     
   
 }

 function textToSpan( text , chart) {
   var result
  
     result =   text.replace( chart, '<span class="mark">' + chart + '</span>')
    
    
    return result
   
 
  }
 
  function updateCssTableFromsercha( id , table) {
     
   var a = idToindex( id , table) + 1
   curAnnonceIndex = a
   curenntcsstaba( curAnnonceIndex)
       
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
 
 

 
  function divSearchClicka(data) {

   $(".divsercha").click(function(){
     curAnnonceid = data[$(this).index()].id
 
    
   updateDetaila( data[ $(this).index() ])
   $("#serchtableapercu").css({
     'display': 'none', 
    
     }) ;
     updateCssTableFromsercha( curAnnonceid , annonce)
     $('#idinputsercha').val('')

   });
  
  }
 
  

 
 
 function chercherAnnonce( a) {
   $.ajax( {
                
     type: 'GET',
     url: '/cherchera?p=' + a,
     success: function(data){

         autocompla(data,a)
        cssDivAutoCompla()
       divSearchClicka(data)
     }  
        
 });
 }
 
 

 function boutonControla() {
  $(document).off()
  $(document).keyup(function(event){

    

    var keycode = (event.keycode ? event.keycode:event.which) 
  
   if(keycode=='38'){
     
    if( curAnnonceIndex <=0)
    curAnnonceIndex = 0 ;
    else
    curAnnonceIndex --
  
   
    curenntcsstaba( curAnnonceIndex)

   updateDetaila(annonce[ curAnnonceIndex])
   curAnnonceid = annonce[curAnnonceIndex].id
   idannoceClient = annonce[curAnnonceIndex].idc
    

      
     }
    else if (keycode=='40'){
      if(curAnnonceIndex>=la-1)
      curAnnonceIndex= la-1
        else
        curAnnonceIndex ++
        
        curenntcsstaba( curAnnonceIndex)
      
      updateDetaila(annonce[ curAnnonceIndex])
      curAnnonceid = annonce[curAnnonceIndex].id
  
  
  }
  
   });

  }

 function validerannulerSupCli(){
  $('#inputvalidersup').click(function(){
  alert('suppression indefini')

  $(".pub").css({
    'display': 'block', 
   
    }) ;
    $("#divalidersup").css({
      'display': 'none', 
     
      }) ;
});
  $('#inputannulersup').click(function(){
    $(".pub").css({
      'display': 'block', 
     
      }) ;
      $("#divalidersup").css({
        'display': 'none', 
       
        }) ;
  });
  
 }
 
 function cleackTableLinea() {
 
   $('.tablelinea').click(function(){

     
  
     curAnnonceIndex = $(this).index() - 1
     
     curAnnonceid = annonce[curAnnonceIndex].id

     idannoceClient = annonce[curAnnonceIndex].idc
     

  updateDetaila(annonce[curAnnonceIndex])
  //alert('la')
  curenntcsstaba(curAnnonceIndex)
  
 
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


function curenntcsstaba(i) {

  $(".tablelinea").css({
      'background-image': '',
      'cursor':'pointer'
  }) ;

  $(".tablelinea").eq(i).css({
                  
      
          
      'background-image': 'linear-gradient(#87cefa,white)',
      'cursor':'pointer'
  }) ;

      
   
          }         

function createTableAnnonce(la) {

      
  $('.partimenu').eq(2).html('')
  $('.partimenu').eq(2).append('<table id="tabannonce"></table>')
  $('#tabannonce').append('<tr> <th>id</th> <th>client</th>  <th>text</th> <th> theme </th> <th> title </th>  <th> depuis le </th>   </tr>')
 

 for( var a = 0 ; a < la ; a++){
   
   $('#tabannonce').append('<tr class="tablelinea"> <td> ' + (a+1)+ ' </td>    <td> ' + annonce[a].idc+ ' </td>   <td> ' + annonce[a].texta+ ' </td>         <td> ' + annonce[a].theme+ ' </td>  <td> ' + annonce[a].title+ ' </td>  <td> ' + annonce[a].datep+ ' </td>      </tr>' );
    
 
}   
 

curenntcsstaba(0)

}  


