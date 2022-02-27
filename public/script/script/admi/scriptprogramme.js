
  
 var  curProgrammeIndex = 0 ;
 

 

 var curProgrammeId = programme[curProgrammeIndex].id

 
 var lprog =  programme.length ;


 var va = false
var vb = false
var vc = false
var vd = false
var ve = false
var vf = false
var verifiepro = false

 
  
 createTableProgramme(lprog) 
 
 cleackTableLineprogr()
 validerInputLoginProgr()
 clickSaveDansBase()
 validerannulerSupProg()
 //updateDetailpr(projet[0])
 updateDetailprogram(programme[0])
 
 //validerannulerSupCli()

 function updateDetailpr(data) {
 
  
    var tabimg = textImgToTab( data.image)
    
    $('#spantitle').text(data.typep)
    $('.proimgadmi').eq(0).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[0]);
    $('.proimgadmi').eq(1).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[1]);
    $('.proimgadmi').eq(2).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[2]);
    $('.proimgadmi').eq(3).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[3]);
    $('.proimgadmi').eq(4).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[4]);
   
    
 
 }
 function validerInputLoginProgr(){
 
  
  $('#objeti').keyup( function () {

    var  passe = $(this).val()

 
      if( passe.length >= 3 &&  passe.length <= 14 && /^[a-zA-Z0-9]+$/.test(passe) && /[a-z0-9]/.test(passe)){
        va = true
      
      }
      else {
        va = false
       
      }
     greenValiderProg()
    });

    $('#objectifi').keyup( function () {

      var  passe = $(this).val()
  
     
        if( passe.length >= 3 &&  passe.length <= 214 && /^[a-zA-Z0-9\n\t]+$/.test(passe) ){
          vb = true
          
        }
        else {
          vb = false
         
        }
       
       greenValiderProg()
      });

      $('#avantagei').keyup( function () {

        var  passe = $(this).val()
    
     
          if( passe.length >= 3 &&  passe.length <= 210 && /^[a-zA-Z0-9]+$/.test(passe)){
            vc = true
           
          }
          else {
            vc = false
            
          }
          greenValiderProg()
        });

        $('#remercimenti').keyup( function () {

          var  passe = $(this).val()
      
       
            if( passe.length >= 3 &&  passe.length <= 210 && /^[a-zA-Z0-9]+$/.test(passe) && /[a-z0-9]/.test(passe)){
              vd = true
             
            }
            else {
              vd = false
              
            }
            greenValiderProg()
          });
          $('#datei').keyup( function () {

            var  passe = $(this).val()
        
         
              if( passe.length >= 3 &&  passe.length <= 100 && /^[a-zA-Z0-9]+$/.test(passe) ){
                ve = true
                
              }
              else {
                ve = false
                
              }
              greenValiderProg()
            });

            $('#lieui').keyup( function () {

              var  passe = $(this).val()
          
           
                if( passe.length >= 3 &&  passe.length <= 100 && /^[a-zA-Z0-9]+$/.test(passe) ){
                  vf = true
                 
                }
                else {
                  vf = false
                  
                }
                greenValiderProg()
              });

          

}

 function greenValiderProg(){
  if(va==true && vb == true && vc == true && vd == true && ve == true && vf == true ){
  
     verifiepro =true
     $('#ajouterprogramme').css({
         'display':  'block',
      });
      $('#ajouterprogrammel').css({
        'display':  'none',
     });
    
  }
  else {
    $('#ajouterprogramme').css({
      'display':  'none',
   });
   $('#ajouterprogrammel').css({
    'display':  'inline',
 });
 verifiepro = false
  }
 
}


 function ajouterProgramme(){
  $('#tabapercuaprogram').css({
    'display':  'block',
 });
 $(".partimenu").eq(4).css({
           
  
  'width': '72%' , 
 
  }) ;

  $("#tabprogr").css({
            'width': '96%' ,
            'margin': '1%' , 
   
    }) ;
 $("#tabapercu,#tabapercupub,#tabapercuann,#tabapercupr").css({
   'display':  'none',
}); 
}
function reInitDivProgramme(){
  
   $('#objeti').val('')
    $('#objectifi').val('')
   $('#avantagei').val('')
    $('#remercimenti').val('')
    $('#datei').val('')
    $('#lieui').val('')

  
   
   $('#ajouterprogramme').css({
    'display':  'none',
 });
 $('#ajouterprogrammel').css({
  'display':  'inline',
});


$('#tabapercuaprogram').css({
  'display':  'none',
});

$(".partimenu").eq(4).css({
           
  
  'width': '100%' , 
 
  }) ;

  $("#tabprogr").css({
            'width': '96%' ,
            'margin': '1%' , 
   
    }) ;




  }
 
