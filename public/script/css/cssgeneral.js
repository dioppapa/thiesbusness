
  

cssbaspage()
 cssmenbre()
csspublicite()


cssEspaceAnnonceur()

cssBody()
//cssPage()

cssNouvelPublicat()

var iteml = $('.n1').length 


//var d = $('.n1').eq(iteml).width() + $('.n1').eq(iteml).offset().left
//var a = $('.n1').eq(iteml-3 ).width() + $('.n1').eq(iteml-3).offset().left
 

//var a = 435

var m =  $('#main').width()

var ar = 0
var de = 0


var animm = true

var animM

var incm = 0


function cssNouvelPublicat(){

  $(".ajouterpdiv").css({
    'border':'1px solid blue',
    'position':'relative',
    'float':'right',
  //  'width':'15%',
  //  'height':'25%',

  });
$(".ajouterpdiv").width( (X*20)/100)
$(".ajouterpdiv").height( (Y*10)/100)


$(".ajouterpl").css({
  'position':'absolute',
  //   'border':'1px solid #00ffff',
    'top': '70%',
   'left': '50%',
  '-ms-transform': 'translate(-50%,-50%)',
  'transform': 'translate(-50% , -50%)',
  'font-size': '18px',
  'font-style': 'italic',
  'color': 'black',

});



  $(".ajouterpi").css({
    'position':'absolute',
    //  'border':'1px solid #00ffff',
     
      'left': '50%',
        '-ms-transform': 'translateX(-50%)',
        'transform': 'translateX(-50%)',

    });
  $(".ajouterpi").width( (X*5)/100)
  $(".ajouterpi").height( (Y*5)/100)
  
}


function cssPage(){
  $(".page").eq(4).css({
  //'border':'1px solid blue',
   'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
  'margin-left':'17%',
  'margin-top':'2%',

});

$(".page").css({
  'border':'1px solid yellow',
 
});

//$(".page").eq(4).width( (X*70)/100)
//$(".page").eq(5).height(Y)

}


function cssBody(){
  $("body").css({
  'background':'rgba(236,255,66,0.07)',
  

});
$('body').width( X)
$('body').height(Y)

}



function animemenu() {
     
   animM  =   setInterval( function() {
   anim()
    }, 20);



}

function anim() {
$("#transition").css({
 'transform': 'translateX(' + incm + 'px)',
 
  });
 incM()

}


function incM() {
 if(animm == true){
  incm = incm + 1
   if( incm >= ar){
    clearInterval(animM)
    animm = false
   
   }
   
     }



}



function cssbaspage(){
    $('#baspage').css({
      'position':'absolute',
  //      'border':'1px solid #00ffff',
        'margin-bottom':'1%',
        'margin-left':'10%',
     //   'padding-top':'30%',
      //  'padding-left':'10%',
        'border-radius':'15%',
      //  'left': '50%',
      //  '-ms-transform': 'translateX(-50%)',
       // 'transform': 'translateX(-50%)',

     
 
         });
         $('#baspage').width((X*80)/100)
    
         $('#baspage').height((Y*10)/100)



         $('.logolabelbas').css({
          'position':'relative',
         //   'border':'1px solid #00ffff',
            'margin-bottom':'1%',
            'margin-left':'6%',
            'float': 'left',
            'text-align': 'center',
          //  'background':'rgba(160,255,255,0.4)',
           
             });
             $('.logolabelbas').width((X*10)/100)
        
             $('.logolabelbas').height((Y*10)/100)


             $('.logobas').css({
             'position':'absolute',
               //  'border':'1px solid #00ffff',
                 'margin-bottom':'1%',
                
                 'left': '50%',
                   '-ms-transform': 'translateX(-50%)',
                   'transform': 'translateX(-50%)',
           
                
                  });
                  $('.logobas').width((X*6)/100)
             
                  $('.logobas').height((Y*6)/100)

                  $('.labelbas').css({
                    'position':'absolute',
                     //   'border':'1px solid #00ffff',
                       'top': '85%',
                      'left': '50%',
                     '-ms-transform': 'translate(-50%,-50%)',
                     'transform': 'translate(-50% , -50%)',
                  //  'padding-top':'70%',
                    'font-size': '10px',
                    'font-style': 'italic',
                    'color': 'black',
                  
                         });
}


function cssmenbre(){
  $('#membre').css({
      'border':'2px solid black',
      'border-radius':'15%',
      'position':'absolute',
      'top':'25%',
      'left':'1%',
  //    'background':'rgba(236,255,66,0.2)',

   

       });

      

       $('#membre').width((X*13)/100)
  
       $('#membre').height((Y*45)/100)
}

