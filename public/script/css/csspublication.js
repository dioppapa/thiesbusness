





cssRemerciment()
cssNew()
cssNewB()
if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
     
  cssDivpublicationResponse()
  cssPublicationResponse()
  cssannonceResponse()
  cssReseauaResponse()
  cssannoncpResponse()
 } else {
  cssDivpublication()
  cssPublication()
  cssannonce()
  cssReseaua()
  cssannoncp()
}

function cssDivpublicationResponse(){
    
    
 // $(".page").eq(0).css({
 //   'border':'1px solid red',
 //   'padding-bottom':'1%',
   
 // });
  

 $("#divpubglobale").css({
  //  'background': 'linear-gradient(#ffffff , rgba(0,0,0,0.5))',
  //'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
 
  // 'border': '1px solid blue',
   //   'border-radius': '15%',
    //  'margin-left': '18%',
   // 'margin': 'auto',
    //  'margin-top': '2%',
  //    'overflow': 'auto',
   // 'display': 'grid',
   // 'grid-template-columns': 'repeat(auto-fit, minmax(360px, lfr))',
   'margin-top': '5%',
      }) ;
    // $('#divpubglobale').width((X*97)/100)
    //  $('#divpubglobale').height((Y*85)/100)

  }


function cssDivpublication(){
    
   $("#divpubglobale").css({
    //  'background': 'linear-gradient(#ffffff , rgba(0,0,0,0.5))',
    'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
 
     //   'border-radius': '15%',
        'margin-left': '18%',
      /// 'margin-top': '16%',
       
      'display': 'grid',
      'grid-template-columns': 'repeat(auto-fit, minmax(360px, lfr))',
         
        }) ;
        $('#divpubglobale').width((X*67)/100)
      //  $('#divpubglobale').height((Y*80)/100)
 
    }
    function cssPublicationResponse(){
    
      $(".divpublication").css({
        
          'border': '1px solid #bafff0',
          'position': 'relative',
         // 'border-radius': '15%',
          'margin': '2%',
          'margin-left': '3%',
          'position': 'relative',
         // 'background': 'linear-gradient(#ffffff , rgba(0,0,0,0.5))',
       //   'background': ' rgba(0,0,0,0.1)',
          //'box-shadow': '1px 1px 3px #555 inset',
          'box-shadow': '1px 1px 3px #555',
         
          }) ;
         // $('.divpublication').width((X*63)/100)
          $('.divpublication').height((Y*18)/100)
   

         

          $(".divpublimage").css({
        
                      
             // 'border-radius': '15%',
              'margin': '1%',
              'float': 'left',
              'width': '63%',
              'height': '97%',
              }) ;
            //  $('.divpublimage').width((X*43)/100)
             // $('.divpublimage').height((Y*32)/100)
              
            
           
                  $(".divpublimageb").css({
                  
                    'position': 'absolute',
                            // 'border-radius': '15%',
                        'margin': '1%',
                        'right': '1%',
                         'float': 'right',
                         'width': '35%',
                         'height': '95%',
                      }) ;
                   //   $('.divpublimageb').width((X*17)/100)
                    //  $('.divpublimageb').height((Y*30)/100)
               
                  $(".tabpubimga").css({
        
                   // 'border': '1px solid rgba(233,0,0,0.5)',
                    'box-shadow': '1px 1px 3px #555',
                    'border': '1px solid red',
                     'border-radius': '5%',
                      'margin': '0.5%',
                      'float': 'left',
                      'width': '55%',
                      'height': '96%',
                       
                    }) ;
              //    $('.tabpubimga').width((X*35)/100)
                 //     $('.tabpubimga').height((Y*25)/100)
               
  
                      $(".tabpubimgb").css({
        
                        'border': '1px solid red',
                          'border-radius': '5%',
                          'box-shadow': '1px 1px 3px #555',
         
                          'margin': '1%',
                        //  'margin-right': '3%',
                          'float': 'right',
                          'transform': 'rotate(45deg)',
                          'width': '40%',
                              'height': '40%',
                             
                           
                          }) ;
                        //  $('.tabpubimgb').width((X*10)/100)
                        //  $('.tabpubimgb').height((Y*12)/100)

                          $(".tabpubimgc").css({
                            
                            'border': '1px solid red',
                            'border-radius': '5%',
                            'box-shadow': '1px 1px 3px #555',
                            'border': '1px solid red',
                          'margin': '1%',
                              'float': 'right',
                              'transform': 'rotate(45deg)',
                              'width': '40%',
                              'height': '40%',
                               
                              }) ;
                          //    $('.tabpubimgc').width((X*10)/100)
                          //    $('.tabpubimgc').height((Y*12)/100)
                       
                   
      
                              $(".tabpubimgd").css({
        
                                'border': '1px solid red',
                                'border-radius': '5%',
                                'box-shadow': '1px 1px 3px #555',
                                'width': '70%',
                                'height': '40%',
                                'margin': '1%',
                                'float': 'right',
                            //    'transform': 'rotate(45deg)',
                            'margin-right': '-3%',
                               
                                 
                                }) ;
                              ////  $('.tabpubimgd').width((X*12)/100)
                              //  $('.tabpubimgd').height((Y*14)/100)

                                $(".tabpubimge").css({
        
                                  
                              'border-radius': '5%',
                              'box-shadow': '1px 1px 3px #555',
                              'border': '1px solid red',
                               'margin': '1%',
                               'margin-top': '7%',
                               //   'margin-right': '20%',
                                  'float': 'left',
                              //    'transform': 'rotate(45deg)',
                              'width': '70%',
                              'height': '40%',
                              'margin-left': '10%',
                                   
                                  }) ;
                             //$('.tabpubimge').width((X*12)/100)
                              //    $('.tabpubimge').height((Y*14)/100)
                           
                              cssAnnonceurResponse()
  
              
          
      }

    function cssPublication(){
    
        $(".divpublication").css({
          
          //  'border': '1px solid #bafff0',
           // 'border-radius': '15%',
            'margin': '1%',
            'position': 'relative',
           // 'background': 'linear-gradient(#ffffff , rgba(0,0,0,0.5))',
         //   'background': ' rgba(0,0,0,0.1)',
            //'box-shadow': '1px 1px 3px #555 inset',
            'box-shadow': '1px 1px 3px #555',
           
            }) ;
            $('.divpublication').width((X*63)/100)
            $('.divpublication').height((Y*35)/100)
     

           

            $(".divpublimage").css({
          
             // 'border': '1px solid blue',
               // 'border-radius': '15%',
                'margin': '1%',
                'float': 'left',
                 
                }) ;
                $('.divpublimage').width((X*43)/100)
                $('.divpublimage').height((Y*32)/100)
                
              
             
                    $(".divpublimageb").css({
          
                      //  'border': '1px solid red',
                       // 'border-radius': '15%',
                          'margin': '1%',
                           'float': 'right',
                       
                        }) ;
                        $('.divpublimageb').width((X*17)/100)
                        $('.divpublimageb').height((Y*30)/100)
                 
                    $(".tabpubimga").css({
          
                    //  'border': '1px solid rgba(233,0,0,0.5)',
                      'box-shadow': '1px 1px 3px #555',
           
                      'border-radius': '5%',
                        'margin': '0.5%',
                        'float': 'left',
                        
                         
                      }) ;
                        $('.tabpubimga').width((X*28)/100)
                        $('.tabpubimga').height((Y*30)/100)
                 
    
                        $(".tabpubimgb").css({
          
                     //       'border': '1px solid rgba(233,0,0,0.5)',
                            'border-radius': '5%',
                            'box-shadow': '1px 1px 3px #555',
           
                            'margin': '1%',
                            'float': 'right',
                            'transform': 'rotate(45deg)',
                       
                           
                             
                            }) ;
                            $('.tabpubimgb').width((X*10)/100)
                            $('.tabpubimgb').height((Y*12)/100)

                            $(".tabpubimgc").css({
          
                       //       'border': '1px solid rgba(233,0,0,0.5)',
                              'border-radius': '5%',
                              'box-shadow': '1px 1px 3px #555',
           
                            'margin': '1%',
                                'float': 'right',
                                'transform': 'rotate(45deg)',
                       
                               
                                 
                                }) ;
                                $('.tabpubimgc').width((X*10)/100)
                                $('.tabpubimgc').height((Y*12)/100)
                         
                     
        
                                $(".tabpubimgd").css({
          
                            //      'border': '1px solid rgba(233,0,0,0.5)',
                                  'border-radius': '5%',
                                  'box-shadow': '1px 1px 3px #555',
           
                                  'margin': '1%',
                                  'float': 'right',
                              //    'transform': 'rotate(45deg)',
                         
                                 
                                   
                                  }) ;
                                  $('.tabpubimgd').width((X*12)/100)
                                  $('.tabpubimgd').height((Y*14)/100)

                                  $(".tabpubimge").css({
          
                              //      'border': '1px solid rgba(233,0,0,0.5)',
                                'border-radius': '5%',
                                'box-shadow': '1px 1px 3px #555',
           
                                 'margin': '1%',
                                 //   'margin-right': '20%',
                                    'float': 'left',
                                //    'transform': 'rotate(45deg)',
                           
                                   
                                     
                                    }) ;
                                    $('.tabpubimge').width((X*12)/100)
                                    $('.tabpubimge').height((Y*14)/100)
                             
                                cssAnnonceur()
    
                
            
        }

        function cssAnnonceurResponse(){
          
          $(".divannonceur").css({
          
          //  'border': '1px solid black',
          //  'background':'rgba(236,255,66,0.2)',
            //'float': 'left',
           // 'border-radius': '15%',
            'margin-top': '31.5%',
            'margin-left': '50%',
            'position': 'absolute',

           
             
            }) ;
            $('.divannonceur').width((X*12)/100)
            $('.divannonceur').height((Y*3)/100)
     
            $(".divannonceura").css({
          
             // 'border': '1px solid red',
              // 'background':'rgba(236,255,66,0.2)',
 
               'margin': '4%',
              'box-shadow': '1px 1px 3px #555',
              
              
                
               }) ;

            $(".divannonceurb").css({
          
             // 'border': '1px solid black',
             // 'background':'rgba(236,255,66,0.2)',

             // 'border-radius': '15%',
             'box-shadow': '1px 1px 3px #555',
             'background':'rgba(0,0,0,0.05)',
              'position': 'absolute',
              'width': '33%',
             'height': '100%',
              'opacity': '0',
              'right': '1%',
              'top': '2%',

             
               
              }) ;
           //   $('.divannonceurb').width((X*17)/100)
           //   $('.divannonceurb').height((Y*30)/100)
       
           

               $(".contactermoi").css({
              
             
                'color': 'rgba(233,0,0,0.5)',
               // 'margin': 'auto' ,
                'padding-left': '12%' ,
                'cursor': 'pointer' ,
                'font-size': '15px',
                'text-decoration': 'underline',
            }) ;

            

            $(".labcontactmoi").css({
            
             
            // 'margin': '15%' ,
           // 'color': 'red' ,
                'cursor': 'pointer' ,
                'font-size': '14px',
                'color': 'black',
                'text-decoration': 'underline',
                
                }) ;
    
                

                $(".divannonceurcli").css({
                  'width': '30%',
                  'height': '10%',
                  'position': 'absolute',
                   'bottom': '3%' ,
                  'right': '30%' ,
                  'text-align': 'center' ,
                //    'border': '1px solid red' ,
                    'box-shadow': '1px 1px 3px #555',
                    }) ;
            $(".annonceurtel").css({
            
          //  'padding-left': '23%' ,
            'cursor': 'pointer' ,
            'font-size': '12px',
            }) ;

             
            $(".annonceuremail").css({
            
                //  'padding-left': '23%' ,
                  'cursor': 'pointer' ,
                  'font-size': '7px',
                  }) ;
      

                  $(".spananonce").css({
            
                    //  'padding-left': '23%' ,
                      // 'color': 'rgba(85,97,198,1)',
                       'color': '#00bfff',
                      
                       

                      }) ;

                  


            
        }


        function cssAnnonceur(){
          
          $(".divannonceur").css({
          
          //  'border': '1px solid black',
          //  'background':'rgba(236,255,66,0.2)',
            //'float': 'left',
           // 'border-radius': '15%',
            'margin-top': '31.5%',
            'margin-left': '50%',
            'position': 'absolute',

           
             
            }) ;
            $('.divannonceur').width((X*12)/100)
            $('.divannonceur').height((Y*3)/100)
     
            $(".divannonceura").css({
          
             // 'border': '1px solid red',
              // 'background':'rgba(236,255,66,0.2)',
 
               'margin': '4%',
              'box-shadow': '1px 1px 3px #555',
              
              
                
               }) ;

            $(".divannonceurb").css({
          
             // 'border': '1px solid black',
             // 'background':'rgba(236,255,66,0.2)',

             // 'border-radius': '15%',
             'box-shadow': '1px 1px 3px #555',
             'background':'rgba(0,0,0,0.05)',
              'position': 'absolute',
              'opacity': '0',
              'right': '1%',
              'top': '2%',

             
               
              }) ;
              $('.divannonceurb').width((X*17)/100)
              $('.divannonceurb').height((Y*30)/100)
       
           

               $(".contactermoi").css({
              //  'color': 'red' ,
                'color': 'rgba(233,0,0,0.5)',
                'padding-left': '23%' ,
                'cursor': 'pointer' ,
                'font-size': '15px',
                'text-decoration': 'underline',
            }) ;

            

            $(".labcontactmoi").css({
            
            //  'padding-left': '6%' ,
            // 'margin': '15%' ,
                'cursor': 'pointer' ,
                'font-size': '14px',
                'color': 'black',
                'text-decoration': 'underline',
                }) ;
    
            
            $(".annonceurtel").css({
            
          //  'padding-left': '23%' ,
            'cursor': 'pointer' ,
            'font-size': '12px',
            }) ;

             
            $(".annonceuremail").css({
            
                //  'padding-left': '23%' ,
                  'cursor': 'pointer' ,
                  'font-size': '9px',
                  }) ;
      

                  $(".spananonce").css({
            
                    //  'padding-left': '23%' ,
                      // 'color': 'rgba(85,97,198,1)',
                       'color': '#00bfff',
                      
                       

                      }) ;

                  


            
        }


        function cssReseauaResponse(){
          $(".imgrm , .imgri , .imgrt , .imgrf , .reseaub").width((X*4)/100)
            

          $(".imgrm , .imgri , .imgrt , .imgrf , .reseaub").css({
            'margin-top': '2%',
              'margin-left': '6%',
              }) ;



          $(".annonceuremail").css({
          
              //  'padding-left': '23%' ,
              //  'cursor': 'pointer' ,
              //  'font-size': '9px',
                }) ;


                $(".reseaua").css({
          
                  //  'padding-left': '23%' ,
                  'margin': '8%',
                //  'border': '1px solid black',
                  'box-shadow': '1px 1px 3px #555',
                 // 'background':'rgba(0,191,255,0.3)',
                    }) ;
      }

        function cssReseaua(){
            $(".imgrm , .imgri , .imgrt , .imgrf , .reseaub").width((X*2)/100)
              

            $(".imgrm , .imgri , .imgrt , .imgrf , .reseaub").css({
            
                'margin-left': '6%',
                }) ;



         //   $(".annonceuremail").css({
            
                //  'padding-left': '23%' ,
             //     'cursor': 'pointer' ,
              //    'font-size': '9px',
              //    }) ;


                  $(".reseaua").css({
            
                    //  'padding-left': '23%' ,
                    'margin': '8%',
                  //  'border': '1px solid black',
                    'box-shadow': '1px 1px 3px #555',
                   // 'background':'rgba(0,191,255,0.3)',
                      }) ;
        }


        function cssannoncpResponse(){
          
          $(".annoncp").css({
          
            'text-align': 'center' ,
            
           
            
          //  'background':'rgba(0,191,255,0.3)',
              }) ;
          $(".imgannonce").css({
          
              //  'padding-left': '23%' ,
            //  'margin-top': '18%',
              //'margin-left': '35%',
              'margin': 'auto',
              'box-shadow': '1px 1px 3px #555',
             // 'border': '1px solid black',
               'border-radius': '50%',
              
            //  'background':'rgba(0,191,255,0.3)',
                }) ;
  
                $('.imgannonce').width((X*8)/100)
              //  $('.imgannonce').height((Y*16.5)/100)
         

              $(".annoncnom").css({
          
                  //  'padding-left': '23%' ,
                //  'margin-left': '23%',
                  'font-weight': 'bold',
                  'font-size': '11px',
                  'font-style': 'italic',
                  
                    }) ;
              
      }
      

        function cssannoncp(){
            $(".imgannonce").css({
            
                //  'padding-left': '23%' ,
                'margin-top': '18%',
                'margin-left': '35%',
                'border': '1px solid black',
                 'border-radius': '50%',
                
              //  'background':'rgba(0,191,255,0.3)',
                  }) ;
    
                  $('.imgannonce').width((X*5)/100)
                //  $('.imgannonce').height((Y*16.5)/100)
           

                $(".annoncnom").css({
            
                    //  'padding-left': '23%' ,
                    'margin-left': '23%',
                    'font-size': '14px',
                    'font-style': 'italic',
                    
                      }) ;
                
        }
        



        
        function cssannonceResponse(){
          
            $(".annonces").css({
            
                //  'padding-left': '23%' ,
           //     'margin-top': '0.5%',
                'position': 'relative',
            //    'margin-left': '3%',
           //     'border': '1px solid #bafff0',
                'box-shadow': '1px 1px 3px #555',
                'margin': '1%',
             //    'border-radius': '50%',
              //  'background':'rgba(0,191,255,0.3)',
              'color': 'black' ,
              'text-align': 'center' ,
             
    
              'font-size' : '18px' ,
              'font-style' : 'italic' ,
              
            //  'background':'rgba(160,255,255,0.1)',
          //'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(public/image/decor/bb.jpg)',
            //     'background-image': 'url(public/image/decor/bd.jpg)',
              
            //    'background-repeat':'no-repeat',
             
               // 'background-position': 'center',
                // 'background-size': 'cover',
                
                  }) ;
    
                //  $('.annonces').width((X*63)/100)
               
                 $('.annonces').height((Y*18)/100)
   
                  $(".annonceslab").css({
            
                    //  'padding-left': '23%' ,
                    'position': 'absolute',
                   'top': '50%',
                   'left': '50%',
                   '-ms-transform': 'translate(-50%,-50%)',
                   'transform': 'translate(-50%,-50%)',
                  //  'margin-left': '3%',
                   
                 //    'border-radius': '50%',
                  //  'background':'rgba(0,190,255,0.3)',
                 // 'border': '1px solid blue',
                 'box-shadow': '1px 1px 3px #555',
                  'color': 'orange',
                  'width': '65%',
                //  'transform': 'rotate(-15deg)',
                       
                      }) ;
        

                      $(".annoncet").css({
            
                        //  'padding-left': '23%' ,
                      //  'position': 'relative',
                    //  'border': '1px solid red',
                      'position': 'absolute',
                          }) ;
                          $('.annoncet').width((X*63)/100)
                          $('.annoncet').height((Y*15)/100)
                   

                          $(".imganna").css({
            
                             'left': '1%' ,
                             'top': '1%' ,
                          //  'position': 'relative',
                        //  'transform': 'rotate(-10deg)',
                        'position': 'absolute',
                   //       'border': '1px solid blue',
                   'box-shadow': '1px 1px 3px #555',
                   'border-radius': '10%',
                              }) ;
                              $('.imganna').width((X*18)/100)
                           //   $('.imganna').height((Y*12)/100)
                   
                             

                                  $(".imgannb").css({
                                    'position': 'absolute',
                                    'right': '1%' ,
                                    'top': '52%' ,
                                    'box-shadow': '1px 1px 3px #555',
                                    'border-radius': '10%',
                                  //  'position': 'relative',
                                 // 'border': '1px solid blue',
                                      }) ;
                                      $('.imgannb').width((X*18)/100)
                                   //   $('.imgannb').height((Y*12)/100)
                       
                                      
                

                                      $(".imgfondannonce").css({
            
                                       'position': 'absolute',
                                       'width': '100%',
                                       'height': '100%',
                                  
              'left': '0%',
              'top': '0%',

                                         }) ;
                                      //   $('.imgfondannonce').width((X*63)/100)
                                       //  $('.imgfondannonce').height((Y*30)/100)
                                  
        }

        
        function cssannonce(){
          
          $(".annonces").css({
          
              //  'padding-left': '23%' ,
         //     'margin-top': '0.5%',
              'position': 'relative',
          //    'margin-left': '3%',
         //     'border': '1px solid #bafff0',
              'box-shadow': '1px 1px 3px #555',
              'margin': '1%',
           //    'border-radius': '50%',
            //  'background':'rgba(0,191,255,0.3)',
            'color': 'black' ,
            'text-align': 'center' ,
           
  
            'font-size' : '18px' ,
            'font-style' : 'italic' ,
            
          //  'background':'rgba(160,255,255,0.1)',
        //'background-image': 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(public/image/decor/bb.jpg)',
          //     'background-image': 'url(public/image/decor/bd.jpg)',
            
          //    'background-repeat':'no-repeat',
           
             // 'background-position': 'center',
              // 'background-size': 'cover',
              
                }) ;
  
                $('.annonces').width((X*63)/100)
                $('.annonces').height((Y*30)/100)
         
                $(".annonceslab").css({
          
                  //  'padding-left': '23%' ,
                  'position': 'absolute',
                 'top': '50%',
                 'left': '50%',
                 '-ms-transform': 'translate(-50%,-50%)',
                 'transform': 'translate(-50%,-50%)',
                //  'margin-left': '3%',
                 
               //    'border-radius': '50%',
                //  'background':'rgba(0,190,255,0.3)',
               // 'border': '1px solid blue',
               'box-shadow': '1px 1px 3px #555',
                'color': 'orange',
                'width': '65%',
              //  'transform': 'rotate(-15deg)',
                     
                    }) ;
      

                    $(".annoncet").css({
          
                      //  'padding-left': '23%' ,
                    //  'position': 'relative',
                  //  'border': '1px solid red',
                    'position': 'absolute',
                        }) ;
                        $('.annoncet').width((X*63)/100)
                        $('.annoncet').height((Y*15)/100)
                 

                        $(".imganna").css({
          
                           'left': '1%' ,
                           'top': '1%' ,
                        //  'position': 'relative',
                      //  'transform': 'rotate(-10deg)',
                      'position': 'absolute',
                 //       'border': '1px solid blue',
                 'box-shadow': '1px 1px 3px #555',
                 'border-radius': '10%',
                            }) ;
                            $('.imganna').width((X*12)/100)
                            $('.imganna').height((Y*12)/100)
                 
                           

                                $(".imgannb").css({
                                  'position': 'absolute',
                                  'right': '1%' ,
                                  'top': '58%' ,
                                  'box-shadow': '1px 1px 3px #555',
                                  'border-radius': '10%',
                                //  'position': 'relative',
                               // 'border': '1px solid blue',
                                    }) ;
                                    $('.imgannb').width((X*12)/100)
                                    $('.imgannb').height((Y*12)/100)
                     
                                    
              

                                    $(".imgfondannonce").css({
          
                                     'position': 'absolute',
                                     'width': '100%',
                                     'height': '100%',
                                
            'left': '0%',
            'top': '0%',

                                       }) ;
                                    //   $('.imgfondannonce').width((X*63)/100)
                                     //  $('.imgfondannonce').height((Y*30)/100)
                                
      }

      
      

        function cssRemerciment(){
          
          $("#remerciment").css({
            
            'position': 'absolute',
          //  'border': '1px solid blue',
            'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
           
       
'left': '1%',
'top': '25%',

              }) ;
              $("#remerciment").width((X*15)/100)
              $("#remerciment").height((Y*35)/100)

              $("#remercimentimg").css({
                'margin': '10%',
                //'margin-top': '10%',
                'border-radius': '10%',
                'box-shadow': '1px 1px 3px #555',
                  }) ;
                  $("#remercimentimg").width((X*12)/100)
                  $("#remercimentimg").height((Y*15)/100)


                  $("#descriptionremerc").css({
                    'margin-top': '10%',
                    'font-size': '10px',
                    'text-align': 'center'
    
                  }) ;
                //  $("#remercimentimg").width((X*15)/100)
               //   $("#remercimentimg").height((Y*15)/100)
       
        }


        function cssNew(){
          
          $("#new").css({
            
            'position': 'absolute',
          //  'border': '1px solid blue',
            'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
           
       
'right': '1%',
'top': '25%',

              }) ;
              $("#new").width((X*15)/100)
              $("#new").height((Y*35)/100)

              $("#imgnew").css({
                'margin': '10%',
                //'margin-top': '10%',
               // 'border-radius': '10%',
              // 'box-shadow': '1px 1px 3px #555',
                  }) ;
                  $("#imgnew").width((X*12)/100)
                  $("#imgnew").height((Y*15)/100)


                  $("#descnew").css({
                    'margin-top': '10%',
                    'font-size': '10px',
                    'text-align': 'center'
    
                  }) ;
                //  $("#remercimentimg").width((X*15)/100)
               //   $("#remercimentimg").height((Y*15)/100)
       
        }


        function cssNewB(){
          
          $("#newb").css({
            
            'position': 'absolute',
        
            'box-shadow': '0 0 35px rgba(0, 0, 0, 0.12)',
           
       
'right': '1%',
'top': '25%',

              }) ;
              $("#newb").width((X*15)/100)
              $("#newb").height((Y*35)/100)

              $("#imgnewb").css({
             //   'margin-top': '-5%',
                'margin': 'auto',
               // 'border-radius': '10%',
              // 'box-shadow': '1px 1px 3px #555',
                  }) ;
                  $("#imgnewb").width((X*15)/100)
                  $("#imgnewb").height((Y*15)/100)


                  $("#imgnewdes").css({
                   
                  }) ;
                  $("#imgnewdes").width((X*15)/100)
                   $("#imgnewdes").height((Y*20)/100)
       
        }