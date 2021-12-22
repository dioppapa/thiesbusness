

var a = $(window).width()

var b = $(window).height()

  
  
var X = (a* 98.5)/100
var Y = (b*97) / 100

var animt = true
var inc = 0


var ic = 0
var tt = "Chercher..."
var text = ''
var tl  = tt.length


 

createReseau()
clickReseau()
clickContacter()
animeSerch()
clickSerch()

hoverReseau()
cssReseau()


clickAjouter()
animpublicite()

clickSenregistrer()
clickDevenirAnnonceur()
clickannulerEnr()
//cssAnimeThies()

//animeInterThies()




var anx = (X*3.5)/100
var anxx = (X*4)/100
var XX = X - $('#thiesanimation').width()




function clickContacter(){

  $('#contacter').click(function(){

    animeOpacite()
    
     //   alert('cliqued wayy')
  });
   
  }


  function clickDevenirAnnonceur(){

    $('#saveNewClient').click(function(){
  
     alert('devenir annocceur') 
     $("#divenregistrer").css({
      
      'display': 'none',
     
     
     });
     annulerFlouter()
     
      });
     
    }

    function clickannulerEnr(){

      $('#annuler').click(function(){
    
       $("#divenregistrer").css({
        
        'display': 'none',
       
       
       });
       annulerFlouter()
        });
       
      }

function clickReseau(){


    $('.res').mousedown(function(){
        var i = $(this).index()
        $('.res').eq(i).css({
          'box-shadow': '1px 1px 3px #555 inset',
          'background': 'blue',

          });
    
                        })
    .mouseup(function(){

        var i = $(this).index()
       
        $('.res').eq(i).css({
          'box-shadow': '',
          'background': '',

        });
                          })
    .click(function(){
       
        var i = $(this).index()
      if( i == 0){
        window.location.href = 'https://www.facebook.fr/'
   
       
      }
      if( i == 1){
        window.location.href = 'https://www.twitter.fr/'
      }
       if( i == 2){
        window.location.href = 'https://www.instagram.fr/'
      }
       if( i == 3){
        window.location.href = 'https://www.google.fr/'
      }
       

})
     
       }


       function hoverReseau() {
        $('#imgf').hover(function(){ 
          var i = $(this).index()
        
          animeReseau(i)
         },function(){
          var i = $(this).index()
        
         
         
       });



       $('#imgt').hover(function(){ 
        var i = $(this).index()
      
        animeReseau(i)
       },function(){
        var i = $(this).index()
      
       
       
     });



     $('#imgi').hover(function(){ 
      var i = $(this).index()
    
      animeReseau(i)
     },function(){
      var i = $(this).index()
    
     
     
   });

   $('#imgw').hover(function(){ 
    var i = $(this).index()
  
    animeReseau(i)
   },function(){
    var i = $(this).index()
  
   
   
 });
         
       }
        function animeReseau(i) {
          $('.res').eq(i)
          .css('width', anx)
          .css('height',anx)
          .animate({
          width : anxx,
          height : anxx,
          },{
          duration : 500
          , queue : true // ici peu importe sa valeur
          , complete : function(){
           
            animeReseaub(i)
          }
          });
        
        }
        function animeReseaub(i) {
          $('.res').eq(i)
          .css('width', anxx)
          .css('height',anxx)
          .animate({
          width : anx,
          height : anx,
          },{
          duration : 500
          , queue : true // ici peu importe sa valeur
          , complete : function(){
            
          }
          });
        
        }
        function cssReseau() {

            $("#reseau").css({
               
                  'position': 'fixed',
                  'top':'38%',
                  'right':'0%',
                'padding':'1%',
        //       'background':'rgba(236,255,66,0.3)',
        'border': '1px solid #bafff0',
        
              
              
                });
                $("#imgw").css({
               
                 'border': '1px solid #bafff0',
                 'border-radius': '50%',
        
              
              
                });
            
                $("#imgf , #imgt , #imgi , #imgw , #reseau").width((X*3)/100)
               
              }
      

            
      
       function createReseau() {

        var fac = '<img id="imgf" class="res" src="public/image/acceuil/facebook.png"></img>'
        var twit = '<img id="imgt" class="res"  src="public/image/acceuil/twitter.png"></img>'
        
        var instag = '<img id="imgi" class="res"  src="public/image/acceuil/insta.png"></img>' 
      
        var watchap = '<img id="imgw" class="res"  src="public/image/acceuil/messenger.png"></img>'
               
        
                  
                 
     
           
 
 var reseau = '<div id="reseau" >'+ fac + twit + instag + watchap+' </div>'
 
      $('body').append( reseau)
      
            }
      
 




// script espace membre

function showlogin() {
  
  $(".divenregistann , .logindiv , #maske").css({
      'display': 'block',
      
     
      }) ; 

  

      $('.ajouterpdiv')
.css('margin-top', '75%')

.animate({
marginTop : '13%' 

},{
duration : 1500
, queue : true  // ici peu importe sa valeur
, complete : function(){
  baisserMask()
}
});
 }

 function baisserMask() {
  
   
 $('#maske')
.css('top', '52%')

.animate({
top : '100%' 

},{
duration : 1500
, queue : true  // ici peu importe sa valeur
, complete : function(){
  $("#maske").css({
    'display': 'none',
    
   
    }) 
}
});
 }

 function animeOpacite() {
  
  $('#contacter')
 .css('opacity', '1')
 
 .animate({
  opacity : '0' ,
 
 
 },{
 duration : 2500
 , queue : true  // ici peu importe sa valeur
 , complete : function(){
  
  cssEmailEtel()
  animeUs()

 }
 });
  }

 function animeUs() {
  
  $('#contacter')
 .css('margin-top', '-5%')
 
 .animate({
 marginTop : '0%' ,
 
 
 },{
 duration : 2500
 , queue : true  // ici peu importe sa valeur
 , complete : function(){
  
 }
 });
  }



  function clickSenregistrer(){
    $('#registrc').click(function(){
      showEnregistrement()
      flouter()
    
    });
  }
  function showEnregistrement(){
    $("#divenregistrer").css({
      
      'display': 'block',
      
      
       });
  }
 function clickAjouter(){

  $('.ajouterpdiv').click(function(){
    showlogin() 
  });
   
  }

  function animpublicite(){
    var o = 0 
    var intid =   setInterval( function() {
  
      if( o%2 == 0 ){
        $("#publicite").css({
          'border': '3px solid #00ffff',
          
         
          }) ; 
         
      }else{
        $("#publicite").css({
          'border': '3px solid yellow',
          
         
          }) ; 
          
      }
         
    
             o = o + 1
  
            }, 1000) ; 
  
  }