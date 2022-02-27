
 //cssClumn()

 

 
 if(is.ie()){
  cssClumnIe()
 }
 if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
  cssMenubResponse()
  cssClumnVenteResponse()
 } else {
  cssMenub()
  cssClumnVente()
  
}
 

function cssClumnResponse(){
 
    //     $("#divventeb").height((Y*72)/100)
       $(".divlab").css({
       //   'position': 'absolute',
          'margin-top': '2%',
         // 'width': '100%',
       
               });
             $('.divlab').width((X*25)/100)
           // $('.divlab').height((Y*0)/100)
       

         

             
           $(".divlaba").css({
             'float': 'left',
             'font-size': '8px',
            // 'color': 'black',
             'text-decoration': 'underline',
             
                  });
                  $(".divlabb").css({
                    'float': 'right',
                   
                    'font-size': '10px',
                    'font-style': 'italic',
                    'font-weight': 'bold',
                    'box-shadow': '1px 1px 3px #555',
                         });
                 
                        
 }

function cssClumn(){
  $("#divventeb").css({
    //'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
   // 'width': '100%',
   // 'height': '100%',
         });
    //     $("#divventeb").height((Y*72)/100)
       $(".divlab").css({
          'margin': 'auto',
          'margin-top': '2%',
         
               });
             $('.divlab').width((X*20)/100)
           // $('.divlab').height((Y*0)/100)
       

           $(".rowb").css({
          //  'margin': 'auto',
           // 'margin-top': '2%',
             //   'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12) inset',
                'box-shadow': '0 0 35px rgba(233,0,0,0.3) inset',
             
                'padding-left': '2%',
                'padding-top': '2%',
                 });
          //     $('.rowb').width((X*20)/100)
             // $('.divlab').height((Y*0)/100)
         

             
           $(".divlaba").css({
             'float': 'left',
             'font-size': '12px',
            // 'color': 'black',
             'text-decoration': 'underline',
             
                  });
                  $(".divlabb").css({
                    'float': 'right',
                    'font-size': '14px',
                    'font-style': 'italic',
                    'font-weight': 'bold',
                    'box-shadow': '1px 1px 3px #555',
                         });
                 
                        
 }

 function cssUpdateItemMenu(i){
  $(".n1b").css({
                                                                   
    
    'border': 'none',
     

     
     'font-size': '18px' ,
     'background':'rgba(233,0,0,0.1)',
     'box-shadow': '1px 1px 3px #555',
    }); 

    $(".n1b").eq(i).css({
    
    // 'border-top': '1px solid black',
    // 'border-left': '1px solid black',
     //'border-right': '1px solid black',
     'background-color': 'white' ,
     'box-shadow': '1px 1px 3px #555 inset',
               });
}

function cssUpdateItemMenuResonse(i){
 
  $(".icomenuv").eq(i).css({
    'box-shadow': '1px 1px 3px #555 inset'
        });

  $('.icomenuv').hover(function(){
   
    
    var a  = $(this).parent().index()
    $(".icomenuv").eq(a).css({
         'box-shadow': '1px 1px 3px #555 inset',
        
             });

    },function(){
      $(".icomenuv").css({
        'box-shadow': '1px 1px 3px #555'
         
            });
            
            

  });
}

