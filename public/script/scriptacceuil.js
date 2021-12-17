

var a = $(window).width()

var b = $(window).height()

  
  
var X = (a* 98.5)/100
var Y = (b*97) / 100

var animt = true
var inc = 0


   
 

createReseau()
clickReseau()
hoverReseau()
cssReseau()

cssAnimeThies()

animeInterThies()



cssbody()
var anx = (X*3.5)/100
var anxx = (X*4)/100
var XX = X - $('#thiesanimation').width()
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
               'background':'rgba(0,0,0,0.3)',
              
              
              
                });
            
                $("#imgf , #imgt , #imgi , #imgw , #reseau").width((X*3.5)/100)
               
              }
      
      
       function createReseau() {

        var fac = '<img id="imgf" class="res" src="public/image/acceuil/facebook.png"></img>'
        var twit = '<img id="imgt" class="res"  src="public/image/acceuil/twitter.png"></img>'
        
        var instag = '<img id="imgi" class="res"  src="public/image/acceuil/insta.png"></img>' 
      
        var watchap = '<img id="imgw" class="res"  src="public/image/acceuil/messenger.png"></img>'
               
        
                  
                 
     
           
 
 var reseau = '<div id="reseau" >'+ fac + twit + instag + watchap+' </div>'
 
      $('body').append( reseau)
      
            }
      
 

function cssbody(){
  $('body').css({
  
    //  'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("public/image/acceuil/fontl.jpg")',
     //           'background-repeat':'no-repeat',
            
    //            'background-position': 'center',
   //             'background-size': 'cover',
   'border': '1px solid blue',
   'position': 'absolute',
      
    });
    
    $('body').width( X)
    $('body').height(Y)
    
  //  $('html').css({
  //    'border': '1px solid red',
 //   });
  
  //  $('html').width( X)
  //  $('html').height(Y)
    
    
     
    
    
}



 


      




      // anime thies

      function animeInterThies() {
      
        var animp =   setInterval( function() {
         animThies()
          }, 20);
  
    
  
     }
  
    function animThies() {
     $("#thiesanimation").css({
       'transform': 'translateX(' + inc + 'px)',
       
        });
       incX()
     
     }
     
      
      function incX() {
       if(animt == true){
        inc = inc + 1
         if( inc >= XX)
         animt = false
         
           }
      else {
        inc = inc - 1
        if( inc <= 0)
        animt = true
      
      }
     
     }
  
  
  
 
  function cssAnimeThies() {
    $('#thiesanimation').css({
    
    'border':'1px solid #00ffff',
    
    'width':'14%',
    'padding-top':'1%',
    
    'border-radius':'15%',
    
    
    });
    $('#thiesanimation').height((Y*7)/100)
    
    $('.thies').eq(0).css({
    'width':'30%',
    'float': 'left' ,
    'margin': '3%' ,
    
    //'height': '10%' ,
    
    
    });
    $('.thies').eq(1).css({
    'font-weight': 'bold',
    'font-size': '10px',
    'font-family': 'Courier New Courier, monospace',
    //'padding-top': '10%' ,
    
    
    });

  }
  