function clickSaveDansBase(){
  $('#ajouterprogramme').click(function(){
    
    var objet = $('#objeti').val()
    var objectif = $('#objectifi').val()
    var avantage = $('#avantagei').val()
    var remerciment = $('#remercimenti').val()
    var date = $('#datei').val()
    var lieu = $('#lieui').val()
 
   
    $.ajax( {
                          
     type: 'GET',
     url: '/savedansbaseprogr?objet=' + objet  + '&objectif=' + objectif   + '&avantage=' +   avantage   + '&remerciment=' +   remerciment + '&date=' +   date + '&lieu=' +   lieu  ,
     success: function(data){
       
       programme = data
       lprog = programme.length
       createTableProgramme(lprog)
 
       cleackTableLineprogr()
      cssDivClient()
  reInitDivProgramme()
     }  
        
 });
      
   });
 }

 function validerannulerSupProg(){
  $('#inputvalidersupprog').click(function(){
  
    if( curProgrammeId==1){
      alert('vous ne pouvez pas supprimer ce programme')
    } else {
      supprimerProgramme()
 
      $("#tabapercuaprogsup").css({
        'display': 'none',
    }) ;
    curProgrammeIndex = 0
    }
  
   

});
  $('#inputannulersupprog').click(function(){
   
     

        $("#tabapercuaprogsup").css({
          'display': 'none',
      }) ;

      $(".partimenu").eq(4).css({
   

        'width': '100%' , 
       
        }) ;
  });
  
 }
 function updateDetailprogram(data){
 
  
  
  $('#objets').text(data.objet) 
  $('#objectifs').text(data.objectif)
  $('#avantages').text(data.avantage)
  $('#remerciments').text(data.remerciment)
  $('#dates').text(data.etdate)
  $('#lieus').text(data.lieu)
 
  

}
 function supprimerProgramme(){
   
  $.ajax( {
                         
    type: 'GET',
    url: '/supprimerProgramme?id=' + curProgrammeId  ,
    success: function(data){
      
    
      programme = data
       lprog = programme.length
       createTableProgramme(lprog)
 
       cleackTableLineprogr()
      cssDivClient()
  reInitDivProgramme()
    }  
       
});
}


   function publicationToid( produit , i){
    var data = []
   
      for( var a = 0 ; a < produit.length ; a++){
  if(produit[a].idc==i)
        data.push(produit[a])
      }
     
      return data ;
  
  }
 
 function chercherpro() {

   
     $('#idinputsercha').off()
     $('#idinputsercha').keyup(function(event){
 
       var a = $(this).val()
       chercherProjet( a)
        
    
     });
   

 }

 function curClientReturn(){

   return curClientid ;
 }

 function autocomplpro(data , chart){
   $('#serchtableapercu').html('')
   for( var a = 0 ; a < data.length ; a++){
    var t = data[a].description

    var i = t.indexOf(chart)
    var av = t.substring(i-22,i)
    var ap = t.substring(i,i + 22)
    
        var tx = av + ap

   var type = '<span class="spant"> nature  :</span>  <span class="spanv">'   + textToSpan( data[a].typep, chart) +' </span>  </br>'
   var descrip = '<span class="spant"> description  :</span>  <span class="spanv">'   + textToSpan( tx , chart) +' </span>  </br>'
   var datelieu = '<span class="spant"> date et lieu  :</span>  <span class="spanv">'   + textToSpan( data[a].dateetlieu, chart) +' </span>  </br>'

  
   $('#serchtableapercu').append('<div class="divserchpro">' + type + descrip + datelieu + ' </div>' );
  
   }
 }
 function cssDivAutoComplpro() {
   $(".divserchpro").css({
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
    
      $('.divserchpro').hover(function(){
           
       var a = $(this).index()
       $(".divserch").eq(a).css({
       
         'background-image': 'linear-gradient(#87cefa,white)',
     
            
       }) ;

       },function(){
         
         $(".divserchpro").css({
       
           'background-image': 'linear-gradient(#c6ffec,white)',
           
              
         }) ;
     });
     
   
 }

 function textToSpan( text , chart) {
   var result
  
     result =   text.replace( chart, '<span class="mark">' + chart + '</span>')
    
    
    return result
   
 
  }
 
  function updateCssTableFromserchpro( id , table) {
     
   var a = idToindex( id , table) + 1
   curProjetIndex = a
   curenntcsstab( curProjetIndex)
       
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
 
 

 
  function divSearchClickpro(data) {

   $(".divserchpro").click(function(){
     curProjetId = data[$(this).index()].id
 
    
   updateDetailpr( data[ $(this).index() ])
   $("#serchtableapercu").css({
     'display': 'none', 
    
     }) ;
     updateCssTableFromserchpro(curProjetId , projet)
     $('#idinputsercha').val('')

   });
  
  }
 
  

 
 
 function chercherProjet( a) {
   $.ajax( {
                
     type: 'GET',
     url: '/chercherpro?p=' + a,
     success: function(data){
        autocomplpro(data,a)
        cssDivAutoComplpro()
      divSearchClickpro(data)
     }  
        
 });
 }
 
 

 function boutonControlprogr() {
   $(document).off()
   $(document).keyup(function(event){
 
     
 
     var keycode = (event.keycode ? event.keycode:event.which) 
   
    if(keycode=='38'){
     if( curProgrammeIndex <=0)
     curProgrammeIndex = 0 ;
     else
     curProgrammeIndex --
   
    
     curenntcsstabprogr( curProgrammeIndex)
 
     updateDetailprogram(programme[curProgrammeIndex])
 
    curProgrammeId = programme[curProgrammeIndex].id
 
       
      }
     else if (keycode=='40'){
       if(curProgrammeIndex>= lprog -1)
       curProgrammeIndex=  lprog -1
         else
         curProgrammeIndex ++
         
         curenntcsstabprogr( curProgrammeIndex)
       
         updateDetailprogram(programme[curProgrammeIndex])

       curProgrammeId = programme[curProgrammeIndex].id
   
   
   }
   
    });
   
   
 }

 
 function cleackTableLineprogr() {
 
   $('.tablelineprogr').click(function(){

     
  
     curProgrammeIndex = $(this).index() - 1
     
     curProgrammeId = programme[curProgrammeIndex].id

     

     updateDetailprogram(programme[curProgrammeIndex])
 
  curenntcsstabprogr( curProgrammeIndex)
  
 
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


function curenntcsstabprogr(i) {

  $(".tablelineprogr").css({
      'background-image': '',
      'cursor':'pointer'
  }) ;

  $(".tablelineprogr").eq(i).css({
                  
      
          
      'background-image': 'linear-gradient(#87cefa,white)',
      'cursor':'pointer'
  }) ;

      
   
          }         

function createTableProgramme(lprog) {

      
  $('.partimenu').eq(4).html('')
  $('.partimenu').eq(4).append('<table id="tabprogr"></table>')
  $('#tabprogr').append('<tr> <th>id</th> <th> objet</th>  <th> objectif</th>    <th> avantage </th> <th> remerciment </th> <th> date </th>  <th> lieu </th> </tr>')
 

 for( var a = 0 ; a < lprog ; a++){
   
   $('#tabprogr').append('<tr class="tablelineprogr"> <td> ' + (a+1)+ ' </td>    <td> ' + programme[a].objet+ ' </td>   <td> ' +  programme[a].objectif+ ' </td>   <td> ' + programme[a].avantage+ ' </td> <td> ' + programme[a].remerciment+ ' </td>   <td> ' + programme[a].etdate+ ' </td>  <td> ' + programme[a].lieu+ ' </td>  </tr>' );
    
 
}   
 

curenntcsstabprogr(0)

}  