function cssClumnVenteb(){
    
    
  
    
  $(".icon-wrapperb").css({
   'position': 'relative',
    'margin': 'auto',
  
    'height': '6em',
    'width': '6em',
    
   
    'display': 'grid',
    'place-items': 'center',
    'transition': '0.5s',
         });
 
        
                $(".cardb").css({
                  'display': 'grid',
                   'place-items': 'center',
              //     'border': '1px solid blue',
                   'padding': '0',
                   //'margin': '2',
                   'box-sizing': 'border-box',
                   'font-family': '"Poppins", sans-serif'
                   
                        });

                        $(".rowb").css({
                          'display': 'flex',
                          'flex-wrap': 'wrap',
                          //'float': 'right',
                          'margin': 'auto',
                          'width':'70%',
                         
                                });

                $(".columnb").css({
                  'width': '90%',
                  'height': '100%',
                 // 'border': '1px solid red',
                  'padding':'2em 0em 0em 1em',
                  'text-align': 'center',
                        });

                        $(".cardb").css({
                          'width': '100%',
                          'height':'100%',
                          'padding': '1em 0',
                          'background': 'linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%)',
                          'background-size': '100% 200%',
                          'background-position': '0 2.5%',
                          'border-radius': '5px',
                          'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                          'cursor': 'pointer',
                          'transition': '0.5s',
                          'box-shadow': '1px 1px 3px #555' ,
                                });
                

                       



$("#divventeb").css({
  'padding': '1%' ,
 
  //'width':'100%',
 // 'height':'500px',
       });

$(".columnb").css({
  //'border': '1px solid blue',
  'flex': '0% 10% 30%',
  'max-width': '30%',
       });
  //     $("#divventeb").height((Y*72)/100)
    
  $(".labventeb").css({
    
    'color': 'black',
    'font-size': '12px',
    'font-style': 'italic',
    'font-weight': 'bold',
    'line-height': '1.6',
    'letter-spacing': '0.03em',
        });

      

   //   $(".card").hover(function(){
     //   $(".card").css({
     //     'background-position': '0 100%',
     //     'color': 'black',
    //          });
     // }); 

     $('.cardb').hover(function(){
   
    
      var a  = $(this).parent().index()
      $(".cardb").eq(a).css({
           'background-position': '0 100%',
            'color': 'black',
               });
  
               $(".divlabb").eq(a).css({
    
                'color': 'blue',
                     });
  
      },function(){
        $(".cardb").css({
          'background-position': '0 2.5%',
          // 'color': 'blue',
              });
              $(".divlabb").css({
    
                'color': 'black',
                     });
              

    });
        
        
}
function cssClumnVente(){
    
    
  
    
  $(".icon-wrapper").css({
   'position': 'relative',
    'margin': 'auto',
  
    'height': '6em',
    'width': '6em',
    
   
    'display': 'grid',
    'place-items': 'center',
    'transition': '0.5s',
         });
 
        
                $(".card").css({
                  'display': 'grid',
                   'place-items': 'center',
              //     'border': '1px solid blue',
                   'padding': '0',
                   //'margin': '2',
                   'box-sizing': 'border-box',
                   'font-family': '"Poppins", sans-serif'
                   
                        });

                        $(".row").css({
                          'display': 'flex',
                          'flex-wrap': 'wrap',
                          //'float': 'right',
                          'margin': 'auto',
                          'width':'70%',
                         
                                });

                $(".column").css({
                  'width': '90%',
                  'height': '100%',
                 // 'border': '1px solid red',
                  'padding':'2em 0em 0em 1em',
                  'text-align': 'center',
                        });

                        $(".card").css({
                          'width': '100%',
                          'height':'100%',
                          'padding': '1em 0',
                          'background': 'linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%)',
                          'background-size': '100% 200%',
                          'background-position': '0 2.5%',
                          'border-radius': '5px',
                          'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                          'cursor': 'pointer',
                          'transition': '0.5s',
                          'box-shadow': '1px 1px 3px #555' ,
                                });
                

                       



$("#divvente").css({
  'padding': '1%' ,
 
  //'width':'100%',
 // 'height':'500px',
       });

$(".column").css({
  //'border': '1px solid blue',
  'flex': '0% 10% 30%',
  'max-width': '30%',
       });
  //     $("#divventeb").height((Y*72)/100)
    
  $(".labvente").css({
    
    'color': 'black',
    'font-size': '12px',
    'font-style': 'italic',
    'font-weight': 'bold',
    'line-height': '1.6',
    'letter-spacing': '0.03em',
        });

      

   //   $(".card").hover(function(){
     //   $(".card").css({
     //     'background-position': '0 100%',
     //     'color': 'black',
    //          });
     // }); 

     $('.card').hover(function(){
   
    
      var a  = $(this).parent().index()
      $(".card").eq(a).css({
           'background-position': '0 100%',
            'color': 'black',
               });
  
               $(".labvente").eq(a).css({
    
                'color': 'blue',
                     });
  
      },function(){
        $(".card").css({
          'background-position': '0 2.5%',
           'color': 'blue',
              });
              $(".labvente").css({
    
                'color': 'black',
                     });
              

    });
        
        
}

