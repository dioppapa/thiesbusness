
cssmenu()
csspublication()
cssbaspage()
 cssmenbre()
csspublicite()
csslogo()
csscontacter()
cssEspaceAnnonceur()
cssSenregistrement()
cssBody()
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

function csslogo(){
  $('#logo').css({
    'position': 'absolute',
    'top': '3%',
  'left': '2%',
  });

  $('#logo').width((X*10)/100)
    
 // $('#logo').height((Y*4)/100)

}
function cssEmailEtel(){
  $("a").css({
    '-webkit-transition': '.8s ease-in-out',
    'transition': '.8s ease-in-out ', 
   // 'opacity': '0',
   'display': 'none' ,
  }) ;
  $('#contacter').css({
     'border': '1px solid #239aff',
     'opacity': '1',
  });
  $("#contactlemail").css({
    'opacity': '1',
    'display': 'inline' ,
    'opacity': '1',
    'color': 'black' ,
    'font-size': '10px',
  }) ;
  $("#contactltel").css({
    'opacity': '1',
    'display': 'inline' ,
    
    'color': 'black' ,
    'font-size': '10px',
  }) ;

  

  $(".spancontact").css({
    'opacity': '1',
    'color': 'blue' ,
    'font-size': '11px',
  }) ;
  
}
function csscontacter(){
  $('#contacter').css({
    'position': 'absolute',
    'color': '#00ffff' ,
    'opacity': '1',
    //'border': '1px solid #239aff',
    //'transform': 'translateX(80%)',
   'cursor': 'pointer' ,
    'font-size': '15px',
    'text-decoration': 'underline',
    'top': '3%',
  'right': '0%',
  });

  
  $('#contacter').width((X*15)/100)


 
}



function cssmenu(){
    $('#menu').css({
    
      //  'border':'1px solid #00ffff',
     
     
        //'border-bottom':'',
          'margin-top':'1%',
          'margin-left':'25%',
        
      //  'border-radius':'15%',
        
        
  //'position': 'absolute',
  
  //'top': '10%',
  //'left': '50%',
    //        '-ms-transform': 'translateX(-50%)',
      //      'transform': 'translateX(-50%)',
            'position': 'relative' ,

            'background-image':'linear-gradient(white , yellow)',
          
        });
        $('#menu').width((X*46)/100)
   
        $('#menu').height((Y*4)/100)


        $("#main").css({
                                                                                 
                  
          'position': 'absolute' ,
          
         });
         $('#main').width((X*46)/100)

         $('#main').height((Y*4)/100)

        $("#transition").css({
                                                                 
  
          'position': 'absolute' ,
     //    'background-color': 'white' ,
     //     'border-top': '1px solid #00ffff',
     //     'border-left': '1px solid #00ffff',
      //     'border-right': '1px solid #00ffff',


         'margin-top':'1%',

          
         });
        $("#transition").width((7*X)/100)
        $("#transition").height((3.5*Y)/100)
     
  
  
  
 /**  
         
        $("p").css({
        
          'color': 'blue' ,
          'font-size': '25px',
          'margin-top': '30%',
          'margin-left': '37%',
    
         });

        
        $("label").css({
        
        'color': 'blue' ,
         
         });

         $("label").eq(1).css({
          'margin-top': '50%',
          'margin-left': '12%',
        
         
         });

         $("label").eq(2).css({
          'padding-top': '50%',
          'padding-left': '12%',
        
         
         });
         $("label").eq(3).css({
          'margin-top': '34%',
          'margin-left': '40%',
        
         
         });
         */
        $(".n1").css({

          'cursor':'pointer',
 'height':'24px',
   'padding-left':'5px',
   'padding-right':'5px',
       
     'margin-top': '8px',
     'display': 'inline-block',
     'list-style-type': 'none',
     'background-color': 'transparent' ,
    // 'color': '#239aff' ,
    'color': 'black' ,
     'font-size' : '18px' ,
     'font-style' : 'italic' ,
     'margin-left': '5px',
             });

        $(".n1").eq(0).css({
         
          
 'border-top': '1px solid black',
 'border-left': '1px solid black',
 'border-right': '1px solid black',
 'background-color': 'white' ,
    
         });

         $(".page").css({
         
          'display': 'none' ,
 
    
         });
         $(".page").eq(0).css({
         
          'display': 'block' ,
 
    
         });

        
        



        $(".n1").click(function(){

          var i = $(this).index()
        
          if( i == 1) {
            ar = (m*15)/100
             animemenu()
                          
          }
          else if( i == 2) {
            ar = (m*25)/100
             animemenu()
                          
          }
        
          
          $(".n1").css({
                                                                         
          
                 'border': 'none',
                  
             
                  
                  'font-size': '18px' ,
                  'background-color': 'transparent' ,
                 }); 

                 $(".n1").eq(i).css({
                 
                  'border-top': '1px solid black',
                  'border-left': '1px solid black',
                  'border-right': '1px solid black',
                  'background-color': 'white' ,
                            });
                            $(".page").css({
         
                              'display': 'none' ,
                     
                        
                             });
                             $(".page").eq(i).css({
                             
                              'display': 'block' ,
                     
                        
                             });
                });

                
               
               
                     
          
          /**  
          
          $("#pdf").css({
             'display':'none',
                    });
          $("#search").css({
               'display':'block',
                  });
          }); 
          
          
          
          
          $(".n2").click(function(){
          
          $(".n2").css({
                 'color': '#239aff' ,
                 'border-top': '1px solid #239aff',
                 'border-left': '1px solid #239aff',
             'border-right': '1px solid #239aff',           
                 'background-color': 'white' ,
          
                    });
          
          $(".n1").css({
                                                                         
          
                 'border': 'none',
                  
                'background-color': 'transparent' ,
                   'color': '#239aff' ,
                  'font-size': '18px' ,
          
                 }); 
          
          $("#search").css({
          'display':'none',
                    });
          $("#pdf").css({
               'display':'block',
                  });
          
          }); 
          
          
          
          */
          
                 
          
          
          
                  
          
   

}


