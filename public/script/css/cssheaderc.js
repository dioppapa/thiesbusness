
cssHeaderc()





if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
  csslogoRespnonse()
  cssmenuResponse()
  cssMyaccountResponse()
 } else {
  csslogo()
  cssmenu()
  cssMyaccount()
}
function cssMyaccount(){
    $("#moncidiv").css({
     'float': 'right',
          //   'padding-left': '4%' ,
          //   'padding-top': '1%' ,
        //   '-webkit-transition': '.8s ease-in-out',
        //   'transition': '.8s ease-in-out ', 
       // 'border': '1px solid blue',
         'margin-top': '3%' ,
         'margin-right': '1%' ,
         }) ;

         $('#moncidiv').width((X*13)/100)
         $('#moncidiv').height((Y*3.5)/100)
        
             $("#monc").css({
                // 'margin-left': '4%' ,
            //   '-webkit-transition': '.8s ease-in-out',
            //   'transition': '.8s ease-in-out ', 
              // 'opacity': '0',
            'color': 'black' ,
            'float': 'rigth',
            'padding-left': '4%' ,
             }) ;
             $("#monci").css({
               //  '-webkit-transition': '.8s ease-in-out',
               //  'transition': '.8s ease-in-out ', 
                // 'opacity': '0',
             //   'display': 'none' ,
             'float': 'left',
           
               }) ;

               $('#monci').width((X*3)/100)
               $('#monci').width((Y*3)/100)
       
           
          

        }
        function cssMyaccountResponse(){
          $("#moncidiv").css({
           'position': 'absolute',
           
               'top': '7%' ,
               'right': '5%' ,
               }) ;
      
               $('#moncidiv').width((X*24)/100)
               $('#moncidiv').height((Y*2)/100)
              
                   $("#monc").css({
                      // 'margin-left': '4%' ,
                  //   '-webkit-transition': '.8s ease-in-out',
                  //   'transition': '.8s ease-in-out ', 
                    // 'opacity': '0',
                  'color': 'black' ,
                  'float': 'rigth',
                  'padding-left': '0.5%' ,
                  'font-size' : '12px' ,
                  'float': 'right',
              
                
                   }) ;
                   $("#monci").css({
                     //  '-webkit-transition': '.8s ease-in-out',
                     //  'transition': '.8s ease-in-out ', 
                      // 'opacity': '0',
                   //   'display': 'none' ,
                   'float': 'left',
                  
                     }) ;
      
                     $('#monci').width((X*1.5)/100)
                     $('#monci').width((Y*1.5)/100)
             
                 
                
      
              }
      
        function cssmenuResponse(){
          $('#menu').css({
          
              
              'position':'absolute',
              'float':'left',
             // 'margin-top':'12%',
               'left':'16%',
               'top':'11.8%',
              
                   
              });
              $('#menu').width((X*80)/100)
         
              $('#menu').height((Y*4)/100)
      
      
              $("#main").css({
                                                                                       
                        
              //  'position': 'absolute' ,
            
                
               });
              // $('#main').width((X*46)/100)
      
               $('#main').height((Y*4)/100)
      
              $("#transition").css({
          
                'position': 'absolute' ,
       
      
               'margin-top':'1%',
      
                
               });
              $("#transition").width((7*X)/100)
              $("#transition").height((3.5*Y)/100)
     
              $(".n1").css({
      
                'cursor':'pointer',
       'height':'12px',
         'padding-left':'2px',
         'padding-right':'2px',
             
           'margin-top': '8px',
           'display': 'inline-block',
           'list-style-type': 'none',
           'background-color': 'transparent' ,
          // 'color': '#239aff' ,
          'color': 'black' ,
           'font-size' : '12px' ,
           'font-style' : 'italic' ,
           'margin-left': '5px',
                   });
      
              $(".n1").eq(0).css({
               
                
       'border-top': '1px solid black',
       'border-left': '1px solid black',
       'border-right': '1px solid black',
       'background-color': 'white' ,
          
               });
      
               $(".page , .pagem").css({
               
                'display': 'none' ,
       
               });
              
               $(".page").eq(0).css({
               
                'display': 'block' ,
       
          
               });
      
              
               
               $("#moncidiv").click(function(){
                $(".page").css({
               
                  'display': 'none' ,
         
            
                 });
      
                 $(".pagem").css({
               
                  'display': 'block' ,
         
            
                 });
                 if(clientConnected == true ) {
                  $("#comptea").css({
                   'display': 'none',
                     }) ; 
                 
                   $("#compteb").css({
                     'display': 'block',
                     
                    
                     }) ; 
                   
                 }
                 $(".n1").css({
               
                
                  'border': 'none',
                     
                  'background-color': '' ,
                     
                          });
      
                 $("#moncidiv").css({
               
                
                  'border-top': '1px solid black',
                  'border-left': '1px solid black',
                  'border-right': '1px solid black',
                  'background-color': 'white' ,
                     
                          });
      
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
              
                
                $(".n1 , #moncidiv").css({
                                                                               
                
                       'border': 'none',
                        
                   
                        
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
               $(".pagem").css({
               
                'display': 'none' ,
       
          
               });
                                   $(".page").eq(i).css({
                                   
                                    'display': 'block' ,
                           
                              
                                   });
                      });
      
                      
                     
                     
                        
                
                
                        
                
         
      
      }
      
function cssmenu(){
    $('#menu').css({
    
       
        'float':'left',
     
        //'border-bottom':'',
         'margin-top':'3%',
         'margin-left':'5%',
        
      //  'border-radius':'15%',
        
        
  //'position': 'absolute',
  
  //'top': '10%',
  //'left': '50%',
    //        '-ms-transform': 'translateX(-50%)',
      //      'transform': 'translateX(-50%)',
           // 'position': 'relative' ,

       //     'background-image':'linear-gradient(white , yellow)',
          
        });
        $('#menu').width((X*55)/100)
   
        $('#menu').height((Y*4)/100)


        $("#main").css({
                                                                                 
                  
        //  'position': 'absolute' ,
        
         });
         $('#main').width((X*55)/100)

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

         $(".page , .pagem").css({
         
          'display': 'none' ,
 
    
         });
        
         $(".page").eq(0).css({
         
          'display': 'block' ,
 
    
         });

        
         
         $("#moncidiv").click(function(){
          $(".page").css({
         
            'display': 'none' ,
   
      
           });

           $(".pagem").css({
         
            'display': 'block' ,
   
      
           });
           if(clientConnected == true ) {
            $("#comptea").css({
             'display': 'none',
               }) ; 
           
             $("#compteb").css({
               'display': 'block',
               
              
               }) ; 
             
           }
           $(".n1").css({
         
          
            'border': 'none',
               
            'background-color': '' ,
               
                    });

           $("#moncidiv").css({
         
          
            'border-top': '1px solid black',
            'border-left': '1px solid black',
            'border-right': '1px solid black',
            'background-color': 'white' ,
               
                    });

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
        
          
          $(".n1 , #moncidiv").css({
                                                                         
          
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
         $(".pagem").css({
         
          'display': 'none' ,
 
    
         });
                             $(".page").eq(i).css({
                             
                              'display': 'block' ,
                     
                        
                             });
                });

                
               
               
                  
          
          
                  
          
   

}

function cssHeaderc(){
    $("#headerc").css({
    'background':'rgba(233,0,0,0.5)',
    
  });
  $('#headerc').width( a)
  $('#headerc').height((Y*9)/100)
  
  }

  function csslogoRespnonse(){
    $('#logo').css({
   //   'position': 'absolute',
   //   'top': '3%',
   'position': 'absolute',
    'margin-left': '2%',
   // 'margin-top': '2%',
    'float': 'left',
   
   // 'box-shadow': '1px 1px 3px #555',
    });
  
    $('#logo').width((X*18)/100)
      
  //  $('#logo').height((Y*8)/100)
  
  }

  function csslogo(){
    $('#logo').css({
   //   'position': 'absolute',
   //   'top': '3%',
    'margin-left': '9%',
    'float': 'left',
    });
  
    $('#logo').width((X*9)/100)
      
    $('#logo').height((Y*8)/100)
  
  }
  