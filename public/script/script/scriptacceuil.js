

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
chercherProduit()
hoverClickReseau() 


var testconn = testConnection()


var clientConnected = testconn.connected
 
idClient = testconn.user.id





var anx = (X*3.5)/100
var anxx = (X*4)/100
var XX = X - $('#thiesanimation').width()




function testConnection(){
  var result = false
  $.ajax({
    
   url:"/testconnection",
       async: false,  
    success:function(data) {
        result = data
     
    }
 });
 
 return result
   
}

function ajaxSherch(val){
  $.ajax( {
    type: 'GET',
 url: '/searchAcceuil?p=' +  val,
 success: function(data){
   
   
  autocomplacceuil(data  , val)
  
   hoverDivAutoComplet()
  
  }  

 });

}

function hoverDivAutoComplet(){

  $('.totalitem').click(function(){
    var i  = $(this).parent().index()

    
    clickItemSerch(i)
    showHideDivautocompl(0)

        }) ;


  $('.totalitem').hover(function(){
    var i  = $(this).parent().index()

    
    $(".totalitem").eq(i).css({
      'box-shadow': '1px 1px 3px #555 inset' ,
        }) ;


    },function(){
        $(".totalitem").css({
            'box-shadow': '1px 1px 3px #555' ,
      }) ;
        
  });


}
function indextToStringCategorie(i){
  var tab = ["fruits et legumes","electromenager","elevage" , "bureatique", "cosmetique" , "vehecules" , "immobilier", "alimentaire" , "pièces détachées"]
  
   return   tab[i - 1]
  


}

function cssautocompl() {
  cssItem()
    $("#apercuacceuil").css({
      'position': 'absolute',
      'top':'5%',
      'left':'45%',
   '-ms-transform': 'translateX(-50%)' ,
      'transform': 'translateX(-50%)', 
      'width':'30%',
      'z-index':'4',
    //  'height':'65%',
    'border-radius':'15px',
      'padding':'1%',
    //  'background':'rgba(236,255,66,0.3)',
    'background-image':'linear-gradient(white , rgba(0,0,0,0.5))' ,
                       
 //'border': '1px solid #bafff0',

   }) ;

    

    
     
 }


 function cssautocomplResponse() {
  cssItem()
    $("#apercuacceuil").css({
      'position': 'absolute',
      'top':'14%',
      'left':'50%',
   '-ms-transform': 'translateX(-50%)' ,
      'transform': 'translateX(-50%)', 
      'width':'65%',
      'z-index':'4',
    //  'height':'65%',
    'border-radius':'15px',
      'padding':'1%',
    //  'background':'rgba(236,255,66,0.3)',
    'background-image':'linear-gradient(white , rgba(0,0,0,0.5))' ,
                       
 //'border': '1px solid #bafff0',

   }) ;

    

    
     
 }

 function cssItem() {


  $(".ca").css({
      
      
    'font-size': '10px',
    'font-weight': 'normal',
    'font-style': 'italic',
      'margin-right': '10px',
      }) ;

  $(".classe").css({
      
     
    'font-weight': 'bold',
    'float': 'left',
      'font-size': '12px',
      'margin-left': '3%',
     
      }) ;
      $(".marque").css({
      
        
        'float': 'left',
              'font-size': '12px',
              'margin-left': '3%',
              'font-weight': 'bold',
              
          }) ;
          $(".description").css({
      
             
              'margin-left': '20px',
              'font-size': '9px',
              'font-style': 'italic',
              
              }) ;

 
              $(".imgautocomp").css({
                  
                  'height': '30px',
                  'width':'30px',
                  
                  'position': 'absolute',
                  'right': '5%',
                  'top': '8%',
                  
                   '-ms-transform': 'translateX(-50%)',
                  'transform': 'translateX(-50%)',
                  'border-radius': '50px',
                  }) ;

                  
                    
                
                  $(".mark").css({
                      'color': 'blue',
                      'font-size': '14px',
                     
                      }) ;
  

                      $(".totalitem").css({
                         
                          'height':'10%',
                          'position': 'relative',
                          'box-shadow': '1px 1px 3px #555' ,
                          'margin':'auto',
                          'cursor':'pointer',
                          'margin-bottom':'2%',
                          'background-image':'linear-gradient(white , rgba(233,0,0,0.3))' ,
                          'width':'90%',
                         // 'border-radius': '8%',
                          'border-radius': '14px',
                          }) ;          
                      


              
     
 }

 

function autocomplacceuil(data , val) {
  
 
 
  
  $('#apercuacceuil').html('')

  
  for( var a = 0 ; a < data.length ; a++){
    var catname = data[a].categorie
 
    var img = '  <img class="imgautocomp" src ="public/image/vente/dc' + data[a].idc  +'/' + data[a].image + '"/>  '

    
  
     var categorie  =  '<span class="classe"> <span class="ca"> Categorie  : </span> ' +   textToSpan(  catname   , val) + '</span> </br> '
      var prix  =    '<span class="marque"> <span class="ca"> Prix : </span>  ' + textToSpan( data[a].prix.toString()   , val) + '</span> </br>'
 
       var line =  '<div class="totalitem">'      + categorie  + prix + img + '</div>' 
  
    $('#apercuacceuil').append('<div class="divsercha">  ' + line + ' <span class= "spanidpr" style="display: none;">  '+ data[a].id + ' </span> </div>' );
 
 
   

    }
   // divserchclick( data)

   if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
    cssautocomplResponse()
    
   } else {
    cssautocompl()
  }
    


}


