


// var tab = ['pa.jpg','pb.jpg','pc.jpg','pd.jpg','pe.png']
var verifiep = false
var vpasp= false
var  vpp = false

var projets = listeTousProjets()

var tab = textImgToTab(projets[0].image)

var  dir = ''

/** 
if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
  hoverImage()
  enCoursResponse()
  } else {
  
    hoverImage()
 }
 */


 hoverImage()
putImageProjet(projets[0])
putImageListeProjets()
clickSuggerer()
clickValiderIdee()


clickValiderProjet()
validerInputLogin()

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


function putImageProjet(projet){

     dir = 'dc'+ projet.id
   
    $('#imgapercu').eq(0).attr("src", "public/image/projet/"+ dir + '/' + tab[0]) ;
    
    $('.icona').attr("src", "public/image/projet/"+  dir + '/' + tab[0]) ;
  
    $('.icona').eq(0).css({
        'border': '1px solid rgba(233,0,0,0.5)',
    });
  
 //   $('.icona').eq(0).width((X*9)/100)

 //   $('.icona').eq(0).height((Y*9)/100)


    for( var a = 0 ; a < tab.length ; a++)
        $('.icona').eq(a).attr("src", "public/image/projet/"+ dir + '/' + tab[a]) ;
    
        $('#papercup label').text( projet.description)
        
}

function putImageListeProjets(){

   

    $('.unitepro').remove()
    for( var a = 0 ; a < projets.length ; a++) {
        var tab = textImgToTab(projets[a].image)
        
      var dirb = 'dc'+ projets[a].id
     
        var unit = '  <div class="unitepro"> <img class="imgprojet"  src="public/image/projet/'+ dirb + '/' + tab[0]   + '"></img>'
   
        var unitb = '<div class="divdescrip">'
        var unitc = '<label class="typep"> ' + projets[a].typep + ' </label> </br>'
        var unitd  = '<label class="nomp"> ' + projets[a].dateetlieu + ' </label> </div> </div>'
     
        $('#realiser').append( unit + unitb + unitc + unitd)
    }
     
    
      
 
    clickItemProjet()
}
function hoverImage(){

    $('.icona').hover(function(){ 
        var i = $(this).index()
      
        
        $("#imgapercu").attr("src", "public/image/projet/"+ dir + '/' + tab[i]) ;
    
       
       $('.icona').css({
            'border': '',
        });
       $('.icona').eq(i).css({
           'border': '1px solid rgba(233,0,0,0.5)',
      });
      
     
       },function(){
      
       
     });
    

}
function clickItemProjet(){

  $('.unitepro').hover(function(){
   
    
    var a  = $(this).index() - 2
   
  
     $(".unitepro").eq(a).css({
          'box-shadow': '1px 1px 3px #555 inset',
         
              });
 
 
     },function(){
      $(".unitepro").css({
        'box-shadow': '1px 1px 3px #555',
       
            });
 
 
           });

    $('.unitepro').click(function(){ 
 
        var i = $(this).index()
      
        putImageProjet(projets[i-2])
    
       
    });
    

}
function clickSuggerer(){


  $('#divsuggerer').hover(function(){
   
    
   // var a  = $(this).parent().index()
    $("#divsuggerer").css({
         'box-shadow': '1px 1px 3px #555 inset',
        
             });


    },function(){
      $("#divsuggerer").css({
        'box-shadow': '1px 1px 3px #555'
         
            });


          });


    $('#divsuggerer').click(function(){ 



    


     
        if( clientConnected){
            $(".divsuggereridee").css({
                'display':'none',
                           
                          }) ;
                          $(".divsuggereridee").eq(1).css({
                            'display':'block',
                                       
                                      }) ;
        }
         else {
            $(".divsuggereridee").css({
                'display':'none',
                           
                          }) ;
            $(".divsuggereridee").eq(2).css({
                'display':'block',
                           
                          }) ;
                          
         }
      
      
     });
    

}

function connp(nom , prenom , id) {
    var result = ""
   $.ajax({
     
    url:"/cnt?name="+ nom + "&prenom=" + prenom + "&id=" + id,
        async: false,  
     success:function(data) {
         result = data
         
     }
  });
  
  return result
    
  }

  function getUserDonnep() {
    var result = {}
   $.ajax({
    type: 'GET',
     url:"/validerLoginPass?pseudo=" +  $('.nomconnect').eq(0).val() + "&passe=" + $('.nomconnect').eq(1).val(),
     async: false,  
     success:function(data) {
       
         result = data
     }
  });
  
  return result
    
  }
  
  function clickValiderProjet() {
  
    $('.validerconnect').eq(0).click(function(){
    
    if(verifiep){
      var data = getUserDonnep()
      
      if(data.success.localeCompare('success') ==0) {
        var nom = data.user.nom
        var prenom = data.user.prenom
        var id = data.user.id
   
        var result =     connp(nom , prenom , id)
       
        redirectConnp( result)
    
      }
   
    }
    else {
    
    }
     
   
    
});
    
    $('.validerconnect').eq(1).click(function(){
        $("#moncidiv").click()
    });
    }
    function greenValiderp(){
      if(vpasp==true && vpp == true){
        $('.validerconnect').eq(0).css({
          'color': 'green',
         });
         verifiep=true
      }
     
  }
  
  
  
  function redirectConnp( data) {
     
    clientConnected =  data.connected
  
    
    if(clientConnected == true ) {
     nom = data.user.nom
     prenom = data.user.prenom
     idClient = data.user.id
    
     $(".divsuggereridee").css({
        'display':'none',
                   
                  }) ;
                  $(".divsuggereridee").eq(1).css({
                    'display':'block',
                               
                              }) ;
      
    }
    
    else {
     nom = ''
     prenom = ''
     idClient = 0
     
    }
  }
  
  
  function validerInputLogin(){
  
  
  $('.nomconnect').eq(1).keyup( function () {
  
    var  passe = $(this).val()
  
    
      if( passe.length >= 3 &&  passe.length <= 14 && /[a-z0-9]+/.test(passe) && /[a-z0-9]/.test(passe)){
        vpasp = true
        $('.validerconnect').eq(0).css({
          'color': 'yellow',
         });
      }
      else {
        vpasp = false
        $('.validerconnect').eq(0).css({
          'color': 'red',
         });
      }
      greenValiderp()
    });
  
  
    $('.nomconnect').eq(0).keyup( function () {
  
    var pseudo = $(this).val()
  
      if( pseudo.length  >= 2 &&  pseudo.length <= 8 && /[a-z0-9]+/.test(pseudo) && /[a-z0-9]/.test(pseudo) ){
        vpp = true
        $('.validerconnect').eq(0).css({
          'color': 'yellow',
         });
      }
      else {
        vpp = false
        $('.validerconnect').eq(0).css({
          'color': 'red',
         });
      }
  
      greenValiderp()
  
    });
  
  
  
  
  }

 
function clickValiderIdee(){

    $('#valideridee').click(function(){ 
        
    var idee = $('#textasugerer').val()
    inSererDansBaseIdee(idee)
        $(".divsuggereridee").eq(1).css({
    'display':'none',
               
              }) ;
              $(".divsuggereridee").eq(0).css({
                'display':'block',
                           
                          }) ;
      
     });
    

}

function inSererDansBaseIdee(a){
  $.ajax( {
                
    type: 'GET',
    url: '/inSererIdee?idee=' + a + '&idc=' +idClient,
    success: function(data){
       
    }  
       
});
}