function cssClumnVente(){
    
    
  
    
  $(".icon-wrapper").css({
   'position': 'relative',
    'margin': 'auto',
  
    'height': '6em',
    'width': '6em',
    
   
    'display': 'grid',
    'place-items': 'center',
    'transition': '0.5s',
         });
 
        
                $(".card").css({
                  'display': 'grid',
                   'place-items': 'center',
              //     'border': '1px solid blue',
                   'padding': '0',
                   //'margin': '2',
                   'box-sizing': 'border-box',
                   'font-family': '"Poppins", sans-serif'
                   
                        });

                        $(".row").css({
                          'display': 'flex',
                          'flex-wrap': 'wrap',
                          //'float': 'right',
                          'margin': 'auto',
                          'width':'70%',
                         
                                });

                $(".column").css({
                  'width': '90%',
                  'height': '100%',
                 // 'border': '1px solid red',
                  'padding':'2em 0em 0em 1em',
                  'text-align': 'center',
                        });

                        $(".card").css({
                          'width': '100%',
                          'height':'100%',
                          'padding': '1em 0',
                          'background': 'linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%)',
                          'background-size': '100% 200%',
                          'background-position': '0 2.5%',
                          'border-radius': '5px',
                          'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                          'cursor': 'pointer',
                          'transition': '0.5s',
                          'box-shadow': '1px 1px 3px #555' ,
                                });
                

                       



$("#divvente").css({
  'padding': '1%' ,
 
  //'width':'100%',
 // 'height':'500px',
       });

$(".column").css({
  //'border': '1px solid blue',
  'flex': '0% 10% 30%',
  'max-width': '30%',
       });
  //     $("#divventeb").height((Y*72)/100)
    
  $(".labvente").css({
    
    'color': 'black',
    'font-size': '12px',
    'font-style': 'italic',
    'font-weight': 'bold',
    'line-height': '1.6',
    'letter-spacing': '0.03em',
        });

      

   //   $(".card").hover(function(){
     //   $(".card").css({
     //     'background-position': '0 100%',
     //     'color': 'black',
    //          });
     // }); 

     $('.card').hover(function(){
   
    
      var a  = $(this).parent().index()
      $(".card").eq(a).css({
           'background-position': '0 100%',
            'color': 'black',
               });
  
               $(".labvente").eq(a).css({
    
                'color': 'blue',
                     });
  
      },function(){
        $(".card").css({
          'background-position': '0 2.5%',
           'color': 'blue',
              });
              $(".labvente").css({
    
                'color': 'black',
                     });
              

    });
        
        
}

function cssClumnVenteResponse(){
    
    
  $(".icon-wrapper").css({
   'position': 'relative',
    'margin': 'auto',
  
    'height': '6em',
    'width': '6em',
    
   
    'display': 'grid',
    'place-items': 'center',
    'transition': '0.5s',
         });
 
        
                $(".card").css({
                  'display': 'grid',
                   'place-items': 'center',
              //     'border': '1px solid blue',
                   'padding': '0',
                   //'margin': '2',
                   'box-sizing': 'border-box',
                   'font-family': '"Poppins", sans-serif'
                   
                        });

                        $(".row").css({
                          'position': 'absolute',
                          'top': '50%',
                          'left': '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            'transform': 'translate(-50%, -50%)',
                          
                          'display': 'flex',
                          'flex-wrap': 'wrap',
                          //'float': 'right',
                          'margin': 'auto',
                          'width':'100%',
                        
                                });

                $(".column").css({
                  'width': '90%',
                  'height': '100%',
                 // 'border': '1px solid red',
                  'padding':'1em 0em 0em 1em',
                  'text-align': 'center',
                        });

                        $(".card").css({
                          'width': '100%',
                          'height':'100%',
                          'padding': '1em 0',
                          'background': 'linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%)',
                          'background-size': '100% 200%',
                          'background-position': '0 2.5%',
                          'border-radius': '5px',
                          'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                          'cursor': 'pointer',
                          'transition': '0.5s',
                          'box-shadow': '1px 1px 3px #555' ,
                                });
                

                       



$("#divvente").css({
 // 'padding': '1%' ,
 
  //'width':'100%',
 // 'height':'500px',
       });

$(".column").css({
  //'border': '1px solid blue',
  'flex': '0% 10% 30%',
  'max-width': '28%',
       });
  //     $("#divventeb").height((Y*72)/100)
    
  $(".labvente").css({
    
    'color': 'black',
    'font-size': '8px',
    'font-style': 'italic',
    'font-weight': 'bold',
    'line-height': '1.6',
    'letter-spacing': '0.03em',
        });

      

   //   $(".card").hover(function(){
     //   $(".card").css({
     //     'background-position': '0 100%',
     //     'color': 'black',
    //          });
     // }); 

     $('.card').hover(function(){
   
    
      var a  = $(this).parent().index()
      $(".card").eq(a).css({
           'background-position': '0 100%',
            'color': 'black',
               });
  
               $(".labvente").eq(a).css({
    
                'color': 'blue',
                     });
  
      },function(){
        $(".card").css({
          'background-position': '0 2.5%',
           'color': 'blue',
              });
              $(".labvente").css({
    
                'color': 'black',
                     });
              

    });
        
        
}