function textToSpan( text , chart) {
  var result
 
    result =   text.replace( chart, '<span class="mark">' + chart + '</span>')
   
   
   return result
  

 }




function chercherProduit() {
      
   
  $('#serchacceuil').keyup(function(event){

  
var val = $(this).val()
   
if( val.length > 0 ) {
      
      if(/^[a-zA-Z0-9]+$/i.test(  val )){
        showHideDivautocompl(1)
         ajaxSherch(val)
        
      }
     
    
}
   
else {
   showHideDivautocompl(0)
}
   
    });
  

   
    
      }

      function showHideDivautocompl(a) {
  
        if(a==0 ) {
       $("#apercuacceuil").css({
         'display': 'none',
        }) ;
       }
       else {
         $("#apercuacceuil").css({
           'display': 'block',
          }) ;
       }
     }




  function clickDevenirAnnonceur(){

    $('#saveNewClient').click(function(){
  
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


       function clickItemSerch(i){
        $('#serchacceuil').val('')
        $(".n1 , #moncidiv").css({
                                                                         
          
          'border': 'none',
           
      
          'font-size' : '12px' ,
           'background-color': 'transparent' ,
          }); 
      
          $(".n1").eq(1).css({
          
           'border-top': '1px solid black',
           'border-left': '1px solid black',
           'border-right': '1px solid black',
           'background-color': 'white' ,
                     });
                    
      $(".page").css({
      
      'display': 'none' ,
      
      
      });
      $(".pagem").css({
      
      'display': 'none' ,
      
      
      });
                      $(".page").eq(1).css({
                      
                       'display': 'block' ,
              
                 
                      });
                     

                      var id = parseInt( $(".spanidpr").eq(i).text())
                      
                      var data = idToProduit( vente , id)
                     
                     var a = data.categorie

                      cssUpdateItemMenu(a-1)
                      if(a.localeCompare("fruits et legumes")==0){
                        alert('fruit')
                        createTabVenteDetail(fruietlegume)
                       var i = idToIndex( fruietlegume , id)
                       cssCurrentClumn(i)
                     
                      }
                      else if(a.localeCompare("electromenager")==0){
                        createTabVenteDetail( electromenager)
                        var i = idToIndex( electromenager , id)
                        cssCurrentClumn(i)
                      
                      }
                      else if(a.localeCompare("elevage")==0){
                        createTabVenteDetail( elevage)
                        var i = idToIndex( elevage , id)
                        cssCurrentClumn(i)
                      }
                      else if(a.localeCompare("bureatique")==0){
                        createTabVenteDetail( bureatique)
                        var i = idToIndex( bureatique , id)
                        cssCurrentClumn(i)
                      }
                      else if(a.localeCompare("cosmetique")==0){
                        createTabVenteDetail( cosmetique)
                        var i = idToIndex( cosmetique , id)
                        cssCurrentClumn(i)
                      }
                      else if(a.localeCompare("vehecules")==0){
                        createTabVenteDetail( voiture)
                        var i = idToIndex( voiture , id)
                        cssCurrentClumn(i)
                      }
                      else if(a.localeCompare("immobilier")==0){
                        createTabVenteDetail( immobilier)
                        var i = idToIndex( immobilier , id)
                        cssCurrentClumn(i)
                      }
                      else if( a.localeCompare("alimentaire")==0){
                      
                       createTabVenteDetail( alimentaire)
                       var i = idToIndex( alimentaire , id)
                       cssCurrentClumn(i)
                
                      }
                      else if(a.localeCompare("pièces détachées")==0){
                       createTabVenteDetail( piece)
                       var i = idToIndex( piece , id)
                       cssCurrentClumn(i)
                      }
                      
                
                      $('#divvente').css({
                        //      'border':'1px solid #00ffff',
                            'display': 'none',
                         
                
                          }) ;
                        
                      $('#divventeb').css({
                        //      'border':'1px solid #00ffff',
                            'display': 'block',
                         
                
                          }) ;
                        
                
                
       // $('#divsuggerer').click()
      //  $('#textasugerer').focus()
       }

       function hoverClickReseau() {
        $('.res').hover(function(){ 
          var i = $(this).index()
        
          $(".res").eq(i).css({
            'box-shadow': '1px 1px 3px #555 inset',
          
          }) ;
         },function(){
          var i = $(this).index()
        
          $(".res").css({
            'box-shadow': '1px 1px 3px #555',
            
          }) ;
         
       });

        $('.res').click(function(){ 
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
      
      
        
      });
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
          , complete: function(){
          
          }
          });
        
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