function csspublication(){
    $('#publication').css({
       'border':'1px solid black',
       'margin-top':'0%',
       'margin-left':'15%',
    //   'padding-top':'30%',
     //  'padding-left':'10%',
     'border-top-left-radius': '15%',
       'border-bottom-right-radius': '15%',
       'background':'white',

    

        });
        $('#publication').width((X*70)/100)
   
        $('#publication').height((Y*83)/100)
    
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
      'background':'rgba(236,255,66,0.2)',

   

       });

      

       $('#membre').width((X*13)/100)
  
       $('#membre').height((Y*45)/100)
}

function csspublicite(){
  $('#publicite').css({
      'border':'1px solid #00ffff',
    '-webkit-transition': '.8s ease-in-out',
     'transition': '.8s ease-in-out ', 
     'background':'rgba(236,255,66,0.2)',

      'position':'absolute',
      'top':'25%',
      'right':'5%',
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
  

  $('.ajouterpdiv').css({
  
  'margin-top':'75%',
 
 });

    //   $('.ajouterpdiv').width((X*12)/100)
  
       $('.ajouterpdiv').height((Y*5)/100)


       $('.ajouterpi').css({
        'float': 'left',
        'margin-left': '3%',
      });
       $('.ajouterpi').height((Y*5.5)/100)
       $('.ajouterpi').width((X*4)/100)
      
       $('.ajouterpl').css({
        'margin-top': '6%',
        'margin-right': '3%',
        'float': 'right',
        'font-size': '15px',
        'font-style': 'italic',
        'color': 'black',
      });
      $('.logindiv').css({
     //   'border':'1px solid red',
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
function cssSenregistrement() {

  
  
  $("#divenregistrer").css({
       'width':'30%',
       'border':'1px solid black',
'height':'67%',
'position':'fixed',
'top': '50%',
          'left': '50%',
           '-ms-transform': 'translate(-50%, -50%)',
          'transform': 'translate(-50%, -50%)',
          'margin':'2% auto',
        'padding':'3%',
'background':'rgba(255,255,240,0.7)',


     });
    


    

     

    


     $(".save").css({
      'width': '100%',
    'padding':'10px 0',
    'margin':'5px 0',
    'border-left':'0',
    'border-top':'0',
    'color':'black',
     'font-size': '15px',
        'font-style': 'italic',
        'font-weigth': 'bold',
    'border-right':'0',
    'border-bottom': '1px solid #999',
    'outline':'none',
    'background': 'transparent',
     });

     $("#saveNewClient").css({
      'width': '85%',
    'padding': '10px 30px',
    'cursor': 'pointer',
    'display': 'block',
    'margin': 'auto',
   
    'background':'rgba(236,255,66,0.8)',
              
    'border': '0',
    'outline': 'none',
    'margin-top':'30px',
    'border-radius': '30px',
     });
     $("#annuler").css({
      'width': '25%',
     'cursor': 'pointer',
    'display': 'block',
    
    'background': '#bafff0',
    
    'outline': 'none',
    'margin-top':'2%',
    'margin-left':'35%',
    'border-radius': '30px',
     });

     $(".spancheck").css({
   
    'color':'red',
    
     });

     $(".span").css({
   
      'color':'red',
      
       });
      
     
  


 
    
         
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
   
  
  
  

       
         
    