function cssClumnVentebResponse(){
    
    
  
    
  $(".icon-wrapperb").css({
   'position': 'relative',
    'margin': 'auto',
  
    'height': '4em',
    'width': '4em',
    
   
    'display': 'grid',
    'place-items': 'center',
    'transition': '0.5s',
         });
 
        
                $(".cardb").css({
                  'display': 'grid',
                   'place-items': 'center',
              //     'border': '1px solid blue',
                   'padding': '0',
                   //'margin': '2',
                   'box-sizing': 'border-box',
                   'font-family': '"Poppins", sans-serif'
                   
                        });

                        $(".rowb").css({
                          'position': 'absolute',
                          'top': '50%',
                          'left': '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            'transform': 'translate(-50%, -50%)',
                          
                          'display': 'flex',
                          'flex-wrap': 'wrap',
                          //'float': 'right',
                          'margin': 'auto',
                          'width':'100%',
                        
                                });

                $(".columnb").css({
                  'width': '90%',
                  'height': '100%',
                 
                  'padding':'1em 0em 0em 1em',
                  'text-align': 'center',
                        });

                        $(".cardb").css({
                          'width': '100%',
                          'height':'100%',
                          'padding': '1em 0',
                          'background': 'linear-gradient(#ffffff 50%, rgba(233,0,0,0.1) 50%)',
                          'background-size': '100% 200%',
                          'background-position': '0 2.5%',
                          'border-radius': '5px',
                          'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                          'cursor': 'pointer',
                          'transition': '0.5s',
                          'box-shadow': '1px 1px 3px #555' ,
                          'border': '1px solid red',
                                });
                

                       



$("#divventeb").css({
 // 'padding': '1%' ,
 
  //'width':'100%',
 // 'height':'500px',
       });

$(".columnb").css({
  //'border': '1px solid blue',
  'flex': '0% 10% 30%',
  'max-width': '25%',
       });
  //     $("#divventeb").height((Y*72)/100)
    
  $(".labventeb").css({
    
    'color': 'black',
    'font-size': '8px',
    'font-style': 'italic',
    'font-weight': 'bold',
    'line-height': '1.6',
    'letter-spacing': '0.03em',
        });

      

   //   $(".card").hover(function(){
     //   $(".card").css({
     //     'background-position': '0 100%',
     //     'color': 'black',
    //          });
     // }); 

     $('.cardb').hover(function(){
   
    
      var a  = $(this).parent().index()
      $(".cardb").eq(a).css({
           'background-position': '0 100%',
            'color': 'black',
               });
  
               $(".labventeb").eq(a).css({
    
                'color': 'blue',
                     });
  
      },function(){
        $(".cardb").css({
          'background-position': '0 2.5%',
           
              });
              $(".labventeb").css({
    
                'color': 'black',
                     });
              

    });
        
   
}