function csspublicite(){
  $('#publicite').css({
//      'border':'1px solid #00ffff',
    '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
 //    'background':'rgba(236,255,66,0.2)',

      'position':'absolute',
      'top':'25%',
      'right':'2%',
   //   'padding-top':'30%',
    //  'padding-left':'10%',
     //  '-ms-transform': 'translateX(-50%)',
    'border-radius':'15%',
    //  'left': '50%',
  //    'transform': 'translateX(-50%)',

       });
       $('#publicite').width((X*13)/100)
  
       $('#publicite').height((Y*40)/100)
       

       $('#divnewy').css({
    //    'border':'1px solid #00ffff',
      //  'background-color': '#00ffff' ,
       
      });
       
      $('#divnewy').width((X*13)/100)
  
      $('#divnewy').height((Y*10)/100)



       $('#newy').css({
       // 'display': 'none',
      });
       $('#newy').width((X*13)/100)
  
       $('#newy').height((Y*10)/100)

       $('#divsapin').css({
      //  'border':'1px solid #00ffff',
      //  'background-color': '#00ffff' ,
       
      });

      $('#divsapin').width((X*13)/100)
  
      $('#divsapin').height((Y*22)/100)


      $('#sapin').width((X*13)/100)
  
      $('#sapin').height((Y*22)/100)



      $('#divjnoel').css({
     //   'border':'1px solid #00ffff',
     //   'background-color': '#00ffff' ,
      
      });

      $('#divjnoel').width((X*13)/100)
  
      $('#divjnoel').height((Y*7)/100)


      $('#jnoel').css({
        'margin-left':'10%',
     //   'background-color': '#00ffff' ,
      
      });
      $('#jnoel').width((X*10)/100)
  
      $('#jnoel').height((Y*5)/100)


       
}

function cssEspaceAnnonceur(){
  

 
      $('.logindiv').css({
       //'border':'1px solid green',
        'margin-top':'20%',
      });
     // $('.logindiv').width((X*12)/100)
     
      $('.logindiv').height((Y*17)/100)


      

      $('.innoml').css({
     //   'border':'1px solid red',
        'margin-left': '8%',
      });
      $('.innoml').width((X*10)/100)

      $('.innoml').height((Y*2)/100)
   


      $('.innpassl').css({
      //  'border':'1px solid red',
        'margin-left': '8%',
      });
      $('.innpassl').width((X*10)/100)

      $('.innpassl').height((Y*2)/100)
   
      $('.noml').css({
      'font-size': '15px',
      'margin-left': '40%',
        'font-style': 'italic',
        'color': 'black',
      });

       $('.passl').css({
      'font-size': '15px',
      'margin-left': '40%',
        'font-style': 'italic',
        'color': 'black',
      });
      $('.validera').css({
        
        'margin-left': '30%',
        'margin-top': '10%',
       
        });
      
        $('.divenregistann').css({
          'border':'1px solid #bafff0',
          'margin-top': '22%',
          });

     //     $('.divenregistann').width((X*10)/100)

          $('.divenregistann').height((Y*4)/100)
       
          $('#registrc').css({
            'float':'left',
            'font-size': '15px',
             'font-style': 'normal',
             'font-weigth': 'bold',
              'color': 'blue',
              'margin-top': '3%',
            });
  
      //      $('#registrc').width((X*5)/100)
  
       //     $('#registrc').height((Y*4)/100)
         
        
       $('#annullec').css({
        'float':'right',
        'font-size': '12px',
        'font-style': 'italic',
        'font-weigth': 'bold',
        'margin-top': '3%',
        });


        $('#maske').css({
          
          'background': 'white',
          'position':'absolute',
      'top':'52%',
      'background':'rgba(236,255,66,1)',

          });

          $('#maske').width((X*13)/100)
  
            $('#maske').height((Y*28)/100)
            
}


  function flouter(){
    if(is.ie()){
      flouterie()
    }else {
      $('#global').css({
        'filter': 'blur(5px)',
     '-webkit-filter': 'blur(5px)',
     '-moz-filter': 'blur(5px)',
     '-o-filter': 'blur(5px)',
     '-ms-filter': 'blur(5px)',
                   
    });
  
    $('#divenregistrer').css({
      'filter': 'none',
    });
  }
   
  


   }
   function annulerFlouter(){
     if(is.ie()){
      annulerflouterie()
     } else {
      $('#global').css({
        'filter': 'none',
                   
    });
     }
   
   
   }



   function flouterie(){
  

    $("#global, #contacter , #contacter , #membre , #baspage , #publicite").css({
      
     //'color': 'transparent',
     'opacity': '0.09',
    // 'background':'rgba(236,255,66,0.3)',

     
      });
     

         
         
     
      
  
  
  }
  
  
  
  function annulerflouterie(){
    
   
    $("#global, #contacter , #contacter , #membre , #baspage , #publicite").css({
      
      //'color': 'transparent',
      'opacity': '1',
     // 'background':'rgba(236,255,66,0.3)',
 
      
       });
     
  }
   
  
  
  

         
    







