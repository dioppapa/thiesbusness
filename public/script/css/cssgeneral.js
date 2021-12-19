
cssmenu()
csspublication()
cssbaspage()
 cssmenbre()
csspublicite()
csslogo()
csscontacter()

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
function csscontacter(){
  $('#contacter').css({
    'position': 'absolute',
  //  'border':'1px solid #00ffff',
    'color': '#00ffff' ,
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

            'background-image':'linear-gradient(white , #c6ffec)',
          
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
     
  
  
  

         
        $("p").css({
        
          'color': 'blue' ,
          'font-size': '25px',
          'margin-top': '30%',
          'margin-left': '37%',
    
         });

         /**  
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
     'color': '#239aff' ,
     'font-size' : '18px' ,
     'margin-left': '5px',
             });

        $(".n1").eq(0).css({
         
          'color': '#239aff' ,
 'border-top': '1px solid #239aff',
 'border-left': '1px solid #239aff',
 'border-right': '1px solid #239aff',
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
                  
             
                   'color': '#239aff' ,
                  'font-size': '18px' ,
                  'background-color': 'transparent' ,
                 }); 

                 $(".n1").eq(i).css({
                  'color': '#239aff' ,
                  'border-top': '1px solid #239aff',
                  'border-left': '1px solid #239aff',
                  'border-right': '1px solid #239aff',
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
       'border':'1px solid #00ffff',
       'margin-top':'0%',
       'margin-left':'15%',
    //   'padding-top':'30%',
     //  'padding-left':'10%',
       'border-radius':'15%',
   
    

        });
        $('#publication').width((X*70)/100)
   
        $('#publication').height((Y*83)/100)
    
}

function cssbaspage(){
    $('#baspage').css({
      'position':'absolute',
        'border':'1px solid #00ffff',
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
}


function cssmenbre(){
  $('#membre').css({
      'border':'1px solid #00ffff',
      'position':'absolute',
      'top':'25%',
      'left':'1%',
   //   'padding-top':'30%',
    //  'padding-left':'10%',
     ///   '-ms-transform': 'translateX(-50%)',
    'border-radius':'15%',
    //  'left': '50%',
  //    'transform': 'translateX(-50%)',

   

       });
       $('#membre').width((X*13)/100)
  
       $('#membre').height((Y*40)/100)
}

function csspublicite(){
  $('#publicite').css({
      'border':'1px solid #00ffff',
      'position':'absolute',
      'top':'25%',
      'right':'5%',
   //   'padding-top':'30%',
    //  'padding-left':'10%',
     ///   '-ms-transform': 'translateX(-50%)',
    'border-radius':'15%',
    //  'left': '50%',
  //    'transform': 'translateX(-50%)',

   

       });
       $('#publicite').width((X*13)/100)
  
       $('#publicite').height((Y*40)/100)
}