function cssCurrentClumn(i){
  $(".cardb").eq(i).css({
         'border': '2px solid blue',
       
         
           });

          
}
  function cssClumnIe(){
    
    
   
  
    $("#divvente").css({
      'padding': '1%' ,
      
           });

    $(".column").css({
      'border': '1px solid blue',
      'flex':' 0 10% 30%',
      'max-width': '30%',
           });
      //     $("#divventeb").height((Y*72)/100)
        
  }
  function cssReseaudetail(){
    $(".divannonceurb").css({
    
    
      }) ;

    $(".imgrmd , .imgrid , .imgrtd , .imgrfd , .reseaubd").width((X*4)/100)
      

    $(".imgrmd , .imgrid , .imgrtd , .imgrfd ").css({
    
        'margin': '3%',
        }) ;
        $(".imgrfd").css({
    
          'margin-left': '10%',
          }) ;


    $(".annonceuremaild").css({
    
        //  'padding-left': '23%' ,
          'cursor': 'pointer' ,
          'font-size': '14px',
          }) ;

          $(".imgannonced").css({
    
            'position': 'absolute',
            'top': '80%',
            'left': '50%',
            '-ms-transform': 'translate(-50%,-50%)',
            'transform': 'translate(-50%,-50%)',
              'border-radius': '50%' ,
              
              }) ;

              $('.imgannonced').width((X*20)/100)
               $('.imgannonced').height((Y*20)/100)
          

          $(".reseauad").css({
    
            //  'padding-left': '23%' ,
            'margin': '12%',
          //  'border': '1px solid black',
            'box-shadow': '1px 1px 3px #555',
           // 'background':'rgba(0,191,255,0.3)',
              }) ;

              $(".annoncnomd").css({
    
                'position': 'absolute',
                'top': '55%',
                'left': '50%',
                '-ms-transform': 'translate(-50%,-50%)',
                'transform': 'translate(-50%,-50%)',
                'font-size': '18px',
                'font-style': 'italic',
                'font-weight': 'bold',
                  
                  }) ;
                  $(".annonceurtel").css({
    
                 //  'position': 'absolute',
                 //   'top': '55%',
                 //   'left': '50%',
                 //  '-ms-transform': 'translateX(-50%)',
                 //   'transform': 'translateX(-50%)',
                    'margin-left': '3%',
                    'margin-left': '5%',
                    'font-size': '12px',
                    'font-style': 'italic',
                    'font-weight': 'bold',
                      
                      }) ;
                      $(".spananonce").css({
    
                     
                        'color': 'black',
                          
                          }) ;
                      

                      $(".annonceuremail").css({
    
                      //  'position': 'absolute',
                      //     'top': '55%',
                      //    'left': '40%',
                      //    '-ms-transform': 'translateX(-50%)',
                       //    'transform': 'translateX(-50%)',
                       'margin-left': '3%',
                      'margin-left': '5%',
                        'font-size': '12px',
                        'font-style': 'italic',
                        'font-weight': 'bold',
                          
                          }) ;

                  
                  

$("#divteletemailcontactd").css({
    
               'position': 'relative',
              //  'top': '20%',
              //  'left': '50%',
              //  '-ms-transform': 'translate(-50%,-50%)',
              //  'transform': 'translate(-50%,-50%)',
             // 'width': '100%',
             
              'margin-top': '20%',
                'font-size': '13px',
               // 'font-style': 'italic',
                'color': 'rgb(0,0,0,0.5)',
                'font-weight': 'bold',
                'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
               
                              
                  }) ;

              //    $('#divteletemailcontactd').height((Y*10)/100)
          

                  $(".contactermoi").css({
    
                    'position': 'absolute',
                    'top': '5%',
                    'left': '50%',
                    '-ms-transform': 'translate(-50%,-50%)',
                    'transform': 'translate(-50%,-50%)',
                    'font-size': '15px',
                    'font-style': 'italic',
                    'font-weight': 'bold',
                      
                      }) ;
              
}

 
  
  function cssDetailContact(){
    $("#detailglobalcontact").css({
     // 'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
      
           });
           $('#detailglobalcontact').width((X*80)/100)
            $('#detailglobalcontact').height((Y*75)/100)
       
            $("#imgcntactdet").css({
              'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
              'float': 'left',
              'position': 'relative',
                   });
                   $('#imgcntactdet').width((X*30)/100)
                    $('#imgcntactdet').height((Y*65)/100)

                    $("#clientctcdetail").css({
                      'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                      'float': 'right',
'border': '1px solid blue',

                      'position': 'relative',
                           });
                           $('#clientctcdetail').width((X*27)/100)
                            $('#clientctcdetail').height((Y*65)/100)

                            $("#pcontactdet").css({
                             
                              'box-shadow': '1px 1px 3px #555',
                            //  'margin': 'auto',
                              'position': 'absolute',
                   'top': '35%',
                   'left': '50%',
                   '-ms-transform': 'translate(-50%,-50%)',
                   'transform': 'translate(-50%,-50%)',
                                   });
                                   $('#pcontactdet').width((X*25)/100)
                                    $('#pcontactdet').height((Y*35)/100)
        

                                    $("#detailpri").css({
                                      'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
                                      'font-size': '18px',
                                      'font-style': 'italic',
                                      'font-weight': 'bold',
                                      'box-shadow': '1px 1px 3px #555',
                                      'position': 'absolute',
                   'top': '80%',
                   'left': '50%',
                   '-ms-transform': 'translate(-50%,-50%)',
                   'transform': 'translate(-50%,-50%)',
                                           });
                                        //   $('#detailpri').width((X*35)/100)
                                         //   $('#detailpri').height((Y*65)/100)
                
                            

               
            
  }
  
  
  function cssMenubResponse(){
    $("#mainb").css({
                                                                                 
                  
  //   'float': 'left' ,
  //    'margin-left': '-12%',
  //    'margin-top': '10%',
  'position': 'absolute',
  'top': '20%',
  'left': '50%',
    '-ms-transform': 'translate(-50%, -50%)',
    'transform': 'translate(-50%, -50%)',

    //'border': '1px solid blue',
      //'background':'rgba(0,0,0,0)',
     // 'background':'white',
      'border-radius-top-left': '20%',
      'border-radius-top-right': '20%',
     // 'box-shadow': '1px 1px 3px #555 inset',
    //  'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
          
       });
       $('#mainb').width((X*83)/100)

       $('#mainb').height((Y*5)/100)

       $(".icomenuv").css({
                                                                                 
                  
        //'float': 'left' ,
        'border-radius': '20px',
      'box-shadow': '1px 1px 3px #555',
       //  'margin-left': '-12%',
           
          });
          $('.icomenuv').width((X*8)/100)
   
          $('.icomenuv').height((Y*4)/100)
   
     
          $(".labelmenuv").css({
         //'float': 'left' ,
          'display': 'none',
           'margin': '2%',
         //  'border': '1px solid black',
              });

      $(".n1b").css({

        'cursor':'pointer',
      //  'float':'left',

 //'padding-left':'5px',
//'padding-right':'5px',
  //   'border': '1px solid black',
 //  'margin-top': '8px',
   'display': 'inline-block',
   'list-style-type': 'none',
   //'background-color': 'transparent' ,
  // 'color': '#239aff' ,
 // 'background':'rgba(233,0,0,0.1)',

 // 'background':'rgba(0,0,0,0.1)',
//  'box-shadow': '1px 1px 3px #555',
//  'color': 'black' ,
 // 'border-radius': '5%' ,
 //'border-radius': '20px' ,
 //  'font-size' : '12px' ,
 //  'font-style' : 'italic' ,
 //  'margin-left': '3%',
           });

        //   $('.n1b').width((X*8)/100)
   
          // $('.n1b').height((Y*4)/100)
   
           
      $(".n1b").eq(0).css({
       
        
//'border-top': '1px solid black',
//'border-left': '1px solid black',
//'border-right': '1px solid black',
//'background-color': 'white' ,
//'box-shadow': '1px 1px 3px #555 inset',
       });

       $(".n1b").hover(function(){

        var i = $(this).index()
        $(".n1b").css({
                                                                       
        
          'border': 'none',
           
      
           
       //    'font-size': '18px' ,
         //  'background':'rgba(233,0,0,0.1)',
       //    'box-shadow': '1px 1px 3px #555',
          }); 

          $(".n1b").eq(i).css({
          
          // 'border-top': '1px solid black',
          // 'border-left': '1px solid black',
           //'border-right': '1px solid black',
       //    'background-color': 'white' ,
         //  'box-shadow': '1px 1px 3px #555 inset',
                     });
      
      });

      $(".n1b").click(function(){

        var i = $(this).index()
      
      
        if(i==0){
          createTabVenteDetail(fruietlegume)
  
        }
        else if(i==1){
          createTabVenteDetail( electromenager)
  
        }
        else if(i==2){
          createTabVenteDetail( elevage)
  
        }
        else if(i==3){
          createTabVenteDetail( bureatique)
  
        }
        else if(i==4){
          createTabVenteDetail( cosmetique)
  
        }
        else if(i==5){
          createTabVenteDetail( voiture)
  
        }
        
        else if(i==6){
          createTabVenteDetail( immobilier)
  
        }

        else if(i==7){
          createTabVenteDetail( alimentaire)
  
        }
        else if(i==8){
          createTabVenteDetail( piece)
  
        }
        
        
             
      
              });

              
             
             
                   
      }
  function cssMenub(){
    $("#mainb").css({
                                                                                 
                  
     'float': 'left' ,
      'margin-left': '2%',
      'margin-top': '10%',
    //  'padding': 'auto',
  //  'border': '1px solid blue',
      //'background':'rgba(0,0,0,0)',
      'background':'white',
      'border-radius-top-left': '20%',
      'border-radius-top-right': '20%',
      'box-shadow': '1px 1px 3px #555 inset',
    //  'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
          
       });
       $('#mainb').width((X*20)/100)

       $('#mainb').height((Y*48)/100)

       $(".icomenuv").css({
                                                                                 
                  
        'float': 'left' ,
        'border-radius': '20px',
      'box-shadow': '1px 1px 3px #555',
       //  'margin-left': '-12%',
           
          });
          $('.icomenuv').width((X*4)/100)
   
          $('.icomenuv').height((Y*4)/100)
   
     
          $(".labelmenuv").css({
         'float': 'left' ,
          // 'margin': 'auto',
           'margin-left': '8%',
         //  'border': '1px solid black',
              });

      $(".n1b").css({

        'cursor':'pointer',
        'float':'left',

 //'padding-left':'5px',
//'padding-right':'5px',
  //   'border': '1px solid black',
   'margin-top': '8px',
  // 'display': 'inline-block',
   'list-style-type': 'none',
   //'background-color': 'transparent' ,
  // 'color': '#239aff' ,
  'background':'rgba(233,0,0,0.1)',

 // 'background':'rgba(0,0,0,0.1)',
  'box-shadow': '1px 1px 3px #555',
  'color': 'black' ,
 // 'border-radius': '5%' ,
 'border-radius': '20px' ,
   'font-size' : '18px' ,
   'font-style' : 'italic' ,
   'margin-left': '3%',
           });

           $('.n1b').width((X*19)/100)
   
          // $('.n1b').height((Y*4)/100)
   
           
      $(".n1b").eq(0).css({
       
        
//'border-top': '1px solid black',
//'border-left': '1px solid black',
//'border-right': '1px solid black',
'background-color': 'white' ,
'box-shadow': '1px 1px 3px #555 inset',
       });

       $(".n1b").hover(function(){

        var i = $(this).index()
        $(".n1b").css({
                                                                       
        
          'border': 'none',
           
      
           
       //    'font-size': '18px' ,
           'background':'rgba(233,0,0,0.1)',
       //    'box-shadow': '1px 1px 3px #555',
          }); 

          $(".n1b").eq(i).css({
          
          // 'border-top': '1px solid black',
          // 'border-left': '1px solid black',
           //'border-right': '1px solid black',
           'background-color': 'white' ,
         //  'box-shadow': '1px 1px 3px #555 inset',
                     });
      
      });

      $(".n1b").click(function(){

        var i = $(this).index()
      
      
        if(i==0){
          createTabVenteDetail(fruietlegume)
  
        }
        else if(i==1){
          createTabVenteDetail( electromenager)
  
        }
        else if(i==2){
          createTabVenteDetail( elevage)
  
        }
        else if(i==3){
          createTabVenteDetail( bureatique)
  
        }
        else if(i==4){
          createTabVenteDetail( cosmetique)
  
        }
        else if(i==5){
          createTabVenteDetail( voiture)
  
        }
        
        else if(i==6){
          createTabVenteDetail( immobilier)
  
        }

        else if(i==7){
          createTabVenteDetail( alimentaire)
  
        }
        else if(i==8){
          createTabVenteDetail( piece)
  
        }
        
        $(".n1b").css({
                                                                       
        
               'border': 'none',
                
           
                
                'font-size': '18px' ,
                'background':'rgba(233,0,0,0.1)',
                'box-shadow': '1px 1px 3px #555',
               }); 

               $(".n1b").eq(i).css({
               
               // 'border-top': '1px solid black',
               // 'border-left': '1px solid black',
                //'border-right': '1px solid black',
                'background-color': 'white' ,
                'box-shadow': '1px 1px 3px #555 inset',
                          });
                         
      
              });

              
             
             
                   
  }

