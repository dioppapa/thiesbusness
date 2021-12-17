
cssmenu()
csspublication()
cssbaspage()
 cssmenbre()
csspublicite()
//animemenu()

function animemenu() {
 
  $('p')
  .css('transform', 'translateX(5)')
  .animate({
    transform : 'translateX(100)',
 
  },{
  duration : 500
  , complete : function(){
   
    
  }
  });

}
function cssmenu(){
    $('#menu').css({
    
      //  'border':'1px solid #00ffff',
     
     
        //'border-bottom':'',
          'margin-top':'1%',
          'margin-left':'30%',
        
      //  'border-radius':'15%',
        
        
  //'position': 'absolute',
  
  //'top': '10%',
  //'left': '50%',
    //        '-ms-transform': 'translateX(-50%)',
      //      'transform': 'translateX(-50%)',
            'position': 'relative' ,

            'background-image':'linear-gradient(white , #c6ffec)',
          
        });
        $('#menu').width((X*45)/100)
   
        $('#menu').height((Y*5)/100)
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
                        $("#main").css({
                                                                                 
                  
                          'position': 'absolute' ,
                        
                          
                         });
                        $("#transition").css({
                                                                                 
                  
                          'position': 'absolute' ,
                         'background-color': 'white' ,
                          'border-top': '1px solid #00ffff',
                          'border-left': '1px solid #00ffff',
                           'border-right': '1px solid #00ffff',
 

                         'margin-top':'4%',
 
                          
                         });
                        $("#transition").width((7*X)/100)
                        $("#transition").height((3.5*Y)/100)
                     
                  
                  */
                  
          
          
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
   
        $('#publication').height((Y*70)/100)
    
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




