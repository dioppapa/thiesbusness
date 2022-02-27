
 
  
 var  curProjetIndex = 0 ;
 


 var lpr =  projet.length ;


 var curProjetId = projet[curProjetIndex].id

 
var vtype = false
var vdes = false
var vdate = false
var vlieu = false
var verifiep = false

var vimga = false
var vimgb = false
var vimgc = false
var vimgd = false
var vimge = false

var nompa , nompb , nompc , nompd , nompe ;

 createTableProjet(lpr)
 
 
 updateDetailpr(projet[0])
 
 clickModifierImage()
 validerInputLoginProjet()
 clickAjouterProjet()
 validerannulerSupProjet()
 //validerannulerSupCli()

 function reInitDivProjet(){
  $('#namepublicationi').val('')
   $('#despublicationi').val('')
  $('#datepublicationi').val('')
   $('#lieupublicationi').val('')

  
   $(".unitepubimage").eq(0).attr('src', "public/image/logo/1.png" ) ;
   $(".unitepubimage").eq(1).attr('src', "public/image/logo/2.png" ) ;
   $(".unitepubimage").eq(2).attr('src', "public/image/logo/3.png") ;
   $(".unitepubimage").eq(3).attr('src', "public/image/logo/4.png" ) ;
   $(".unitepubimage").eq(4).attr('src', "public/image/logo/5.png"  ) ;
 
   $('#validerChangement').css({
    'display':  'none',
 });
 $('#validerChangementl').css({
  'display':  'inline',
});


$('#tabapercuapr').css({
  'display':  'none',
});
$('#tabapercupr').css({
  'display':  'block',
});





  }
 
 function clickAjouterProjet(){
  $('#validerChangement').click(function(){
   var type = $('#namepublicationi').val()
   var des = $('#despublicationi').val()
   var date = $('#datepublicationi').val()
   var lieu = $('#lieupublicationi').val()

   var image = nompa +"," + nompb +","+nompc +"," + nompd +","+ nompe +","

   $.ajax( {
                         
    type: 'GET',
    url: '/savedansbaseprojet?type=' + type  + '&des=' + des   + '&date=' +   date   + '&lieu=' +   lieu + '&image=' +   image  ,
    success: function(data){
      
    
      projet = data
      lpr = projet.length
      createTableProjet(lpr)
      updateDetailpr(projet[0])
cleackTableLinepro()
 cssDivClient()
 reInitDivProjet()
    }  
       
});
     
  });
}

function validerannulerSupProjet(){
  $('#inputvalidersuppr').click(function(){
  
    if( curProjetId ==1){
     alert('vous ne pouvez pas supprimer ce projet')
    }
    else {
      supprimerUnProjet()
 
      $("#divalidersuppr").css({
        'display': 'none', 
       
        }) ;
        curProjetIndex = 0
    }
  
    
});
  $('#inputannulersuppr').click(function(){
   
      $("#divalidersuppr").css({
        'display': 'none', 
       
        }) ;
  });
  
 }
function supprimerUnProjet(){
 
  $.ajax( {
                 
    type: 'GET',
    url: '/supprimerUnProjet?id=' + curProjetId   ,
    success: function(data){
      
    
      projet = data
      lpr = projet.length
      createTableProjet(lpr)
      updateDetailpr(projet[0])
cleackTableLinepro()
 cssDivClient()
 reInitDivProjet()
    }  
       
});
}

function clickModifierImage(){
  $('.buttonmodifie').click(function(){
    var i = $(this).parent().index()
    
   $("#myForm").remove()
    
    
   $("#divselectionp").append('<form  id = "myForm" action ="/upload" method="POST" enctype="multipart/form-data">  <input class="divajouter" type="file" name="files"   id="file" style="display: none;">    </input>   <input type="submit"  id="submite"  value="valider"  style="display:none;"></input>  </form>')
    

   $('#file').click()
   inputFileChanged(i)
 
    
  });
}

function inputFileChanged(i){
  $("#file").change(function(){
    uploadImageTemporel(i)
      $("#submite").click()
    
     
    });

    
}

