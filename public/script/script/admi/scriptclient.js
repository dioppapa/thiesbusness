
 
  
 var curClientindex  = 0 ;
 var curParti  = 1 ;



 var client = {}
 
 var pub = listePublication()
 var annonce = listeAnnonce()
 var projet = listeTousProjets()
 var programme = listeTousProgramme()

 var idee = listeTousIdee()
 client = tableDonneInitial()
 

 var curClientid = client[curClientindex].id

 
 var l =  client.length ;


  
 createTableClient(l)
 
 cleackTableLine()
 
 updateDetail(client[0])
 boutonControl()
 chercher()
 validerannulerSupCli()
 
 
 
 function supprimerUnClient(){

  
  $.ajax( {
                 
    type: 'GET',
    url: '/supprimerUnClient?id=' + curClientid   ,
    success: function(data){
     
      client = data
      l = client.length
      createTableClient(l)
     
      updateDetail(client[0])
       
cleackTableLine()
 cssDivClient()
    }  
       
});
}

 function updateDetail(data) {
 
  
  $('#nomprenom').text(data.prenom +' '+ data.nom  )

$('#imgapercu').attr('src', "public/image/profile/" + data.img);
var publicationClient = publicationToid( pub , data.id)
var annonceClient = publicationToid( annonce , data.id)

   var   publength = publicationClient.length
   var   annoncelength = annonceClient.length
   $('.spanap').eq(0).text( publength)
 
    $('.spanap').eq(1).text(  annoncelength )
 
 
 }
 function listeTousIdee() {
  var result={};
  $.ajax({
    url:"/idee",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}
 
 function listeTousProjets() {
  var result={};
  $.ajax({
    url:"/projet",
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
 
 function chercher() {

   
     $('#idinputsercha').off()
     $('#idinputsercha').keyup(function(event){
 
       var a = $(this).val()
       chercherClient( a)
        
    
     });
   

 }

 function curClientReturn(){

   return curClientid ;
 }

 function autocompl(data , chart){
   $('#serchtableapercu').html('')
   for( var a = 0 ; a < data.length ; a++){
   
   $('#serchtableapercu').append('<div class="divserch">     <span class="spant"> nom  :</span>  <span class="spanv">'   + textToSpan( data[a].nom, chart) +' ' + textToSpan( data[a].prenom , chart) +' </span>  </br>  <span class="spant"> email :</span>  <span class="spanvv">' + textToSpan( data[a].email , chart) +'  </span> </div>' );
  
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
 
  function updateCssTableFromserch( id , table) {
     
   var a = idToindex( id , table) + 1
   curClientindex = a
   curenntcsstab( curClientindex)
       
 }

 
 
 function idToindex( id , table) {
 
   var index = 0 ;
 
   for( var a = 0 ; a < table.length ; a++){
     if( table[a].id == id)
     index = a 
 
 }
     
    return index - 1;
  
   
 }

 
 
 
  function divSearchClick(data) {

   $(".divserch").click(function(){
     curClientid = data[$(this).index()].id
 
    
   updateDetail( data[ $(this).index() ])
   $("#serchtableapercu").css({
     'display': 'none', 
    
     }) ;
     updateCssTableFromserch(curClientid , client)
     $('#idinputsercha').val('')

   });
  
  }
 
  

 
 
 function chercherClient( a) {
   $.ajax( {
                
     type: 'GET',
     url: '/lister?p=' + a,
     success: function(data){
         autocompl(data,a)
        cssDivAutoCompl()
        divSearchClick(data)
     }  
        
 });
 }
 
 

 function boutonControl() {
   $(document).off()
   $(document).keyup(function(event){
 
     
 
     var keycode = (event.keycode ? event.keycode:event.which) 
   
    if(keycode=='38'){
     if( curClientindex <=0)
     curClientindex = 0 ;
     else
     curClientindex --
   
    
     curenntcsstab( curClientindex)
 
    updateDetail(client[ curClientindex])
    curClientid = client[curClientindex].id
 
       
      }
     else if (keycode=='40'){
       if(curClientindex>=l-1)
       curClientindex= l-1
         else
         curClientindex ++
         
         curenntcsstab( curClientindex)
       
       updateDetail(client[ curClientindex])
       curClientid = client[curClientindex].id
   
   
   }
   
    });
   
   
 }

 function validerannulerSupCli(){
  $('#inputvalidersup').click(function(){
  
  if(curClientid==1){
alert('vous ne pouvez pas supprimer ce client')
  }else{
    supprimerUnClient()
    $(".pub").css({
      'display': 'block', 
     
      }) ;
      $("#divalidersup").css({
        'display': 'none', 
       
        }) ;
        curClientindex =0
  }
 
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
 
 function cleackTableLine() {
 
   $('.tableline').click(function(){

     
  
     curClientindex = $(this).index() - 1
     
     curClientid = client[curClientindex].id

     

  updateDetail(client[curClientindex])
  curenntcsstab(curClientindex)
  
 
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


function curenntcsstab(i) {

  $(".tableline").css({
      'background-image': '',
      'cursor':'pointer'
  }) ;

  $(".tableline").eq(i).css({
                  
      
          
      'background-image': 'linear-gradient(#87cefa,white)',
      'cursor':'pointer'
  }) ;

      
   
          }         

function createTableClient(l) {

      
  $('.partimenu').eq(0).html('')
  $('.partimenu').eq(0).append('<table id="tabclient"></table>')
  $('#tabclient').append('<tr> <th>id</th> <th>nom</th>  <th>prenom</th>    <th>tel</th>  <th>email</th> <th>inscrit le</th></tr>')
 

 for( var a = 0 ; a < l ; a++){
   
   $('#tabclient').append('<tr class="tableline"> <td> ' + (a+1)+ ' </td>    <td> ' + client[a].nom+ ' </td>   <td> ' + client[a].prenom+ ' </td>   <td> ' +client[a].tel+ ' </td>    <td> ' +client[a].email+ ' </td>    <td> ' +client[a].datei+ ' </td>  </tr>' );
    
 
}   
 

curenntcsstab(0)

}  

function listeTousProgramme() {
  var result={};
  $.ajax({
    url:"/programme",
    async: false,  
    success:function(data) {
       result = data; 
    }
 });
 return result;
}