function uploadImageTemporel(i) {
  $("#myForm").submit(function (e) {
  
    e.preventDefault();
    var formData = new FormData(this);
    var n =  $("#file").val()

    
    var b  =  n.lastIndexOf('\\')

    var name = n.substring(b + 1)
  
    $.ajax({
        type: "POST",
        url: "/upload?temporel=vrai&name="+ name,
        data: formData,
    
      
        processData: false,
        contentType: false,
        success: function(r){
   
           
   
    $(".unitepubimage").eq(i).attr('src', "public/image/temporel/" + r) ;
   if(i==0){
   
      nompa = r
      vimga = true
   }
   
   else if (i==1){
    vimgb = true
    nompb = r
   }
   
   else if (i==2){
    vimgc = true
    nompc = r
   }
   
   else if (i==3){
    vimgd = true
    nompd = r
   }
   
   else if (i==4) {
    vimge = true
    nompe = r
   }
   


   greenValiderP()

    $("#file").val('')
    

         },
        error: function (e) {
            
        }
    });

});

}






 function validerInputLoginProjet(){
 
  
  $('#namepublicationi').keyup( function () {

    var  passe = $(this).val()

 
      if( passe.length >= 3 &&  passe.length <= 14 && /^[a-zA-Z0-9]+$/.test(passe) && /[a-z0-9]/.test(passe)){
        vtype = true
       
      }
      else {
        vtype = false
       
      }
     greenValiderP()
    });

    $('#despublicationi').keyup( function () {

      var  passe = $(this).val()
  
     
        if( passe.length >= 3 &&  passe.length <= 214 && /^[a-zA-Z0-9\n\t]+$/.test(passe) && /[a-z0-9]/.test(passe)){
          vdes = true
         
        }
        else {
          vdes = false
         
        }
       greenValiderP()
      });

      $('#datepublicationi').keyup( function () {

        var  passe = $(this).val()
    
     
          if( passe.length >= 3 &&  passe.length <= 100 && /^[a-zA-Z0-9]+$/.test(passe) && /[a-z0-9]/.test(passe)){
            vdate = true
            
          }
          else {
            vdate = false
            
          }
         greenValiderP()
        });

        $('#lieupublicationi').keyup( function () {

          var  passe = $(this).val()
      
       
            if( passe.length >= 3 &&  passe.length <= 100 && /^[a-zA-Z0-9]+$/.test(passe) && /[a-z0-9]/.test(passe)){
              vlieu = true
             
            }
            else {
              vlieu = false
              
            }
           greenValiderP()
          });


}

 function greenValiderP(){
        if(vtype==true && vdes == true && vlieu == true && vdate == true && vimga == true && vimgb == true && vimgc == true && vimgd == true && vimge == true){
        
           verifiep =true
           $('#validerChangement').css({
               'display':  'block',
            });
            $('#validerChangementl').css({
              'display':  'none',
           });
          
        }
        else {
          $('#validerChangement').css({
            'display':  'none',
         });
         $('#validerChangementl').css({
          'display':  'inline',
       });
        
        }
       
    }

 function updateDetailpr(data) {
 
  
    var tabimg = textImgToTab( data.image)
    
    $('#spantitle').text(data.typep)
    $('.proimgadmi').eq(0).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[0]);
    $('.proimgadmi').eq(1).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[1]);
    $('.proimgadmi').eq(2).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[2]);
    $('.proimgadmi').eq(3).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[3]);
    $('.proimgadmi').eq(4).attr('src', "public/image/projet/dc" + data.id+"/" + tabimg[4]);
   
    
 
 }


 function cssTabProjet(){
  $(".partimenu").eq(3).css({
    
    'width': '72%' , 
   
    }) ;
  $("#tabprojet").css({
  
    'width': '96%' , 
    'float': 'left' ,   
    'overflow': 'auto' ,       
    'margin': '2%' , 
   
'border-collapse': 'collapse',

   
    }) ;
   
 }
 function ajouterProjet(){
  
  $("#tabapercu,#tabapercupub,#tabapercuann,#tabapercupr,#tabapercuaprogram").css({
    'display': 'none',
}) ;

$("#tabapercuapr").css({
  'display': 'block',
}) ;

$(".partimenu").eq(3).css({
  'border': '1px solid blue' ,
  
  'width': '72%' , 
 
  }) ;

  cssTabProjet()
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
   var date = '<span class="spant"> date et lieu  :</span>  <span class="spanv">'   + textToSpan( data[a].datei, chart) +' </span>  </br>'
   var lieu = '<span class="spant"> date et lieu  :</span>  <span class="spanv">'   + textToSpan( data[a].lieu, chart) +' </span>  </br>'

  
   $('#serchtableapercu').append('<div class="divserchpro">' + type + descrip + date + lieu + ' </div>' );
  
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
 
 

 function boutonControlpr() {
   $(document).off()
   $(document).keyup(function(event){
 
     
 
     var keycode = (event.keycode ? event.keycode:event.which) 
   
    if(keycode=='38'){
     if( curProjetIndex <=0)
     curProjetIndex = 0 ;
     else
     curProjetIndex --
   
    
     curenntcsstabpr( curProjetIndex)
 
    updateDetailpr(projet[ curProjetIndex])
    curProjetId = projet[curProjetIndex].id
 
       
      }
     else if (keycode=='40'){
       if(curProjetIndex>= lpr -1)
       curProjetIndex=  lpr -1
         else
         curProjetIndex ++
         
         curenntcsstabpr( curProjetIndex)
       
       updateDetailpr(projet[ curProjetIndex])
       curProjetId = projet[curProjetIndex].id
   
   
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
 
 function cleackTableLinepro() {
 
   $('.tablelinepr').click(function(){

     
  
     curProjetIndex = $(this).index() - 1
     
     curProjetId = projet[curProjetIndex].id

     

  updateDetailpr(projet[curProjetIndex])
  curenntcsstabpr(curProjetIndex)
  
 
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


function curenntcsstabpr(i) {

  $(".tablelinepr").css({
      'background-image': '',
      'cursor':'pointer'
  }) ;

  $(".tablelinepr").eq(i).css({
                  
      
          
      'background-image': 'linear-gradient(#87cefa,white)',
      'cursor':'pointer'
  }) ;

      
   
          }         

function createTableProjet(lpr) {

      
  $('.partimenu').eq(3).html('')
  $('.partimenu').eq(3).append('<table id="tabprojet"></table>')
  $('#tabprojet').append('<tr> <th>id</th> <th> description</th>  <th>type</th>    <th> date</th> <th>  lieu </th> <th>  depuis le </th>  </tr>')
 

 for( var a = 0 ; a < lpr ; a++){
   
   $('#tabprojet').append('<tr class="tablelinepr"> <td> ' + (a+1)+ ' </td>    <td> ' + projet[a].description+ ' </td>   <td> ' + projet[a].typep+ ' </td>   <td> ' + projet[a].datei+ ' </td> <td> ' + projet[a].lieu+ ' </td> <td> ' + projet[a].datep+ ' </td>      </tr>' );
    
 
}   
 
cssTabProjet()
curenntcsstabpr(0)

}  


